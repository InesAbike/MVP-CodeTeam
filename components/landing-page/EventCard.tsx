import React from "react";
import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  colorScheme: "red" | "green" | "purple";
}

const EventCard = ({
  title,
  description,
  location,
  date,
  colorScheme,
}: EventCardProps) => {
  const colorConfig = {
    red: {
      background: "bg-red-50",
      border: "border-red-100",
      dateColor: "bg-[#EF4444]",
      icon: "text-[#EF4444]",
      button: "bg-[#EF4444] hover:bg-red-500",
    },
    green: {
      background: "bg-green-50",
      border: "border-green-100",
      dateColor: "bg-[#22C55E]",
      icon: "text-[#22C55E]",
      button: "bg-[#22C55E] hover:bg-green-500",
    },
    purple: {
      background: "bg-purple-50",
      border: "border-purple-100",
      dateColor: "bg-[#A855F7]",
      icon: "text-purple-500",
      button: "bg-[#A855F7] hover:bg-purple-500",
    },
  };

  const config = colorConfig[colorScheme];

  return (
    <div
      className={`${config.background} border ${config.border} rounded-xl p-6`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`${config.dateColor} text-white px-3 py-1 rounded-lg text-sm font-semibold`}
        >
          {date}
        </div>
        <Calendar className={`w-5 h-5 ${config.icon}`} />
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-4">
        {description}
      </p>

             <div className="flex justify-between items-center gap-4">
         <div className="flex items-center text-gray-600">
           <MapPin className="w-4 h-4 mr-2" />
           <span className="text-sm">{location}</span>
         </div>

         <button
           className={`${config.button} text-white px-6 py-2 rounded-lg font-medium transition-colors`}
         >
           Voir plus
         </button>
       </div>
    </div>
  );
};

export default EventCard;
