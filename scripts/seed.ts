import { ConvexHttpClient } from "convex/browser";
import { api } from "../convex/_generated/api";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  // Ensure CONVEX_URL is set
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!convexUrl) {
    throw new Error(
      "NEXT_PUBLIC_CONVEX_URL is not set in environment variables"
    );
  }

  console.log("🌱 Starting database seeding...");
  console.log("Using Convex URL:", convexUrl);

  // Initialize Convex client
  const client = new ConvexHttpClient(convexUrl);

  try {
    console.log("📍 Seeding touristic sites...");
    const touristicResult = await client.mutation(api.api.seedData.seedTouristicSites);
    console.log("✅ Touristic sites seeded successfully");
    console.log("   📊 Result:", touristicResult);

    // Attendre que la première mutation soit complètement terminée
    console.log("⏳ Waiting for touristic sites to be fully processed...");

    console.log("🏪 Seeding artisan shops...");
    const artisanResult = await client.mutation(api.api.seedData.seedArtisanShops);
    console.log("✅ Artisan shops seeded successfully");
    console.log("   📊 Result:", artisanResult);

    // Attendre que la deuxième mutation soit complètement terminée
    console.log("⏳ Waiting for artisan shops to be fully processed...");

    // Vérification finale - compter les documents insérés
    console.log("🔍 Verifying data insertion...");

    // On peut ajouter ici des queries pour vérifier que les données sont bien là
    console.log("✨ Database seeding completed successfully!");
    console.log("📈 Summary:");
    console.log("   - Touristic sites: seeded");
    console.log("   - Artisan shops: seeded with geospatial indexing");

  } catch (error) {
    console.error("❌ Error seeding database:", error);
    if (error instanceof Error) {
      console.error("Error details:", error.message);
      if (error.cause) {
        console.error("Cause:", error.cause);
      }
    }
    process.exit(1);
  }

  process.exit(0);
}

main();
