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
  const badgeColor = isSite
    ? "bg-blue-200 text-blue-800"
    : "bg-orange-200 text-orange-800";
  const linkColor = isSite ? "text-blue-600" : "text-orange-600";
  const detailUrl = isSite ? `/touristicsite/${id}` : `/artisanshop/${id}`;

  return (
    <div
      className={`${bgColor} p-4 rounded-lg shadow-sm flex items-center space-x-4 hover:shadow-md transition-shadow cursor-pointer`}
    >
      <img
        src={image}
        alt={title}
        className="w-16 h-16 object-cover rounded"
        onError={(e) => {
          e.currentTarget.src = "/images/hero-benin.jpg";
        }}
      />
      <div className="flex-1">
        <h4 className="text-md font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{location}</p>
        <div className="flex items-center justify-between mt-2">
          <span
            className={`inline-block ${badgeColor} text-xs px-2 py-1 rounded`}
          >
            {type}
          </span>
          <a
            href={detailUrl}
            className={`${linkColor} text-xs hover:underline`}
          >
            Voir détails →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
