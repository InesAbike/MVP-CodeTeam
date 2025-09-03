import { Id } from "@/convex/_generated/dataModel";

/**
 * Represents the category of an artisan shop.
 */
export type ArtisanCategory = "textile" | "sculpture" | "bijouterie" | "poterie" | "vannerie";

/**
 * Represents the opening hours for a single day.
 */
export interface OpeningHours {
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  isClosed: boolean;
  openingTime?: string;
  closingTime?: string;
}

/**
 * Represents a full artisan shop document from the database.
 */
export interface ArtisanShop {
  _id: Id<"artisanShops">;
  _creationTime: number;
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    department: string;
    neighborhood: string;
  };
  categories: ArtisanCategory[];
  images: string[];
  openingHours: OpeningHours[];
  contact?: string;
  isVerified: boolean;
}

/**
 * Data Transfer Object for creating a new artisan shop.
 * `isVerified` is handled automatically on the backend.
 */
export interface CreateArtisanShopDTO {
  name: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
    city: string;
    department: string;
    neighborhood: string;
  };
  categories: ArtisanCategory[];
  images: string[];
  openingHours: OpeningHours[];
  contact?: string;
  isVerified: boolean;
}

/**
 * Data Transfer Object for updating an existing artisan shop.
 * Note: Image, location, and other sensitive fields may require separate update logic.
 */
export interface UpdateArtisanShopDTO {
  id: Id<"artisanShops">;
  name?: string;
  description?: string;
  isVerified?: boolean;
}

/**
 * Data Transfer Object for finding nearby artisan shops.
 */
export interface NearbyArtisanShopsDTO {
  lat: number;
  lng: number;
  maxResults?: number;
  maxDistance?: number;
}

/**
 * Represents the result from a nearby artisan shop query.
 * Contains the shop's ID, its coordinates, and distance from the reference point.
 */
export interface NearbyArtisanShopResult {
  key: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  distance: number;
}
