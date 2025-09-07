import React from "react";
import ItemCard from "./ItemCard";

const Results: React.FC = () => {
  const items = [
    {
      title: "Porte de Non-Retour",
      location: "Ouidah",
      type: "historique",
      image: "/images/porte-non-retour.jpg",
    },
    {
      title: "Parc National de la Pendjari",
      location: "Tanguiéta",
      type: "naturel",
      image: "/images/pendjari.jpg",
    },
    {
      title: "Temple des Pythons",
      location: "Ouidah",
      type: "spirituel",
      image: "/images/temple-pythons.jpg",
    },
    {
      title: "Palais Royal d’Abomey",
      location: "Abomey",
      type: "culturel",
      image: "/images/palais-abomey.jpg",
    },
    {
      title: "Boutique d’artisanat 1",
      location: "Ouidah",
      type: "textile",
      image: "/images/boutique1.jpg",
    },
    {
      title: "Boutique d’artisanat 2",
      location: "Abomey",
      type: "poterie",
      image: "/images/boutique2.jpg",
    },
    {
      title: "Boutique d’artisanat 3",
      location: "Tanguiéta",
      type: "textile",
      image: "/images/boutique3.jpg",
    },
    {
      title: "Boutique d’artisanat 4",
      location: "Ouidah",
      type: "poterie",
      image: "/images/boutique4.jpg",
    },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mt-4">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">
        Résultats ({items.length})
      </h3>
      <div className="space-y-4">
        {items.slice(0, 5).map((item) => (
          <ItemCard key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Results;
