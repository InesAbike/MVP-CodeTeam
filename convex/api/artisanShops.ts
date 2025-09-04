import { query, mutation } from "../_generated/server";
import { v } from "convex/values";
import { geospatial } from "../geospatial";

/**
 * Create a new artisan shop.
 * @param {string} name - The name of the shop.
 * @param {string} description - A detailed description of the shop.
 * @param {object} location - The geographical information of the shop.
 * @param {string[]} categories - A list of product categories.
 * @param {string[]} images - An array of image URLs for the shop.
 * @param {object[]} openingHours - The weekly opening hours.
 * @param {string} [contact] - Optional contact information.
 * @param {boolean} isVerified - Whether the shop is verified by an admin.
 * @returns {Promise<string>} The ID of the newly created shop.
 */
export const createArtisanShop = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    location: v.object({
      lat: v.number(),
      lng: v.number(),
      address: v.string(),
      city: v.string(),
      department: v.string(),
      neighborhood: v.string(),
    }),
    categories: v.array(
      v.union(
        v.literal("textile"),
        v.literal("sculpture"),
        v.literal("bijouterie"),
        v.literal("poterie"),
        v.literal("vannerie")
      )
    ),
    images: v.array(v.string()),
    openingHours: v.array(
      v.object({
        day: v.union(
          v.literal(0), v.literal(1), v.literal(2), v.literal(3),
          v.literal(4), v.literal(5), v.literal(6)
        ),
        isClosed: v.boolean(),
        openingTime: v.optional(v.string()),
        closingTime: v.optional(v.string()),
      })
    ),
    contact: v.optional(v.string()),
    isVerified: v.boolean(),
  },
  handler: async (ctx, args) => {
    const shopId = await ctx.db.insert("artisanShops", args);
    // Insert the shop in the geospatial index
    await geospatial.insert(
      ctx,
      shopId, // Use the shop ID as the key
      { latitude: args.location.lat, longitude: args.location.lng },
      { categories: args.categories }, // Optional filters
      args.location.lat // Sort by latitude (can be adjusted)
    );
    return shopId;
  },
});

/**
 * Get all artisan shops with their image URLs.
 * @returns {Promise<object[]>} A list of all artisan shops with resolved image URLs.
 */
export const getArtisanShops = query({
  handler: async (ctx) => {
    const shops = await ctx.db.query("artisanShops").collect();
    return Promise.all(
      shops.map(async (shop) => {
        // For each shop, map the image StorageIDs to full URLs
        const imageUrls = await Promise.all(
          shop.images.map((imageId: string) => ctx.storage.getUrl(imageId))
        );
        // Filter out any null URLs
        return { ...shop, images: imageUrls.filter(Boolean) };
      })
    );
  },
});

/**
 * Get a single artisan shop by its ID with its image URLs.
 * @param {string} id - The ID of the shop to retrieve.
 * @returns {Promise<object|null>} The shop object with resolved image URLs, or null if not found.
 */
export const getArtisanShopById = query({
  args: { id: v.id("artisanShops") },
  handler: async (ctx, args) => {
    const shop = await ctx.db.get(args.id);

    if (!shop) {
      return null;
    }

    // Map the image StorageIDs to full URLs
    const imageUrls = await Promise.all(
      shop.images.map((imageId: string) => ctx.storage.getUrl(imageId))
    );
    // Filter out any null URLs
    return { ...shop, images: imageUrls.filter(Boolean) };
  },
});

/**
 * Update an existing artisan shop.
 * The ID of the shop is required. All other fields are optional.
 * @param {string} id - The ID of the shop to update.
 * @param {string} [name] - The new name of the shop.
 * @param {string} [description] - The new description.
 * @param {boolean} [isVerified] - The new verification status.
 * @// Add other fields as optional if they can be updated
 */
export const updateArtisanShop = mutation({
  args: {
    id: v.id("artisanShops"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    isVerified: v.optional(v.boolean()),
    // You can add other updatable fields here as v.optional(...)
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});

/**
 * Delete an artisan shop.
 * @param {string} id - The ID of the shop to delete.
 */
export const deleteArtisanShop = mutation({
  args: { id: v.id("artisanShops") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

/**
 * Find nearby artisan shops.
 * Uses the geospatial index for efficient proximity searches.
 * @param {number} lat - Latitude of the reference point.
 * @param {number} lng - Longitude of the reference point.
 * @param {number} [maxResults] - Maximum number of results (default: 10).
 * @param {number} [maxDistance] - Maximum distance in meters (optional).
 * @returns {Promise<Array<{key: string, coordinates: {latitude: number, longitude: number}}>>} List of nearby artisan shops with their coordinates.
 */
export const getNearbyArtisanShops = query({
  args: {
    lat: v.number(),
    lng: v.number(),
    maxResults: v.optional(v.number()),
    maxDistance: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const maxResults = args.maxResults || 10;
    const result = await geospatial.queryNearest(
      ctx,
      { latitude: args.lat, longitude: args.lng },
      maxResults,
      args.maxDistance
    );
    return result;
  },
});
