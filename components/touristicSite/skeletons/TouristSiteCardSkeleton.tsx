import React from "react";

/**
 * Skeleton élégant pour TouristSiteCard
 */
export const TouristSiteCardSkeleton: React.FC = () => {
  return (
    <div className="bg-[#FFFBEB] animate-pulse">
      <div className="relative">
        {/* Image skeleton avec gradient subtil */}
        <div className="h-[500px] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200 rounded-t-xl"></div>
      </div>

      <div className="bg-white shadow-md rounded-xl p-5 w-full max-w-3xl mx-auto -mt-20 relative z-10">
        {/* Header avec catégorie et rating */}
        <div className="flex justify-between items-start mb-4">
          <div className="h-6 w-20 bg-gray-200 rounded-md"></div>
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="h-4 w-8 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Titre avec effet de brillance */}
        <div className="h-8 w-3/4 bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>

        {/* Lieu et horaires */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <div className="h-4 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gray-200 mb-4"></div>

        {/* Description */}
        <div className="mb-6">
          <div className="h-5 w-16 bg-gray-200 rounded mb-2"></div>
          <div className="space-y-2">
            <div className="h-4 w-full bg-gray-200 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-px bg-gray-200 mb-4"></div>

        {/* Infos pratiques */}
        <div className="mb-6">
          <div className="h-5 w-24 bg-gray-200 rounded mb-3"></div>
          <div className="bg-[#FFFBEB] p-3 rounded-lg">
            <div className="flex gap-3">
              <div className="w-5 h-5 bg-gray-200 rounded"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-4 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton avec effet de brillance */}
        <div className="h-12 w-full bg-gray-200 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};