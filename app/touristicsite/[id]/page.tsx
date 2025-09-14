"use client";

import TouristSiteCard from "../../components/touristicSite/TouristSiteCard";
import ArtisanCard from "../../components/touristicSite/ArtisanCard";
import { ArtisanGridSkeleton } from "../../components/touristicSite/skeletons/ArtisanGridSkeleton";
import { TouristSiteCardSkeleton } from "../../components/touristicSite/skeletons/TouristSiteCardSkeleton";
import { useGetTouristicSiteById } from "@/services/touristicSites";
import { useGetNearbyArtisanShopsWithDetailsBySiteId } from "@/services/artisanShops";
import { Id } from "@/convex/_generated/dataModel";
import { useParams } from "next/navigation";
import { getOpeningStatus } from "@/lib/utils";
import { RiShoppingBag3Line } from "react-icons/ri";



export default function DetailPage() {
  const params = useParams();
  const id = params.id as string;

  const site = useGetTouristicSiteById(id as Id<"touristicSites">);
  const nearbyArtisansWithDetails = useGetNearbyArtisanShopsWithDetailsBySiteId(id as Id<"touristicSites">, 6);

  if (site === undefined) {
    return (
      <div className="space-y-6 bg-[#FFFBEB] min-h-screen p-6 ">
        <TouristSiteCardSkeleton />
      </div>
    );
  }

  if (!site) {
    return <p className="p-6 h-screen flex items-center justify-center">Site introuvable</p>;
  }

  const transformedSite = {
    id: site._id,
    title: site.name,
    category: site.category,
    location: `${site.location.city}, ${site.location.department}`,
    rating: 4.5,
    description: site.description,
    openingHours: getOpeningStatus(site.openingHours),
    price: site.entranceFee ? `${site.entranceFee} FCFA` : "Gratuit",
    accessibility: "",
    image: site.images[0] || "/images/hero-benin.png",
    artisans: [] 
  };

  return (
    <div className="space-y-6 bg-[#FFFBEB] min-h-screen">
      {/* Composant Site */}
      <TouristSiteCard {...transformedSite} />

       {/* Composant Artisans */}
       <div className="max-w-3xl mx-auto pb-5 ">
         <h3 className="text-base md:text-lg font-semibold mb-4 flex items-center gap-2 text-[#78350F] ps-2">
           <RiShoppingBag3Line className="w-6 h-6" />
           <span>Artisanat à proximité</span>
         </h3>
            {nearbyArtisansWithDetails === undefined ? (
             <ArtisanGridSkeleton count={6} />
           ) : nearbyArtisansWithDetails && nearbyArtisansWithDetails.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {nearbyArtisansWithDetails.slice(0, 6).map((item) => (
                <ArtisanCard
                  key={item.artisan._id}
                  name={item.artisan.name}
                  location={`${item.artisan.location.city}, ${item.artisan.location.department} (${item.distance.toFixed(1)} km)`}
                  categories={item.artisan.categories}
                  image={item.artisan.images[0] || "/images/artisanal-shop-img/weaver-shop.svg"}
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-600 text-center">Aucun artisan trouvé à proximité</p>
          )}
       </div>
    </div>
  );
}
