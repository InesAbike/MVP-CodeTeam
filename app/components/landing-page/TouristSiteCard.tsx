import React from "react";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

interface TouristSiteCardProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const TouristSiteCard = ({ id, title, description, imageSrc, imageAlt }: TouristSiteCardProps) => {
  return (
    <div className="h-[450px] rounded-xl relative overflow-hidden group">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
      />

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>
      
      <div className="relative z-10 flex flex-col justify-end h-full w-full p-6">
        <h1 className="text-white text-2xl font-bold mb-2">{title}</h1>
        <p className="text-white text-sm mb-4 line-clamp-2">
          {description}
        </p>
        <Link href={`/${id}`}>
          <button className="text-white text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200">
            Découvrez maintenant
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TouristSiteCard;
