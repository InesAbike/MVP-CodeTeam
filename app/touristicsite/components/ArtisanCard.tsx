"use client"
import Image from "next/image";
import React from "react";

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
    <div className="bg-white shadow-md rounded-xl flex items-center ">
      <Image
        src={image}
        alt={name}
        className="h-32 w-36 object-cover rounded-l-lg"
        width={200}
        height={200}
      />
      <div className="flex flex-col justify-center p-4">
        <h4 className="font-bold text-gray-800">{name}</h4>
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
