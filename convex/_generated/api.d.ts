/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as api_artisanShops from "../api/artisanShops.js";
import type * as api_seedData from "../api/seedData.js";
import type * as api_touristicSites from "../api/touristicSites.js";
import type * as api_upload from "../api/upload.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "api/artisanShops": typeof api_artisanShops;
  "api/seedData": typeof api_seedData;
  "api/touristicSites": typeof api_touristicSites;
  "api/upload": typeof api_upload;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
