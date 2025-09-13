"use client";
import dynamic from "next/dynamic";
import React from "react";

interface MapWrapperProps {
  sites: any[];
  shops: any[];
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
  <DynamicMap sites={sites} shops={shops} isLoading={isLoading} />;
};

export default MapWrapper;
