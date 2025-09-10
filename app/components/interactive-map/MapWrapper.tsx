"use client";
import dynamic from 'next/dynamic';
import React from 'react';

interface MapWrapperProps {
  sites: any[];
  shops: any[];
  isLoading: boolean;
}

const DynamicMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 md:h-[500px] rounded-lg overflow-hidden border border-gray-200 shadow-sm bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <div className="text-gray-500">Chargement de la carte...</div>
      </div>
    </div>
  )
});

const MapWrapper: React.FC<MapWrapperProps> = ({ sites, shops, isLoading }) => {
  return <DynamicMap sites={sites} shops={shops} isLoading={isLoading} />;
};

export default MapWrapper;