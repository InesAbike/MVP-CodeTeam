import { useState, useEffect } from "react";

interface GeolocationState {
  position: [number, number] | null;
  error: string | null;
  isLoading: boolean;
}

interface GeolocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

export const useGeolocation = (options: GeolocationOptions = {}) => {
  const [state, setState] = useState<GeolocationState>({
    position: null,
    error: null,
    isLoading: false,
  });

  const position = (pos: GeolocationPosition) => {
    const coords: [number, number] = [
      pos.coords.latitude,
      pos.coords.longitude,
    ];
    setState({
      position: coords,
      error: null,
      isLoading: false,
    });
  };

  const error = (err: GeolocationPositionError) => {
    let errorMessage = "Erreur de géolocalisation";
    switch (err.code) {
      case err.PERMISSION_DENIED:
        errorMessage = "Permission de géolocalisation refusée";
        break;
      case err.POSITION_UNAVAILABLE:
        errorMessage = "Position indisponible";
        break;
      case err.TIMEOUT:
        errorMessage = "Timeout de géolocalisation";
        break;
    }

    setState({
      position: null,
      error: errorMessage,
      isLoading: false,
    });
  };

  const defaultOptions: GeolocationOptions = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 300000, // 5 minutes
    ...options,
  };

  const getCurrentPosition = (customOptions?: GeolocationOptions) => {
    
    if (!navigator.geolocation) {
      setState((prev) => ({
        ...prev,
        error: "La géolocalisation n'est pas supportée par ce navigateur",
        isLoading: false,
      }));
      return;
    }

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    const options = { ...defaultOptions, ...customOptions };

    navigator.geolocation.getCurrentPosition(position, error, options);
  };

  // Auto-fetch on mount
  useEffect(() => {
    getCurrentPosition();
  }, []);

  return {
    ...state,
    getCurrentPosition,
  };
};
