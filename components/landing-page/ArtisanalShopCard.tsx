import { MapPin, Share2, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import { CustomImage } from "../ui/custom-image";

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
    <div
      title={name}
      className="bg-white rounded-xl border relative border-gray-200 overflow-hidden"
    >
      <Link href={`/artisanat-shop/${id}`} className="absolute inset-0"></Link>

      <div className="relative w-full aspect-video">
        <CustomImage src={imageSrc} alt={`${name} - ${location}`} fill />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-bold truncate text-gray-800">{name}</h3>

        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {categories.map((category, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-benin-yellow/15 text-benin-red text-xs rounded-full font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          <div className="flex items-center space-x-1.5">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Share2 className="w-4 h-4 text-gray-600" />
            </button>

            <Link href={`/artisanat-shop/${id}`} className="relative z-10">
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
