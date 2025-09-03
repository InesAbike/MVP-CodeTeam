import { ArtisanShop } from "./artisan.types";
import { TouristicSite } from "./touristic.types";

/**
 * Data Transfer Object for all search queries.
 * All fields are optional.
 */
export interface SearchDTO {
  query?: string;
  category?: string;
  city?: string;
  department?: string;
  neighborhood?: string;
  limit?: number;
}

/**
 * Represents the result of a unified search, containing both touristic sites and artisan shops.
 */
export interface SearchAllResult {
  touristicSites: TouristicSite[];
  artisanShops: ArtisanShop[];
}
