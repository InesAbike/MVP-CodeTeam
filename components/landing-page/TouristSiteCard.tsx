"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { CustomImage } from "../ui/custom-image";
import { ComponentProps } from "react";
import { TouristicSite } from "@/types/touristic.types";
import { cn } from "@/lib/utils";

interface RefinedTouristicSite
  extends Pick<TouristicSite, "name" | "description"> {
  id: string;
  imageSrc: string;
}

interface TouristSiteCardProps extends ComponentProps<"a"> {
  site: RefinedTouristicSite;
}

const TouristSiteCard = ({
  site,
  className,
  ...rest
}: TouristSiteCardProps) => {
  return (
    <Link
      href={`/touristicsite/${site.id}`}
      className={cn(
        "aspect-[4/5] rounded-xl relative overflow-hidden group cursor-pointer",
        className
      )}
      title={site.name}
      {...rest}
    >
      <CustomImage
        src={site.imageSrc}
        alt={site.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-125"
        width={500}
        height={500}
        placeholderFormat="vertical"
      />

      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>

      <div className="relative z-10 flex flex-col justify-end size-full p-6">
        <h1 className="text-white text-2xl font-bold mb-2 truncate">
          {site.name}
        </h1>
        <p className="text-white text-sm mb-4 line-clamp-2">
          {site.description}
        </p>
        <button className="text-white text-sm flex items-center gap-2 hover:gap-3 transition-all duration-200">
          Découvrez maintenant
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
    </Link>
  );
};

export default TouristSiteCard;
