import { query, mutation } from "../_generated/server";
import { v } from "convex/values";

/**
 * Create a new touristic site.
 * @param {string} name - The name of the site.
 * @param {string} description - A detailed description of the site.
 * @param {object} location - The geographical information of the site.
 * @param {string} category - The category of the site.
 * @param {string[]} images - An array of image URLs for the site.
 * @param {object[]} openingHours - The weekly opening hours.
 * @param {number} [entranceFee] - Optional entrance fee.
 * @param {string} [contact] - Optional contact information.
 * @returns {Promise<string>} The ID of the newly created site.
 */
export const createTouristicSite = mutation({
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
    category: v.union(
      v.literal("culturel"),
      v.literal("naturel"),
      v.literal("historique"),
      v.literal("religieux")
    ),
    images: v.array(v.string()),
    openingHours: v.array(
      v.object({
        day: v.union(
          v.literal(0),
          v.literal(1),
          v.literal(2),
          v.literal(3),
          v.literal(4),
          v.literal(5),
          v.literal(6)
        ),
        isClosed: v.boolean(),
        openingTime: v.optional(v.string()),
        closingTime: v.optional(v.string()),
      })
    ),
    entranceFee: v.optional(v.number()),
    contact: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const siteId = await ctx.db.insert("touristicSites", args);
    return siteId;
  },
});

/**
 * Get all touristic sites with their image URLs.
 * @returns {Promise<object[]>} A list of all touristic sites with resolved image URLs.
 */
export const getTouristicSites = query({
  handler: async (ctx) => {
    const sites = await ctx.db.query("touristicSites").collect();
    return Promise.all(
      sites.map(async (site) => {
        // For each site, map the image StorageIDs to full URLs
        const imageUrls = await Promise.all(
          site.images.map((imageId: string) => ctx.storage.getUrl(imageId))
        );
        // Filter out any null URLs
        return { ...site, images: imageUrls.filter(Boolean) };
      })
    );
  },
});

/**
 * Get a single touristic site by its ID with its image URLs.
 * @param {string} id - The ID of the site to retrieve.
 * @returns {Promise<object|null>} The site object with resolved image URLs, or null if not found.
 */
export const getTouristicSiteById = query({
  args: { id: v.id("touristicSites") },
  handler: async (ctx, args) => {
    const site = await ctx.db.get(args.id);

    if (!site) return null;

    // Map the image StorageIDs to full URLs
    const imageUrls = await Promise.all(
      site.images.map((imageId: string) => ctx.storage.getUrl(imageId))
    );
    // Filter out any null URLs
    return { ...site, images: imageUrls.filter(Boolean) };
  },
});

/**
 * Update an existing touristic site.
 * The ID of the site is required. All other fields are optional.
 * @param {string} id - The ID of the site to update.
 * @param {string} [name] - The new name of the site.
 * @param {string} [description] - The new description.
 * @param {string} [category] - The new category.
 * @param {number} [entranceFee] - The new entrance fee.
 * @param {string} [contact] - The new contact information.
 */
export const updateTouristicSite = mutation({
  args: {
    id: v.id("touristicSites"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    category: v.optional(
      v.union(
        v.literal("culturel"),
        v.literal("naturel"),
        v.literal("historique"),
        v.literal("religieux")
      )
    ),
    entranceFee: v.optional(v.number()),
    contact: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});

/**
 * Delete a touristic site.
 * @param {string} id - The ID of the site to delete.
 */
export const deleteTouristicSite = mutation({
  args: { id: v.id("touristicSites") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
