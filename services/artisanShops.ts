import { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { ArtisanShop, CreateArtisanShopDTO, UpdateArtisanShopDTO, NearbyArtisanShopsDTO, NearbyArtisanShopResult } from "@/types/artisan.types";
import { Id } from "@/convex/_generated/dataModel";



//================================================================================================
// GET QUERIES
//================================================================================================

/**
 * Hook to fetch all artisan shops in real-time.
 * @returns An array of artisan shops, or undefined while loading.
 */
export const useGetArtisanShops = (): ArtisanShop[] | undefined => {
  return useQuery(api.api.artisanShops.getArtisanShops);
};

/**
 * Hook to fetch a single artisan shop by its ID in real-time.
 * @param id - The ID of the artisan shop to fetch.
 * @returns The artisan shop, null if not found, or undefined while loading.
 */
export const useGetArtisanShopById = (id: Id<"artisanShops">): ArtisanShop | null | undefined => {
  return useQuery(api.api.artisanShops.getArtisanShopById, { id });
};

/**
 * Hook to find nearby artisan shops based on geographic coordinates.
 * Note: This hook returns basic location data. You may need to fetch full shop details separately.
 * @param args - The arguments for the nearby search.
 * @returns An array of nearby shops with their ID and coordinates, or undefined while loading.
 */
export const useGetNearbyArtisanShops = (args: NearbyArtisanShopsDTO): NearbyArtisanShopResult[] | undefined => {
  return useQuery(api.api.artisanShops.getNearbyArtisanShops, args);
};

//================================================================================================
// MUTATION HOOKS
//================================================================================================

/**
 * Hook for creating a new artisan shop.
 * It handles file uploads for images and manages loading and error states.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export const useCreateArtisanShop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createArtisanShopMutation = useMutation(api.api.artisanShops.createArtisanShop);
  const generateUploadUrl = useMutation(api.api.upload.generateUploadUrl);

  /**
   * Creates a new artisan shop with the provided data and images.
   * @param data - The DTO containing the shop's information.
   * @param images - An array of File objects for the shop's images.
   * @returns The ID of the newly created shop, or null if an error occurred.
   */
  const mutate = async (
    data: CreateArtisanShopDTO,
    images: File[]
  ): Promise<Id<"artisanShops"> | null> => {
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

      // 3. Create the artisan shop document with the storage IDs
      const newShopId = await createArtisanShopMutation({
        ...data,
        images: storageIds,
        isVerified: false, // Shops are not verified by default
      });

      setIsLoading(false);
      return newShopId;
    } catch (e) {
      console.error("Error creating artisan shop:", e);
      setError((e as Error).message);
      setIsLoading(false);
      return null;
    }
  };

  return { mutate, isLoading, error };
};

/**
 * Hook for updating an existing artisan shop.
 * Manages loading and error states. Note: This does not handle image updates.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export const useUpdateArtisanShop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const updateArtisanShopMutation = useMutation(api.api.artisanShops.updateArtisanShop);

  /**
   * Updates an artisan shop with the provided data.
   * @param data - The DTO containing the fields to update, including the shop's ID.
   * @returns A boolean indicating whether the update was successful.
   */
  const mutate = async (
    data: UpdateArtisanShopDTO
  ): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await updateArtisanShopMutation(data);
      setIsLoading(false);
      return true;
    } catch (e) {
      console.error("Error updating artisan shop:", e);
      setError((e as Error).message);
      setIsLoading(false);
      return false;
    }
  };

  return { mutate, isLoading, error };
};

/**
 * Hook for deleting an artisan shop.
 * Manages loading and error states.
 * @returns An object containing the mutate function, loading state, and error state.
 */
export const useDeleteArtisanShop = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const deleteArtisanShopMutation = useMutation(api.api.artisanShops.deleteArtisanShop);

  /**
   * Deletes an artisan shop by its ID.
   * @param id - The ID of the shop to delete.
   * @returns A boolean indicating whether the deletion was successful.
   */
  const mutate = async (id: Id<"artisanShops">): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    try {
      await deleteArtisanShopMutation({ id });
      setIsLoading(false);
      return true;
    } catch (e) {
      console.error("Error deleting artisan shop:", e);
      setError((e as Error).message);
      setIsLoading(false);
      return false;
    }
  };

  return { mutate, isLoading, error };
};
