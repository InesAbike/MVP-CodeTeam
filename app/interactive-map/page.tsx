"use client";
import type { NextPage } from "next";
import { useGetTouristicSites } from "@/services/touristicSites";
import { useGetArtisanShops } from "@/services/artisanShops";
import Filters from "../components/interactive-map/Filter";
import Results from "../components/interactive-map/Result";
import MapWrapper from "../components/interactive-map/MapWrapper";

const InteractiveMap: NextPage = () => {
  const touristicSites = useGetTouristicSites();
  const artisanShops = useGetArtisanShops();

  const isLoading = touristicSites === undefined || artisanShops === undefined;
  const sites = touristicSites || [];
  const shops = artisanShops || [];

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6">
        <Filters 
          sites={sites}
          shops={shops}
          isLoading={isLoading}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Carte interactive</h3>
              <MapWrapper 
                sites={sites}
                shops={shops}
                isLoading={isLoading}
              />
            </div>
          </div>
          <div className="lg:col-span-1">
            <Results 
              sites={sites}
              shops={shops}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;