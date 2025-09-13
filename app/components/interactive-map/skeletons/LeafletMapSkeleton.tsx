import React from "react";

const LeafletMapSkeleton: React.FC = () => {
  return (
    <div className="w-full h-full bg-gray-100 animate-pulse">
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-sm">
        <div className="h-4 bg-gray-200 rounded w-16 mb-2"></div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-20"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-24"></div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
            <div className="h-3 bg-gray-200 rounded w-28"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-4">
        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2 w-32 h-32">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-sm"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeafletMapSkeleton;
