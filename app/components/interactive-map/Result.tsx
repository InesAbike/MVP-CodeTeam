"use client";
import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { TouristicSite } from "@/types/touristic.types";
import { ArtisanShop } from "@/types/artisan.types";

interface ResultsProps {
  sites: TouristicSite[];
  shops: ArtisanShop[];
  isLoading: boolean;
}

const Results: React.FC<ResultsProps> = ({ sites, shops, isLoading }) => {
  const [showAll, setShowAll] = useState(false);
  const itemsPerPage = 3;

  useEffect(() => {
    setShowAll(false);
  }, [sites, shops]);

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

  const displayedItems = showAll ? allItems : allItems.slice(0, itemsPerPage);
  const hasMoreItems = allItems.length > itemsPerPage;
  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg border border-gray-200 mt-4">
        <h3 className="text-lg font-semibold text-brown-600 mb-2">Résultats</h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Chargement des données...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">
        Résultats ({allItems.length})
      </h3>

      <div className="space-y-4 grid grid-cols-1 min-[992px]:grid-cols-2 xl:grid-cols-1 gap-4">
        {allItems.length > 0 ? (
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
              <div className="flex justify-center pt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg"
                >
                  {showAll ? (
                    <>
                      <ChevronUpIcon className="w-4 h-4" />
                      <span>Voir moins</span>
                    </>
                  ) : (
                    <>
                      <ChevronDownIcon className="w-4 h-4" />
                      <span>
                        Voir plus ({allItems.length - itemsPerPage} autres)
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
