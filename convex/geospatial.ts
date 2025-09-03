import { GeospatialIndex } from "@convex-dev/geospatial";
import { components } from "./_generated/api";

/**
 * Instance of GeospatialIndex for geospatial queries.
 * Allows efficient insertion and search of geographic points.
 */
const geospatial = new GeospatialIndex(components.geospatial);

export { geospatial };