import React from "react";
import { Clock, MapPin, Star } from "lucide-react";

interface TouristSiteCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  rating: number;
  description: string;
  openingHours: string;
  price: string;
  accessibility: string;
  image: string;
}

const colors: Record<string, string> = {
  historique: "bg-yellow-100 text-yellow-700",
  culturel: "bg-blue-100 text-blue-700",
  naturel: "bg-green-100 text-green-700",
  religieux: "bg-purple-100 text-purple-700",
};

const TouristSiteCard: React.FC<TouristSiteCardProps> = ({
  id,
  title,
  category,
  location,
  rating,
  description,
  openingHours,
  price,
  accessibility,
  image,
}) => {
  const colorClass =
    colors[category.toLowerCase()] || "bg-gray-100 text-gray-600";

  return (
    <div className="bg-[#FFFBEB] min-h-screen">
      <div className="relative">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="bg-white shadow-md rounded-xl p-4 w-full max-w-2xl mx-auto -mt-20 relative z-10">
        <div className="flex justify-between items-start">
          <span
            className={`px-2 py-1 text-xs font-medium rounded-md ${colorClass}`}
          >
            {category}
          </span>
          <div className="flex items-center gap-1 text-orange-500 font-semibold">
            <Star className="w-4 h-4 " />
            <span>{rating}</span>
          </div>
        </div>

        {/* Titre + Lieu + Horaire */}
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
          <Clock className="w-4 h-4 ml-4" />
          <span>{openingHours}</span>
        </div>

        {/* Description */}
        <div className="mt-3">
          <h3 className="font-semibold mb-1">À propos</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        {/* Infos pratiques */}
        <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-sm space-y-1">
          <p>
            <span className="font-semibold">Tarif d’entrée :</span> {price}
          </p>
          <p>
            <span className="font-semibold">Accessibilité :</span>{" "}
            {accessibility}
          </p>
        </div>

        {/* Bouton */}
        <button className="w-full mt-4 py-2 bg-[#D97706] text-white font-medium rounded-lg hover:bg-orange-600 transition">
          Ajouter à l’itinéraire
        </button>
      </div>
    </div>
  );
};

export default TouristSiteCard;
