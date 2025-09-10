import React from "react";

const TouristSiteSkeleton = () => {
  return (
    <div className="embla__slide flex-[0_0_375px]">
      <div className="h-[450px] rounded-xl relative overflow-hidden bg-gray-200 animate-pulse">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>
        <div className="relative z-10 flex flex-col justify-end h-full w-full p-6">
          <div className="h-8 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-1"></div>
          <div className="h-4 bg-gray-300 rounded mb-4 w-3/4"></div>
          <div className="h-6 bg-gray-300 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
};

export default TouristSiteSkeleton;