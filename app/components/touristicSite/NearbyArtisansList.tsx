"use client";

import React from "react";
import ArtisanCard from "./ArtisanCard";
import type { ArtisanShop } from "@/types/artisan.types";

interface NearbyArtisansListProps {
  artisans: Array<{ artisan: ArtisanShop; distance: number }>;
  maxItems?: number;
}

const NearbyArtisansList: React.FC<NearbyArtisansListProps> = ({
  artisans,
  maxItems = 6
}) => {
  if (!artisans || artisans.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">Aucun artisan trouvé à proximité</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {artisans.slice(0, maxItems).map((item) => (
        <ArtisanCard
          key={item.artisan._id}
          id={item.artisan._id}
          name={item.artisan.name}
          location={`${item.artisan.location.city}, ${item.artisan.location.department} (${item.distance.toFixed(1)} km)`}
          categories={item.artisan.categories}
          image={item.artisan.images[0] || "/images/artisanal-shop-img/weaver-shop.svg"}
        />
      ))}
    </div>
  );
};

export default NearbyArtisansList;