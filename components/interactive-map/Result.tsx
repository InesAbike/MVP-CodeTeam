"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { TouristicSite } from "@/types/touristic.types";
import { ArtisanShop } from "@/types/artisan.types";
import ResultsSkeleton from "./skeletons/ResultSkeleton";
import { FilterState } from "./Filter";

interface ResultsProps {
  sites: TouristicSite[];
  shops: ArtisanShop[];
  isLoading: boolean;
  filters: FilterState;
}

const Results: React.FC<ResultsProps> = ({
  sites,
  shops,
  isLoading,
  filters,
}) => {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 4;

  useEffect(() => {
    setShowAll(false);
  }, [sites, shops, filters]);

  const allItems = [
    ...sites.map((site) => ({
      id: site._id,
      title: site.name,
      location: site.location.city,
      type: site.category,
      image: site.images?.[0] || "/images/hero-benin.jpg",
      isSite: true,
    })),
    ...shops.map((shop) => ({
      id: shop._id,
      title: shop.name,
      location: shop.location.city,
      type: shop.categories.join(", "),
      image: shop.images?.[0] || "/images/hero-benin.jpg",
      isSite: false,
    })),
  ].sort((a, b) => a.title.localeCompare(b.title));

  const filteredItems = allItems.filter((item) => {
    if (item.isSite && !filters.showSites) return false;
    if (!item.isSite && !filters.showShops) return false;

    if (filters.selectedTypes.length > 0) {
      const itemTypes = Array.isArray(item.type) ? item.type : [item.type];
      if (!itemTypes.some((type) => filters.selectedTypes.includes(type))) {
        return false;
      }
    }
    return true;
  });

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, itemsPerPage);
  const hasMoreItems = allItems.length > itemsPerPage;
  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
        <h3 className="text-lg font-semibold text-brown-600 mb-2">Résultats</h3>
        <ResultsSkeleton />
      </div>
    );
  }

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">
        Résultats ({filteredItems.length})
      </h3>

      <div className="space-y-2 grid grid-cols-1 min-[992px]:grid-cols-2 xl:grid-cols-1 gap-4">
        {filteredItems.length > 0 ? (
          <>
            {displayedItems.map((item) => (
              <ItemCard
                key={item.id}
                title={item.title}
                location={item.location}
                type={item.type}
                image={item.image}
                isSite={item.isSite}
                id={item.id}
              />
            ))}

            {hasMoreItems && (
              <div className="flex justify-end mt-5">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg"
                >
                  {showAll ? (
                    <>
                      <span>Voir moins</span>
                    </>
                  ) : (
                    <>
                      <span>
                        Voir plus ({filteredItems.length - itemsPerPage} autres)
                      </span>
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>Aucun résultat trouvé.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
