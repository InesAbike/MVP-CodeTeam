"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { ArtisanShop } from "@/types/artisan.types";
import type { TouristicSite } from "@/types/touristic.types";

//================================================================================================
// INDEX QUERIES
//================================================================================================

/**
 * Hook to fetch the top 10 touristic sites.
 * @returns An array of up to 10 touristic sites, or undefined while loading.
 */
export const useGetTopTouristicSites = (): TouristicSite[] | undefined => {
  return useQuery(api.api.index.getTopTouristicSites);
};

/**
 * Hook to fetch the top 10 artisan shops.
 * @returns An array of up to 10 artisan shops, or undefined while loading.
 */
export const useGetTopArtisanShops = (): ArtisanShop[] | undefined => {
  return useQuery(api.api.index.getTopArtisanShops);
};
