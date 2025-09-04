import { mutation } from "../_generated/server";
import { geospatial } from "../geospatial";

/**
 * Seed the database with initial touristic sites data
 */
export const seedTouristicSites = mutation({
  args: {},
  handler: async (ctx) => {
    const sites = [
      {
        name: "Porte du Non Retour",
        description:
          "Monument historique à Ouidah commémorant la traite négrière. Ce site emblématique marque le dernier point de départ des esclaves vers les Amériques.",
        location: {
          lat: 6.3215,
          lng: 2.0891,
          address: "Route des Esclaves",
          city: "Ouidah",
          department: "Atlantique",
          neighborhood: "Djègbadji",
        },
        category: "historique",
        images: [], // Add image IDs after upload
        openingHours: [
          {
            day: 0,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 1,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
        ],
        entranceFee: 1000, // in FCFA
        contact: "+229 97000000",
      },
      {
        name: "Palais Royal d'Abomey",
        description:
          "Site du patrimoine mondial de l'UNESCO, ce complexe de palais témoigne de la puissance du royaume du Dahomey. Les murs sont décorés de bas-reliefs représentant les symboles des rois.",
        location: {
          lat: 7.1829,
          lng: 1.9912,
          address: "Route des Palais",
          city: "Abomey",
          department: "Zou",
          neighborhood: "Quartier Royal",
        },
        category: "culturel",
        images: [], // Add image IDs after upload
        openingHours: [
          {
            day: 0,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          { day: 1, isClosed: true },
          {
            day: 2,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
        ],
        entranceFee: 2500,
        contact: "+229 97111111",
      },
      {
        name: "Parc National de la Pendjari",
        description:
          "L'un des plus beaux parcs d'Afrique de l'Ouest, abritant des lions, éléphants, antilopes et de nombreuses espèces d'oiseaux. Le parc offre des safaris spectaculaires.",
        location: {
          lat: 11.2762,
          lng: 1.8282,
          address: "Route de la Pendjari",
          city: "Tanguiéta",
          department: "Atakora",
          neighborhood: "Pendjari",
        },
        category: "naturel",
        images: [], // Add image IDs after upload
        openingHours: [
          {
            day: 0,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
          {
            day: 1,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "18:00",
          },
        ],
        entranceFee: 5000,
        contact: "+229 97222222",
      },
      {
        name: "Basilique de l'Immaculée Conception",
        description:
          "La plus grande église catholique d'Afrique de l'Ouest, construite en 1909. Son architecture unique mêle style gothique et influences africaines.",
        location: {
          lat: 6.3702,
          lng: 2.3912,
          address: "Boulevard Mgr Steinmetz",
          city: "Ouidah",
          department: "Atlantique",
          neighborhood: "Centre-ville",
        },
        category: "religieux",
        images: [], // Add image IDs after upload
        openingHours: [
          {
            day: 0,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
          {
            day: 1,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "06:00",
            closingTime: "19:00",
          },
        ],
        entranceFee: 0,
        contact: "+229 97333333",
      },
    ];

    for (const site of sites) {
      await ctx.db.insert("touristicSites", site);
    }

    return "Touristic sites seeded successfully";
  },
});

/**
 * Seed the database with initial artisan shops data
 */
export const seedArtisanShops = mutation({
  args: {},
  handler: async (ctx) => {
    const shops = [
      {
        name: "Centre des Arts et de la Culture",
        description:
          "Centre artisanal réputé de Cotonou, proposant une large gamme d'artisanat béninois traditionnel, notamment des sculptures en bois, des tissus, et des bijoux.",
        location: {
          lat: 6.3573,
          lng: 2.3912,
          address: "Boulevard de la Marina",
          city: "Cotonou",
          department: "Littoral",
          neighborhood: "Haie Vive",
        },
        categories: ["sculpture", "textile", "bijouterie"],
        images: [], // Add image IDs after upload
        openingHours: [
          { day: 0, isClosed: true },
          {
            day: 1,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "18:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "17:00",
          },
        ],
        contact: "+229 97444444",
        isVerified: true,
      },
      {
        name: "Atelier de Poterie Traditionnelle",
        description:
          "Atelier familial spécialisé dans la poterie traditionnelle béninoise, transmettant un savoir-faire ancestral de génération en génération.",
        location: {
          lat: 7.1867,
          lng: 1.9989,
          address: "Quartier Hounli",
          city: "Abomey",
          department: "Zou",
          neighborhood: "Hounli",
        },
        categories: ["poterie"],
        images: [], // Add image IDs after upload
        openingHours: [
          { day: 0, isClosed: true },
          {
            day: 1,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "17:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "08:00",
            closingTime: "16:00",
          },
        ],
        contact: "+229 97555555",
        isVerified: true,
      },
      {
        name: "Marché des Tissus de Dantokpa",
        description:
          "Plus grand marché de tissus d'Afrique de l'Ouest, célèbre pour ses pagnes wax et ses tissus traditionnels béninois.",
        location: {
          lat: 6.3719,
          lng: 2.4334,
          address: "Marché Dantokpa",
          city: "Cotonou",
          department: "Littoral",
          neighborhood: "Dantokpa",
        },
        categories: ["textile"],
        images: [], // Add image IDs after upload
        openingHours: [
          {
            day: 0,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
          {
            day: 1,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "07:00",
            closingTime: "18:00",
          },
        ],
        contact: "+229 97666666",
        isVerified: true,
      },
      {
        name: "Vannerie Traditionnelle de Grand-Popo",
        description:
          "Atelier de vannerie traditionnelle spécialisé dans la création de paniers, nattes et objets décoratifs en fibres naturelles locales.",
        location: {
          lat: 6.2833,
          lng: 1.8167,
          address: "Route de la Plage",
          city: "Grand-Popo",
          department: "Mono",
          neighborhood: "Centre",
        },
        categories: ["vannerie"],
        images: [], // Add image IDs after upload
        openingHours: [
          { day: 0, isClosed: true },
          {
            day: 1,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "17:00",
          },
          {
            day: 2,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "17:00",
          },
          {
            day: 3,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "17:00",
          },
          {
            day: 4,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "17:00",
          },
          {
            day: 5,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "17:00",
          },
          {
            day: 6,
            isClosed: false,
            openingTime: "09:00",
            closingTime: "16:00",
          },
        ],
        contact: "+229 97777777",
        isVerified: true,
      },
    ];

    for (const shop of shops) {
      const shopId = await ctx.db.insert("artisanShops", shop);
      // Insérer dans l'index géospatial
      await geospatial.insert(
        ctx,
        shopId,
        { latitude: shop.location.lat, longitude: shop.location.lng },
        { categories: shop.categories },
        shop.location.lat
      );
    }

    return "Artisan shops seeded successfully";
  },
});
