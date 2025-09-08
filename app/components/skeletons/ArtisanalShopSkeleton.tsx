import React from "react";

const ArtisanalShopSkeleton = () => {
  return (
    <div className="embla__slide flex-[0_0_35%]">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>
          <div className="flex items-center mb-3">
            <div className="w-4 h-4 bg-gray-200 rounded mr-1 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
          </div>
          <div className="flex gap-2 mb-4">
            <div className="h-6 bg-gray-200 rounded-full w-16 animate-pulse"></div>
            <div className="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
          </div>
          <div className="flex justify-end space-x-1.5">
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanalShopSkeleton;