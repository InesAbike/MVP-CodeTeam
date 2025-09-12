"use client";
import React, { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MapPinIcon, RefreshCwIcon, SquareArrowOutUpRight } from "lucide-react";
import { useGeolocation } from "../../hooks/useGeolocation";
import { TouristicSite } from "@/types/touristic.types";
import { ArtisanShop } from "@/types/artisan.types";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  iconUrl: markerIcon.src || markerIcon,
  shadowUrl: markerShadow.src || markerShadow,
});

const ResizeMap = () => {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
};

interface LeafletMapProps {
  sites: TouristicSite[];
  shops: ArtisanShop[];
  isLoading: boolean;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ sites, shops, isLoading }) => {
  const defaultPosition: [number, number] = [6.3714, 2.3544];

  const {
    position: userPosition,
    error: geolocationError,
    isLoading: isGettingLocation,
    getCurrentPosition,
  } = useGeolocation();

  const mapCenter = userPosition || defaultPosition;

  const centerOnUserLocation = () => {
    getCurrentPosition({ maximumAge: 0 });
  };

  const createCustomIcon = (color: string) => {
    return L.divIcon({
      className: "custom-div-icon",
      html: `<div style="background-color: ${color}; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });
  };

  const touristicIcon = createCustomIcon("#3B82F6");
  const artisanIcon = createCustomIcon("#F59E0B");
  const userIcon = createCustomIcon("#EF4444");

  return (
    <div className="relative w-full h-96 md:h-[600px] rounded-lg overflow-hidden border border-gray-200">
      <div className="absolute top-4 right-4 bg-white p-3 rounded-lg">
        <h4 className="text-sm font-semibold mb-2">Légende</h4>
        <div className="space-y-1">
          {userPosition && (
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full border-2 border-white shadow-sm"></div>
              <span className="text-xs">Votre position</span>
            </div>
          )}
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-sm"></div>
            <span className="text-xs">Sites touristiques ({sites.length})</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-sm"></div>
            <span className="text-xs">
              Boutiques artisanales ({shops.length})
            </span>
          </div>
        </div>
      </div>

      {isGettingLocation && (
        <div className="absolute top-4 left-4 bg-white p-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            <span className="text-xs text-gray-600">Localisation...</span>
          </div>
        </div>
      )}

      {geolocationError && (
        <div className="absolute top-4 left-4 bg-yellow-50 border border-yellow-200 p-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="text-xs text-yellow-700">
              ⚠️ {geolocationError}
            </span>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 right-4">
        <button
          onClick={centerOnUserLocation}
          disabled={isGettingLocation}
          className="bg-white hover:bg-gray-50 disabled:bg-gray-100 p-3 rounded-full shadow-lg border border-gray-200 transition-colors"
          title="Centrer sur ma position"
        >
          {isGettingLocation ? (
            <RefreshCwIcon className="w-5 h-5 text-blue-600 animate-spin" />
          ) : (
            <MapPinIcon className="w-5 h-5 text-blue-600" />
          )}
        </button>
      </div>

      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-[999]">
          <div className="flex flex-col items-center space-y-2">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <div className="text-gray-600">Chargement de la carte...</div>
          </div>
        </div>
      )}

      <MapContainer
        center={mapCenter}
        zoom={userPosition ? 12 : 8}
        scrollWheelZoom={true}
        className="w-full h-full z-0"
        key={`${mapCenter[0]}-${mapCenter[1]}`}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {sites.map((site: any) => (
          <Marker
            key={`site-${site._id}`}
            position={[site.location.lat, site.location.lng]}
            icon={touristicIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-blue-600 mb-1">
                  {site.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  {site.description
                    ? site.description
                    : "Aucune description disponible"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {site.category}
                  </span>
                  <a href={`/touristicsite/${site._id}`}>
                    <SquareArrowOutUpRight className="size-4 text-blue-600" />
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {shops.map((shop: any) => (
          <Marker
            key={`shop-${shop._id}`}
            position={[shop.location.lat, shop.location.lng]}
            icon={artisanIcon}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-orange-600 mb-1">
                  {shop.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-3">
                  {shop.description
                    ? shop.description
                    : "Aucune description disponible"}
                </p>
                <div className="flex items-center justify-between">
                  <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
                    {shop.categories
                      ? shop.categories.join(", ")
                      : "Non spécifié"}
                  </span>
                  <a href={`/artisanshop/${shop._id}`}>
                    <SquareArrowOutUpRight className="size-4 text-orange-600" />
                  </a>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {userPosition && (
          <Marker position={userPosition} icon={userIcon}>
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-red-600 mb-1">
                  Votre position
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  Voilà votre position actuelle !
                </p>
              </div>
            </Popup>
          </Marker>
        )}

        <ResizeMap />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
