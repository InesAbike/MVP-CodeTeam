import React from "react";
import { Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import { FiInfo } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";

interface TouristSiteCardProps {
  id: string;
  title: string;
  category: string;
  location: string;
  rating: number;
  description: string;
  openingHours: string | { status: string; color: string };
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

  const displayHours = typeof openingHours === 'string'
    ? openingHours
    : openingHours.status;

  const hoursColor = typeof openingHours === 'object'
    ? openingHours.color
    : "text-gray-500";

  return (
    <div className="bg-[#FFFBEB]">
      <div className="relative">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover max-h-[500px]"
          width={1200}
          height={500}
        />
      </div>

      <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-3xl mx-auto -mt-20 relative z-10">
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
        <h2 className="text-xl lg:text-2xl font-bold mt-2 mb-4 text-[#78350F]">
          {title}
        </h2>
        <div className="grid grid-cols-2 text-sm text-gray-500 gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 ml-4" />
            <span className={hoursColor}>{displayHours}</span>
          </div>
        </div>
        <hr className="my-4 border-t-1 border-gray-200" />

        {/* Description */}
        <div className="mt-5">
          <h3 className="font-semibold mb-2 text-[#78350F]">À propos</h3>
          <p className="text-gray-600 text-sm mb-2">{description}</p>
        </div>

        <hr className="my-4 border-t-1 border-gray-200" />

        {/* Infos pratiques */}
        <div className="">
          <h3 className="font-semibold mb-2 text-[#78350F] text-lg">
            Infos pratiques
          </h3>
          <div className="mt-1 bg-[#FFFBEB] p-3 rounded-lg text-sm space-y-1 text-gray-600 flex gap-3">
            <FiInfo className="size-5 text-[#D97706]" />
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Tarif d'entrée :</span> {price}
              </p>
              <p>
                <span className="font-semibold">Accessibilité :</span>{" "}
                {accessibility}
              </p>
            </div>
          </div>
        </div>

        {/* Bouton */}
        <button className="w-full mt-5 py-2 bg-[#D97706] text-white text-center font-medium rounded-lg hover:bg-orange-600 transition flex justify-center items-center gap-2">
          <FaRegHeart className="size-6 text-white" />
          <span className="font-semibold text-lg">Ajouter à l'itinéraire</span>
        </button>
      </div>
    </div>
  );
};

export default TouristSiteCard;
