import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { TouristicSite } from "@/types/touristic.types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Fonction utilitaire pour déterminer le statut d'ouverture avec couleur
 * @param openingHours - Les horaires d'ouverture du site
 * @returns Objet avec statut et couleur
 */
export function getOpeningStatus(openingHours: TouristicSite['openingHours']): { status: string; color: string } {
  if (!openingHours || openingHours.length === 0) {
    return { status: "Horaires inconnus", color: "text-gray-500" };
  }

  const today = new Date().getDay(); // 0 = Dimanche, 1 = Lundi, etc.
  const todaySchedule = openingHours.find(day => day.day === today);

  if (!todaySchedule || todaySchedule.isClosed) {
    return { status: "Fermé aujourd'hui", color: "text-red-600" };
  }

  if (todaySchedule.openingTime && todaySchedule.closingTime) {
    return {
      status: `Ouvert ${todaySchedule.openingTime} - ${todaySchedule.closingTime}`,
      color: "text-green-600"
    };
  }

  return { status: "Ouvert", color: "text-green-600" };
}