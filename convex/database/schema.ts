import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";


export default defineSchema({

    /**
     * Represents a tourist site
     * @property {string} name - Site name
     * @property {string} description - Detailed description
     * @property {Object} location - Geographic information
     * @property {number} location.lat - Latitude
     * @property {number} location.lng - Longitude
     * @property {string} location.address - Full address
     * @property {string} location.city - City
     * @property {string} location.department - Department/Region
     * @property {string} location.neighborhood - Neighborhood
     * @property {'culturel'|'naturel'|'historique'|'religieux'} category - Site category
     * @property {string[]} images - Array of image URLs
     * @property {Array<Object>} openingHours - Opening hours
     * @property {number} openingHours[].day - Day of week (0=Sunday, 6=Saturday)
     * @property {boolean} openingHours[].isClosed - Whether the site is closed this day
     * @property {string} [openingHours[].openingTime] - Opening time (format "HH:MM")
     * @property {string} [openingHours[].closingTime] - Closing time (format "HH:MM")
     * @property {number} [entranceFee] - Entrance fee in local currency
     * @property {string} [contact] - Contact information
     */

    touristicSites: defineTable({
        name: v.string(),
        description: v.string(),
        location: v.object({
            lat: v.number(),
            lng: v.number(),
            address: v.string(),
            city: v.string(),
            department: v.string(),
            neighborhood: v.string(),
        }),
        category: v.union(
            v.literal("culturel"),
            v.literal("naturel"),
            v.literal("historique"),
            v.literal("religieux")
        ),
        images: v.array(v.string()),
        openingHours: v.array(
            v.object({
                day: v.union(
                    v.literal(0), v.literal(1), v.literal(2), v.literal(3),
                    v.literal(4), v.literal(5), v.literal(6)
                ),
                isClosed: v.boolean(),
                openingTime: v.optional(v.string()),
                closingTime: v.optional(v.string()),
            })
        ),
        entranceFee: v.optional(v.number()),
        contact: v.optional(v.string()),
    }),


    /**
   * Represents an artisan shop
   * @property {string} name - Shop name
   * @property {string} description - Detailed description
   * @property {Object} location - Geographic information
   * @property {number} location.lat - Latitude
   * @property {number} location.lng - Longitude
   * @property {string} location.address - Full address
   * @property {Array<'textile'|'sculpture'|'bijouterie'|'poterie'|'vannerie'>} categories - Product categories
   * @property {string[]} images - Array of image URLs
   * @property {Array<Object>} openingHours - Opening hours
   * @property {number} openingHours[].day - Day of week (0=Sunday, 6=Saturday)
   * @property {boolean} openingHours[].isClosed - Whether the shop is closed this day
   * @property {string} [openingHours[].openingTime] - Opening time (format "HH:MM")
   * @property {string} [openingHours[].closingTime] - Closing time (format "HH:MM")
   * @property {string} [contact] - Contact information
   * @property {boolean} isVerified - Whether the shop is verified by an admin
   */

    artisanShops: defineTable({
        name: v.string(),
        description: v.string(),
        location: v.object({
            lat: v.number(),
            lng: v.number(),
            address: v.string(),
        }),
        categories: v.array(
            v.union(
                v.literal("textile"),
                v.literal("sculpture"),
                v.literal("bijouterie"),
                v.literal("poterie"),
                v.literal("vannerie")
            )
        ),
        images: v.array(v.string()),
        openingHours: v.array(
            v.object({
                day: v.union(
                    v.literal(0), v.literal(1), v.literal(2), v.literal(3),
                    v.literal(4), v.literal(5), v.literal(6)
                ),
                isClosed: v.boolean(),
                openingTime: v.optional(v.string()),
                closingTime: v.optional(v.string()),
            })
        ),
        contact: v.optional(v.string()),
        isVerified: v.boolean(),
    }),
});