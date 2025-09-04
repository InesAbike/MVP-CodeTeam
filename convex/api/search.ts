import { query } from "../_generated/server";
import { v } from "convex/values";
import { safeLowerCase } from "../utils/stringUtils";

/**
 * Interface for search arguments
 */
interface SearchArgs {
  query?: string;
  category?: string;
  city?: string;
  department?: string;
  neighborhood?: string;
  limit?: number;
}

/**
 * Helper function to search for tourist sites
 */
async function searchTouristicSites(ctx: any, args: SearchArgs, limit: number) {
  // Get all tourist sites
  const allSites = await ctx.db.query("touristicSites").collect();

  // Apply filters in JavaScript
  let filteredSites = allSites.filter((site: any) => {
    // Filter by city
    if (args.city && site.location.city !== args.city) {
      return false;
    }

    // Filter by department
    if (args.department && site.location.department !== args.department) {
      return false;
    }

    // Filter by neighborhood
    if (args.neighborhood && site.location.neighborhood !== args.neighborhood) {
      return false;
    }

    // Filter by category
    if (args.category && site.category !== args.category) {
      return false;
    }

    // Text search in name and description
    if (args.query) {
      const searchTerm = safeLowerCase(args.query);
      const name = safeLowerCase(site.name);
      const description = safeLowerCase(site.description);
      if (!name.includes(searchTerm) && !description.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });

  // Limit the results
  filteredSites = filteredSites.slice(0, limit);

  // Resolve image URLs
  return Promise.all(
    filteredSites.map(async (site: any) => {
      const imageUrls = await Promise.all(
        site.images.map((imageId: string) => ctx.storage.getUrl(imageId))
      );
      return { ...site, images: imageUrls.filter(Boolean) };
    })
  );
}

/**
 * Helper function to search for artisan shops
 */
async function searchArtisanShops(ctx: any, args: SearchArgs, limit: number) {
  // Get all artisan shops
  const allShops = await ctx.db.query("artisanShops").collect();

  // Apply filters in JavaScript
  let filteredShops = allShops.filter((shop: any) => {
    // Filter by city
    if (args.city && shop.location.city !== args.city) {
      return false;
    }

    // Filter by department
    if (args.department && shop.location.department !== args.department) {
      return false;
    }

    // Filter by neighborhood
    if (args.neighborhood && shop.location.neighborhood !== args.neighborhood) {
      return false;
    }

    // Filter by category (array contains)
    if (args.category && !shop.categories.includes(args.category)) {
      return false;
    }

    // Text search in name and description
    if (args.query) {
      const searchTerm = safeLowerCase(args.query);
      const name = safeLowerCase(shop.name);
      const description = safeLowerCase(shop.description);
      if (!name.includes(searchTerm) && !description.includes(searchTerm)) {
        return false;
      }
    }

    return true;
  });

  // Limit the results
  filteredShops = filteredShops.slice(0, limit);

  // Resolve image URLs
  return Promise.all(
    filteredShops.map(async (shop: any) => {
      const imageUrls = await Promise.all(
        shop.images.map((imageId: string) => ctx.storage.getUrl(imageId))
      );
      return { ...shop, images: imageUrls.filter(Boolean) };
    })
  );
}

/**
 * Unified search in tourist sites and artisan shops
 * @param {string} [query] - Text search term (name, description)
 * @param {string} [category] - Category filter
 * @param {string} [city] - City filter
 * @param {string} [department] - Department filter
 * @param {string} [neighborhood] - Neighborhood filter
 * @param {number} [limit] - Nombre maximum de résultats par tableau (défaut: 20)
 * @returns {Promise<{touristicSites: object[], artisanShops: object[]}>} Deux tableaux de résultats
 */
export const searchAll = query({
  args: {
    query: v.optional(v.string()),
    category: v.optional(v.string()),
    city: v.optional(v.string()),
    department: v.optional(v.string()),
    neighborhood: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit || 20;

    // Execute searches in parallel to optimize performance
    const [touristicSites, artisanShops] = await Promise.all([
      searchTouristicSites(ctx, args, limit),
      searchArtisanShops(ctx, args, limit)
    ]);

    return {
      touristicSites,
      artisanShops
    };
  },
});

/**
 * Search only in tourist sites
 * @param {string} [query] - Text search term (name, description)
 * @param {string} [category] - Category filter
 * @param {string} [city] - City filter
 * @param {string} [department] - Department filter
 * @param {string} [neighborhood] - Neighborhood filter
 * @param {number} [limit] - Nombre maximum de résultats
 * @returns {Promise<object[]>} Liste des sites touristiques
 */
export const searchTouristicSitesOnly = query({
  args: {
    query: v.optional(v.string()),
    category: v.optional(v.string()),
    city: v.optional(v.string()),
    department: v.optional(v.string()),
    neighborhood: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit || 20;
    return await searchTouristicSites(ctx, args, limit);
  },
});

/**
 * Search only in artisan shops
 * @param {string} [query] - Text search term (name, description)
 * @param {string} [category] - Category filter
 * @param {string} [city] - City filter
 * @param {string} [department] - Department filter
 * @param {string} [neighborhood] - Neighborhood filter
 * @param {number} [limit] - Number of results
 * @returns {Promise<object[]>} List of artisan shops
 */
export const searchArtisanShopsOnly = query({
  args: {
    query: v.optional(v.string()),
    category: v.optional(v.string()),
    city: v.optional(v.string()),
    department: v.optional(v.string()),
    neighborhood: v.optional(v.string()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit || 20;
    return await searchArtisanShops(ctx, args, limit);
  },
});