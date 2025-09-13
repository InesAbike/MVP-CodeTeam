import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ItemCardProps {
  title: string;
  location: string;
  type: string;
  image: string;
  isSite?: boolean;
  id?: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  location,
  type,
  image,
  isSite = true,
  id,
}) => {
  const bgColor = isSite ? "bg-blue-50" : "bg-orange-50";
  const borderColor = isSite ? "border-blue-100" : "border-orange-100";
  const badgeColor = isSite
    ? "bg-blue-200 text-blue-800"
    : "bg-orange-200 text-orange-800";
  const linkColor = isSite ? "text-blue-600" : "text-orange-600";
  const detailUrl = isSite ? `/touristicsite/${id}` : `/artisanshop/${id}`;

  return (
    <div
      className={`${bgColor} ${borderColor} rounded-lg overflow-hidden flex items-center gap-4 cursor-pointer`}
      role="article"
      aria-label={`${title} - ${type} à ${location}`}
    >
      <div className="relative w-28 h-28 flex-shrink-0">
        <Image
          src={image}
          alt={`${title} image`}
          fill
          className="object-cover rounded"
          onError={(e) => {
            e.currentTarget.src = "/images/hero-benin.jpg";
          }}
        />
      </div>
      <div className="flex-1 min-w-0 p-2">
        <h4 className="text-sm font-medium text-gray-900 line-clamp-2">
          {title}
        </h4>
        <p className="text-xs text-gray-600 line-clamp-1">{location}</p>
        <div className="flex items-center justify-between mt-2">
          <span
            className={`inline-block ${badgeColor} text-xs px-2 py-1 rounded line-clamp-1`}
          >
            {type.length > 9 ? `${type.substring(0, 8)}...` : type}
          </span>
          {id && (
            <a
              href={detailUrl}
              className={`${linkColor} text-xs hover:underline flex items-center gap-1`}
              aria-label={`Voir les détails de ${title}`}
            >
              <SquareArrowOutUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
