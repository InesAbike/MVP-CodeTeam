import React from "react";
import { ArtisanCardSkeleton } from "./ArtisanCardSkeleton";

/**
 * Skeleton pour une grille d'artisans
 */
export const ArtisanGridSkeleton: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Array.from({ length: count }).map((_, index) => (
        <ArtisanCardSkeleton key={index} />
      ))}
    </div>
  );
};