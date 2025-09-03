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

  console.log(convexUrl);

  console.log("🌱 Starting database seeding...");

  // Initialize Convex client
  const client = new ConvexHttpClient(convexUrl);

  try {
    console.log("📍 Seeding touristic sites...");
    await client.mutation(api.api.seedData.seedTouristicSites);
    console.log("✅ Touristic sites seeded successfully");

    console.log("🏪 Seeding artisan shops...");
    await client.mutation(api.api.seedData.seedArtisanShops);
    console.log("✅ Artisan shops seeded successfully");

    console.log("✨ Database seeding completed successfully!");
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }

  process.exit(0);
}

main();
