import React from "react";
import EventCard from "./EventCard";

const CulturalEventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Voodoo Festival",
      description:
        "Annual celebration of traditional Voodoo culture with ceremonies, dances, and spiritual rituals in Ouidah.",
      location: "Ouidah",
      date: "Jan 10",
      colorScheme: "red" as const,
    },
    {
      id: 2,
      title: "Independence Day",
      description:
        "National celebration featuring parades, cultural performances, and artisan exhibitions across the country.",
      location: "Nationwide",
      date: "Aug 1",
      colorScheme: "green" as const,
    },
    {
      id: 3,
      title: "Arts & Crafts Fair",
      description:
        "Annual gathering of master artisans showcasing traditional and contemporary Beninese crafts.",
      location: "Cotonou",
      date: "Dec 15",
      colorScheme: "purple" as const,
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Cultural Events & Festivals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience the vibrant cultural life of Bénin through traditional
            festivals and contemporary events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div key={event.id} className="flex justify-center">
              <EventCard
                title={event.title}
                description={event.description}
                location={event.location}
                date={event.date}
                colorScheme={event.colorScheme}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturalEventsSection;
