import TouristSiteCard from "@/components/TouristSiteCard";
import ArtisanCard from "@/components/ArtisanCard";

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default function DetailPage({ params }: DetailPageProps) {
  const { id } = params;

  const sites = [
    {
      id: "1",
      title: "Palais Royal d’Abomey",
      category: "historique",
      location: "Abomey, Bénin",
      rating: 4.8,
      description:
        "Ancienne résidence des rois d’Abomey, classée au patrimoine mondial de l’UNESCO.",
      openingHours: "8h - 18h",
      price: "1000 FCFA",
      accessibility: "Accessible en voiture, guide disponible",
      image: "/images/palais-abomey.jpg",
      artisans: [
        {
          id: 1,
          name: "Adjovi K.",
          location: "Abomey",
          categories: ["Tissage", "Broderie"],
          image: "/images/artisan1.jpg",
        },
        {
          id: 2,
          name: "Houngan A.",
          location: "Abomey",
          categories: ["Sculpture", "Bronze"],
          image: "/images/artisan2.jpg",
        },
      ],
    },
    {
      id: "2",
      title: "Ganvié – La Venise de l’Afrique",
      category: "naturel",
      location: "Lac Nokoué, Bénin",
      rating: 4.6,
      description:
        "Village lacustre unique, construit sur pilotis, accessible uniquement en pirogue.",
      openingHours: "7h - 17h",
      price: "1500 FCFA",
      accessibility: "Accès uniquement en bateau",
      image: "/images/ganvie.jpg",
      artisans: [
        {
          id: 3,
          name: "Dossou F.",
          location: "Ganvié",
          categories: ["Poterie", "Peinture"],
          image: "/images/artisan3.jpg",
        },
      ],
    },
  ];

  const site = sites.find((s) => s.id === id);

  if (!site) {
    return <p className="p-6">Site introuvable</p>;
  }

  return (
    <div className="space-y-6 bg-[#FFFBEB] min-h-screen">
      {/* Composant Site */}
      <TouristSiteCard {...site} />

      {/* Composant Artisans */}
      <div className="max-w-3xl mx-auto mb-5">
        <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2 text-[#78350F]">
          Artisanat à proximité
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {site.artisans.map((artisan) => (
            <ArtisanCard key={artisan.id} {...artisan} />
          ))}
        </div>
      </div>
    </div>
  );
}
