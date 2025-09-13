import React from "react";
import { MapPin, Share2, SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArtisanalShopCardProps {
  id: string;
  name: string;
  location: string;
  categories: string[];
  imageSrc: string;
}

const ArtisanalShopCard = ({
  id,
  name,
  location,
  categories,
  imageSrc,
}: ArtisanalShopCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <Image
        src={imageSrc}
        alt={`${name} - ${location}`}
        width={500}
        height={500}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-1.5">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>
            <Link href={`/artisanat-shop/${id}`}>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <SquareArrowOutUpRight className="w-4 h-4 text-gray-600" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanalShopCard;
