import React from "react";

interface ItemCardProps {
  title: string;
  location: string;
  type: string;
  image: string;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  location,
  type,
  image,
}) => {
  return (
    <div className="bg-yellow-50 p-4 rounded-lg shadow-sm flex items-center space-x-4">
      <img src={image} alt={title} className="w-16 h-16 object-cover rounded" />
      <div>
        <h4 className="text-md font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{location}</p>
        <span className="inline-block bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded">
          {type}
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
