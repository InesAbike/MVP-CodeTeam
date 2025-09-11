"use client";
import React from "react";
import ItemCard from "./ItemCard";

interface ResultsProps {
  sites: any[];
  shops: any[];
  isLoading: boolean;
}

const Results: React.FC<ResultsProps> = ({ sites, shops, isLoading }) => {

  const allItems = [
    ...sites.map((site: any) => ({
      id: site._id,
      title: site.name,
      location: site.location.city,
      type: site.category,
      image:
        site.images && site.images.length > 0
          ? site.images[0]
          : "/images/hero-benin.jpg",
      isSite: true,
    })),
    ...shops.map((shop: any) => ({
      id: shop._id,
      title: shop.name,
      location: shop.location.city,
      type: shop.categories.join(", "),
      image:
        shop.images && shop.images.length > 0
          ? shop.images[0]
          : "/images/hero-benin.jpg",
      isSite: false,
    })),
  ];
  if (isLoading) {
    return (
      <div className="bg-white p-4 rounded-lg shadow mt-4">
        <h3 className="text-lg font-semibold text-brown-600 mb-2">Résultats</h3>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Chargement des données...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">
        Résultats ({allItems.length})
      </h3>
      <div className="space-y-4">
        {allItems.length > 0 ? (
          allItems
            .slice(0, 5)
            .map((item) => (
              <ItemCard
                key={item.id}
                title={item.title}
                location={item.location}
                type={item.type}
                image={item.image}
                isSite={item.isSite}
                id={item.id}
              />
            ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <p>Aucun résultat trouvé.</p>
            <p className="text-sm">
              Vérifiez que les données sont bien chargées.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;
