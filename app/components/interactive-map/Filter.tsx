"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface FilterState {
  showSites: boolean;
  showShops: boolean;
  selectedTypes: string[];
  selectedRegion: string;
}

const Filters: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    showSites: true,
    showShops: true,
    selectedTypes: [],
    selectedRegion: "Toutes les régions"
  });

  const touristicSites = useQuery(api.api.touristicSites.getTouristicSites);
  const artisanShops = useQuery(api.api.artisanShops.getArtisanShops);

  const isLoading = touristicSites === undefined || artisanShops === undefined;

  const sites = touristicSites || [];
  const shops = artisanShops || [];

  const siteTypes = [...new Set(sites.map((site: any) => site.category))];
  const shopTypes = [...new Set(shops.flatMap((shop: any) => shop.categories))];
  const allTypes = [...new Set([...siteTypes, ...shopTypes])];

  const allRegions = [...new Set([
    "Toutes les régions",
    ...sites.map((site: any) => site.location.department),
    ...shops.map((shop: any) => shop.location.department)
  ])];

  const handleCategoryChange = (category: 'sites' | 'shops', checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [category === 'sites' ? 'showSites' : 'showShops']: checked
    }));
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      selectedTypes: checked 
        ? [...prev.selectedTypes, type]
        : prev.selectedTypes.filter(t => t !== type)
    }));
  };

  const handleRegionChange = (region: string) => {
    setFilters(prev => ({
      ...prev,
      selectedRegion: region
    }));
  };

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">Filtres</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <h4 className="text-md font-medium">Catégories</h4>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="form-checkbox text-blue-600" 
              checked={filters.showSites}
              onChange={(e) => handleCategoryChange('sites', e.target.checked)}
            />
            <span>Sites touristiques ({sites.length})</span>
          </label>
          <label className="flex items-center space-x-2">
            <input 
              type="checkbox" 
              className="form-checkbox text-orange-600" 
              checked={filters.showShops}
              onChange={(e) => handleCategoryChange('shops', e.target.checked)}
            />
            <span>Boutiques d'artisanat ({shops.length})</span>
          </label>
        </div>
        <div className="space-y-4">
          <h4 className="text-md font-medium">Types</h4>
          <div className="grid grid-cols-2 gap-1 max-h-32 overflow-y-auto">
            {allTypes.map((type: string, index: number) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                  checked={filters.selectedTypes.includes(type)}
                  onChange={(e) => handleTypeChange(type, e.target.checked)}
                />
                <span className="text-sm">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-md font-medium">Région</h4>
          <select 
            className="w-full p-2 border rounded"
            value={filters.selectedRegion}
            onChange={(e) => handleRegionChange(e.target.value)}
          >
            {allRegions.map((reg) => (
              <option key={reg} value={reg}>{reg}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
