"use client"

import React from "react";
import Image from "next/image"
interface ArtisanCardProps {
  name: string;
  location: string;
  categories: string[];
  image: string;
}

const ArtisanCard: React.FC<ArtisanCardProps> = ({
  name,
  location,
  categories,
  image,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl w-full flex gap-2 items-center pe-2">
      <Image
        src={image}
        alt={name}
        width={1200}
        height={500}
        className="h-32 w-full min-w-36 max-w-36 object-cover rounded-l-lg"
      />
      <div className="flex flex-col gap-1 w-full">
        <h4 className="font-bold text-gray-800 truncate text-ellipsis overflow-hidden max-w-48">{name}</h4>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex flex-wrap gap-1 mt-2">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtisanCard;
