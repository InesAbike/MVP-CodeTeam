"use client";
import dynamic from "next/dynamic";
import React from "react";

import { TouristicSite } from "@/types/touristic.types";
import { ArtisanShop } from "@/types/artisan.types";

interface MapWrapperProps {
  sites: TouristicSite[];
  shops: ArtisanShop[];
  isLoading: boolean;
}

const DynamicMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
});

const MapWrapper: React.FC<MapWrapperProps> = ({ sites, shops, isLoading }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Carte interactive</h3>
      <DynamicMap sites={sites} shops={shops} isLoading={isLoading} />
    </div>
  );
};

export default MapWrapper;
