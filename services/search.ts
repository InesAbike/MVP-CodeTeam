"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { SearchDTO, SearchAllResult } from "@/types/search.types";
import type { ArtisanShop } from "@/types/artisan.types";
import type { TouristicSite } from "@/types/touristic.types";

//================================================================================================
// SEARCH QUERIES
//================================================================================================

/**
 * Hook to perform a unified search across both touristic sites and artisan shops.
 * @param args - The search criteria (query, category, location filters, etc.).
 * @returns An object containing arrays of touristic sites and artisan shops, or undefined while loading.
 */
export const useSearchAll = (args: SearchDTO): SearchAllResult | undefined => {
  return useQuery(api.api.search.searchAll, args);
};

/**
 * Hook to search exclusively within touristic sites.
 * @param args - The search criteria.
 * @returns An array of touristic sites matching the criteria, or undefined while loading.
 */
export const useSearchTouristicSites = (args: SearchDTO): TouristicSite[] | undefined => {
  return useQuery(api.api.search.searchTouristicSitesOnly, args);
};

/**
 * Hook to search exclusively within artisan shops.
 * @param args - The search criteria.
 * @returns An array of artisan shops matching the criteria, or undefined while loading.
 */
export const useSearchArtisanShops = (args: SearchDTO): ArtisanShop[] | undefined => {
  return useQuery(api.api.search.searchArtisanShopsOnly, args);
};
