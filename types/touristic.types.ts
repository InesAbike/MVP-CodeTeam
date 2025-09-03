import { Id } from "@/convex/_generated/dataModel";

/**
 * Represents the category of a touristic site.
 */
export type TouristicSiteCategory = "culturel" | "naturel" | "historique" | "religieux";

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
 * Represents a full touristic site document from the database.
 */
export interface TouristicSite {
  _id: Id<"touristicSites">;
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
  category: TouristicSiteCategory;
  images: string[];
  openingHours: OpeningHours[];
  entranceFee?: number;
  contact?: string;
}

/**
 * Data Transfer Object for creating a new touristic site.
 * The `images` field is handled separately during the upload process.
 */
export interface CreateTouristicSiteDTO {
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
  category: TouristicSiteCategory;
  openingHours: OpeningHours[];
  entranceFee?: number;
  contact?: string;
}

/**
 * Data Transfer Object for updating an existing touristic site.
 */
export interface UpdateTouristicSiteDTO {
  id: Id<"touristicSites">;
  name?: string;
  description?: string;
  category?: TouristicSiteCategory;
  entranceFee?: number;
  contact?: string;
}
