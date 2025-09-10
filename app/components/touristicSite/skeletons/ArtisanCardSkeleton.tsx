import React from "react";

/**
 * Skeleton élégant pour ArtisanCard
 */
export const ArtisanCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white shadow-md rounded-xl w-full flex gap-2 items-center pe-2 animate-pulse">
      {/* Image skeleton avec gradient */}
      <div className="h-32 w-36 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-l-lg"></div>

      <div className="flex flex-col gap-1 w-full">
        {/* Nom avec effet de brillance */}
        <div className="h-5 w-3/4 bg-gray-200 rounded relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>

        {/* Localisation */}
        <div className="h-4 w-1/2 bg-gray-200 rounded"></div>

        {/* Catégories avec différentes tailles */}
        <div className="flex gap-1 mt-2">
          <div className="h-5 w-12 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-5 w-14 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};