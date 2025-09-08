"use client";
import React from "react";
import ItemCard from "./ItemCard";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

const Results: React.FC = () => {
  // Récupérer les données depuis Convex
  const touristicSites = useQuery(api.api.touristicSites.getTouristicSites) || [];
  const artisanShops = useQuery(api.api.artisanShops.getArtisanShops) || [];

  // Combiner et formater les données pour l'affichage
  const allItems = [
    ...touristicSites.map((site: any) => ({
      id: site._id,
      title: site.name,
      location: site.location.city,
      type: site.category,
      image: site.images[0] || "/images/placeholder.jpg",
      isSite: true
    })),
    ...artisanShops.map((shop: any) => ({
      id: shop._id,
      title: shop.name,
      location: shop.location.city,
      type: shop.categories.join(', '),
      image: shop.images[0] || "/images/placeholder.jpg",
      isSite: false
    }))
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">
        Résultats ({allItems.length})
      </h3>
      <div className="space-y-4">
        {allItems.slice(0, 5).map((item) => (
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
      </div>
    </div>
  );
};

export default Results;
