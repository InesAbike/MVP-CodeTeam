"use client";

import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { TouristicSite, CreateTouristicSiteDTO, UpdateTouristicSiteDTO } from "@/types/touristic.types";
import { Id } from "@/convex/_generated/dataModel";

//================================================================================================
// GET QUERIES
//================================================================================================

/**
 * Hook to get all touristic sites.
 * @returns A list of all touristic sites, or undefined if loading.
 */
export const useGetTouristicSites = (): TouristicSite[] | undefined => {
  return useQuery(api.api.touristicSites.getTouristicSites);
};

/**
 * Hook to get a single touristic site by its ID.
 * @param id - The ID of the site to retrieve.
 * @returns The site object, or undefined if loading, or null if not found.
 */
export const useGetTouristicSiteById = (id: Id<"touristicSites">): TouristicSite | null | undefined => {
  return useQuery(api.api.touristicSites.getTouristicSiteById, { id });
};

//================================================================================================
// MUTATION HOOKS
//================================================================================================

/**
 * Hook for creating a new touristic site.
 * It handles file uploads for images and manages loading and error states.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export const useCreateTouristicSite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTouristicSiteMutation = useMutation(api.api.touristicSites.createTouristicSite);
  const generateUploadUrl = useMutation(api.api.upload.generateUploadUrl);

  /**
   * Creates a new touristic site with the provided data and images.
   * @param data - The DTO containing the site's information.
   * @param images - An array of File objects for the site's images.
   * @returns The ID of the newly created site, or null if an error occurred.
   */
  const mutate = async (
    data: CreateTouristicSiteDTO,
    images: File[]
  ): Promise<Id<"touristicSites"> | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // 1. Get upload URLs for each image
      const uploadUrls = await Promise.all(
        images.map(() => generateUploadUrl())
      );

      // 2. Upload each image to the corresponding URL
      const storageIds = await Promise.all(
        images.map(async (image, i) => {
          const result = await fetch(uploadUrls[i], {
            method: "POST",
            headers: { "Content-Type": image.type },
            body: image,
          });
          if (!result.ok) {
            throw new Error(`Upload failed for image ${i + 1}: ${await result.text()}`);
          }
          const { storageId } = await result.json();
          return storageId;
        })
      );

      // 3. Create the touristic site document with the storage IDs
      const newSiteId = await createTouristicSiteMutation({
        ...data,
        images: storageIds,
      });

      setIsLoading(false);
      return newSiteId;
     } catch (e) {
       console.error("Error creating touristic site:", e);
       setError((e as Error).message);
       setIsLoading(false);
       return null;
     }
  };

  return { mutate, isLoading, error };
};

/**
 * Hook for updating an existing touristic site.
 * Manages loading and error states. Note: This does not handle image updates.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export const useUpdateTouristicSite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const updateTouristicSiteMutation = useMutation(api.api.touristicSites.updateTouristicSite);

  /**
   * Updates a touristic site with the provided data.
   * @param data - The DTO containing the fields to update, including the site's ID.
   * @returns A boolean indicating whether the update was successful.
   */
  const mutate = async (
    data: UpdateTouristicSiteDTO
  ): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await updateTouristicSiteMutation(data);
      setIsLoading(false);
      return true;
     } catch (e) {
       console.error("Error updating touristic site:", e);
       setError((e as Error).message);
       setIsLoading(false);
       return false;
     }
  };

  return { mutate, isLoading, error };
};

/**
 * Hook for deleting a touristic site.
 * Manages loading and error states.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export const useDeleteTouristicSite = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const deleteTouristicSiteMutation = useMutation(api.api.touristicSites.deleteTouristicSite);

  /**
   * Deletes a touristic site by its ID.
   * @param id - The ID of the site to delete.
   * @returns A boolean indicating whether the deletion was successful.
   */
  const mutate = async (id: Id<"touristicSites">): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteTouristicSiteMutation({ id });
      setIsLoading(false);
      return true;
     } catch (e) {
       console.error("Error deleting touristic site:", e);
       setError((e as Error).message);
       setIsLoading(false);
       return false;
     }
  };

  return { mutate, isLoading, error };
};
