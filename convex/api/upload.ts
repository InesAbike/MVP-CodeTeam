import { mutation } from "../_generated/server";

/**
 * Generates a secure URL for uploading a file to Convex's file storage.
 * The client can use this URL to upload a file directly without the file
 * passing through a server function.
 * @returns {Promise<string>} The generated upload URL.
 */
export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl();
});
