import { GeospatialIndex } from "@convex-dev/geospatial";
import { components } from "./_generated/api";

/**
 * Instance du GeospatialIndex pour les requêtes géospatiales.
 * Permet d'insérer et de rechercher des points géographiques efficacement.
 */
const geospatial = new GeospatialIndex(components.geospatial);

export { geospatial };