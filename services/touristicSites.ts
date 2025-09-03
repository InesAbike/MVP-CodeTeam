import { useConvex, useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

//================================================================================================
// GET QUERIES
//================================================================================================

/**
 * Hook to get all touristic sites.
 * @returns A list of all touristic sites, or undefined if loading.
 */
export const useGetTouristicSites = () => {
  return useQuery(api.api.touristicSites.getTouristicSites);
};

/**
 * Hook to get a single touristic site by its ID.
 * @param id - The ID of the site to retrieve.
 * @returns The site object, or undefined if loading, or null if not found.
 */
export const useGetTouristicSiteById = (id: Id<"touristicSites">) => {
  return useQuery(api.api.touristicSites.getTouristicSiteById, { id });
};

//================================================================================================
// MUTATIONS
//================================================================================================

/**
 * Hook to get the mutation function for creating a touristic site.
 * Handles file uploads for images.
 * @returns A function to create a new touristic site.
 */
export const useCreateTouristicSite = () => {
  const convex = useConvex();
  const createTouristicSiteMutation = useMutation(
    api.api.touristicSites.createTouristicSite
  );
  const generateUploadUrl = useMutation(api.api.upload.generateUploadUrl);

  const createTouristicSite = async (data: any, images: File[]) => {
    // 1. Generate upload URLs for all images
    const uploadUrls = await Promise.all(
      images.map(() => generateUploadUrl())
    );

    // 2. Upload all images in parallel
    const uploadResults = await Promise.all(
      images.map(async (image, i) => {
        const response = await fetch(uploadUrls[i], {
          method: "POST",
          headers: { "Content-Type": image.type },
          body: image,
        });
        const { storageId } = await response.json();
        return storageId;
      })
    );

    // 3. Create the touristic site with the storage IDs
    return await createTouristicSiteMutation({
      ...data,
      images: uploadResults,
    });
  };

  return createTouristicSite;
};

/**
 * Hook to get the mutation function for updating a touristic site.
 * @returns A function to update an existing touristic site.
 */
export const useUpdateTouristicSite = () => {
  return useMutation(api.api.touristicSites.updateTouristicSite);
};

/**
 * Hook to get the mutation function for deleting a touristic site.
 * @returns A function to delete a touristic site.
 */
export const useDeleteTouristicSite = () => {
  return useMutation(api.api.touristicSites.deleteTouristicSite);
};
