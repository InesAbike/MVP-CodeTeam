import { query } from "../_generated/server";

/**
 * Get the top 10 touristic sites.
 * The ordering is based on creation time by default.
 * @returns {Promise<object[]>} A list of up to 10 touristic sites with resolved image URLs.
 */
export const getTopTouristicSites = query({
  handler: async (ctx) => {
    const sites = await ctx.db.query("touristicSites").take(10);
    return Promise.all(
      sites.map(async (site) => {
        // For each site, map the image StorageIDs to full URLs
        const imageUrls = await Promise.all(
          site.images.map((imageId: string) => ctx.storage.getUrl(imageId))
        );
        // Filter out any null URLs and handle potential nulls
        return { ...site, images: imageUrls.filter((url): url is string => url !== null) };
      })
    );
  },
});

/**
 * Get the top 10 artisan shops.
 * The ordering is based on creation time by default.
 * @returns {Promise<object[]>} A list of up to 10 artisan shops with resolved image URLs.
 */
export const getTopArtisanShops = query({
  handler: async (ctx) => {
    const shops = await ctx.db.query("artisanShops").take(10);
    return Promise.all(
      shops.map(async (shop) => {
        // For each shop, map the image StorageIDs to full URLs
        const imageUrls = await Promise.all(
          shop.images.map((imageId: string) => ctx.storage.getUrl(imageId))
        );
        // Filter out any null URLs and handle potential nulls
        return { ...shop, images: imageUrls.filter((url): url is string => url !== null) };
      })
    );
  },
});
