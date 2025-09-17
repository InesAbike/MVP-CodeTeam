"use client";
import React from "react";

const ResultsSkeleton: React.FC = () => {
  const skeletonCards = Array(3).fill(null);

  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-1/4 mb-4"></div>

      <div className="space-y-4 grid grid-cols-1 min-[992px]:grid-cols-2 xl:grid-cols-1 gap-4">
        {skeletonCards.map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 border border-gray-300 rounded-lg overflow-hidden flex items-center gap-4 p-3"
          >
            <div className="w-28 h-28 bg-gray-300 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mt-2 flex justify-between">
                <div className="w-1/3 bg-gray-300 rounded"></div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end mt-5">
          <div className="h-8 bg-gray-300 rounded-lg w-1/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSkeleton;
