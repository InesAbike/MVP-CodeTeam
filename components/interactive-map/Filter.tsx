"use client";
import React from "react";
import { TouristicSite } from "@/types/touristic.types";
import { ArtisanShop } from "@/types/artisan.types";
import { FilterIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";

export interface FilterState {
  showSites: boolean;
  showShops: boolean;
  selectedTypes: string[];
  selectedRegion: string;
  isOpen: boolean; 
}

interface FiltersProps {
  sites: TouristicSite[];
  shops: ArtisanShop[];
  isLoading: boolean;
  filters: FilterState;
  setFilters: (filters: FilterState) => void;
}

const Filters: React.FC<FiltersProps> = ({ sites, shops, isLoading, filters, setFilters }) => {
  // const [filters, setFilters] = useState<FilterState>({
  //   showSites: true,
  //   showShops: true,
  //   selectedTypes: [],
  //   selectedRegion: "Toutes les régions",
  //   isOpen: false, 
  // });

  const siteTypes = [...new Set(sites.map((site) => site.category))];
  const shopTypes = [...new Set(shops.flatMap((shop) => shop.categories))];
  const allTypes = [...new Set([...siteTypes, ...shopTypes])];
  const allRegions = [
    ...new Set([
      "Toutes les régions",
      ...sites.map((site) => site.location.department),
      ...shops.map((shop) => shop.location.department),
    ]),
  ];

  const handleCategoryChange = (
    category: "sites" | "shops",
    checked: boolean
  ) => {
    setFilters({
      ...filters,
      [category === "sites" ? "showSites" : "showShops"]: checked,
    });
  };

  const handleTypeChange = (type: string, checked: boolean) => {
    setFilters({
      ...filters,
      selectedTypes: checked
        ? [...filters.selectedTypes, type]
        : filters.selectedTypes.filter((t) => t !== type),
    });
  };

  const handleRegionChange = (region: string) => {
    setFilters({
      ...filters,
      selectedRegion: region,
    });
  };

  const toggleFilters = () => {
    setFilters({ ...filters, isOpen: !filters.isOpen });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <button
        className="flex items-center justify-between w-full mb-4 focus:outline-none"
        onClick={toggleFilters}
        aria-expanded={filters.isOpen}
        aria-controls="filters-content"
      >
        <div className="flex items-center gap-3">
          <FilterIcon className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">Filtres</h3>
        </div>
        {filters.isOpen ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      <div
        id="filters-content"
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          filters.isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-8 grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-10">
          <div className="col-span-1 mt-2">
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-4">
              Catégories
            </h4>
            <div className="space-y-8 mt-5">
              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                    checked={filters.showSites}
                    onChange={(e) =>
                      handleCategoryChange("sites", e.target.checked)
                    }
                    disabled={isLoading}
                  />
                  <span className="text-gray-900 font-medium">
                    Sites touristiques
                  </span>
                </div>
                <span className="bg-blue-600 w-6 h-6 text-white text-xs font-semibold px-2.5 py-1 rounded-full p-3">
                  {sites.length}
                </span>
              </label>

              <label className="flex items-center justify-between cursor-pointer">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500 disabled:opacity-50"
                    checked={filters.showShops}
                    onChange={(e) =>
                      handleCategoryChange("shops", e.target.checked)
                    }
                    disabled={isLoading}
                  />
                  <span className="text-gray-900 font-medium whitespace-nowrap">
                    Boutiques artisanales
                  </span>
                </div>
                <span className="bg-orange-600 text-white w-6 h-6 text-xs font-semibold px-2.5 py-1 rounded-full p-3">
                  {shops.length}
                </span>
              </label>
            </div>
          </div>

          <div className="col-span-2">
            <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-4">
              Types
            </h4>
            <div className="space-y-2 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 pr-2">
              {allTypes.map((type) => (
                <label
                  key={type}
                  className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                    checked={filters.selectedTypes.includes(type)}
                    onChange={(e) => handleTypeChange(type, e.target.checked)}
                    disabled={isLoading}
                  />
                  <span className="text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <h4 className="text-sm font-medium text-gray-700 uppercase tracking-wide mb-4">
            Région
          </h4>
          <select
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50"
            value={filters.selectedRegion}
            onChange={(e) => handleRegionChange(e.target.value)}
            disabled={isLoading}
          >
            {allRegions.map((reg) => (
              <option key={reg} value={reg}>
                {reg}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
