"use client";
import React, { useCallback, useEffect, useState } from "react";
import TouristSiteCard from "./TouristSiteCard";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const TouristSiteSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: false,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );

  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const touristSites = [
    {
      id:"1",
      title: "Porte du Non Retour",
      description:
        "Un mémorial imposant commémorant la traite négrière transatlantique, situé sur la magnifique côte de Ouidah.",
      imageSrc: "/images/tourist-site-img/porte-non-retour.jpg",
      imageAlt: "Porte du Non Retour à Ouidah",
    },
    {
      id:"2",

      title: "Palais Royal d'Abomey",
      description:
        "Découvrez l'histoire fascinante du royaume du Dahomey à travers ses palais royaux classés au patrimoine mondial.",
      imageSrc: "/images/decouverte.jpeg",
      imageAlt: "Palais Royal d'Abomey",
    },
    {
      id:"3",

      title: "Village Lacustre de Ganvié",
      description:
        "Explorez la 'Venise de l'Afrique', un village construit sur pilotis au cœur du lac Nokoué, unique en son genre.",
      imageSrc: "/images/zone-indu.jpg",
      imageAlt: "Village Lacustre de Ganvié",
    },
    {
      id:"4",

      title: "Village Lacustre de Ganvié",
      description:
        "Explorez la 'Venise de l'Afrique', un village construit sur pilotis au cœur du lac Nokoué, unique en son genre.",
      imageSrc: "/images/zone-indu.jpg",
      imageAlt: "Village Lacustre de Ganvié",
    },
    {
      id:"5",

      title: "Village Lacustre de Ganvié",
      description:
        "Explorez la 'Venise de l'Afrique', un village construit sur pilotis au cœur du lac Nokoué, unique en son genre.",
      imageSrc: "/images/zone-indu.jpg",
      imageAlt: "Village Lacustre de Ganvié",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Sites touristiques populaires
            </h2>
          </div>
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Découvrez les sites touristiques les plus attrayants et les
              trésors culturels du Bénin.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6 w-full">
              {touristSites.map((site, index) => (
                <div key={index} className="embla__slide flex-[0_0_375px]">
                  <TouristSiteCard
                  id={site.id}
                    title={site.title}
                    description={site.description}
                    imageSrc={site.imageSrc}
                    imageAlt={site.imageAlt}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end mt-4">
            <div className="flex items-center gap-1">
              <button
                onClick={scrollPrev}
                disabled={!prevBtnEnabled}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  prevBtnEnabled
                    ? "bg-white hover:bg-gray-50 text-gray-600"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button
                onClick={scrollNext}
                disabled={!nextBtnEnabled}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                  nextBtnEnabled
                    ? "bg-white hover:bg-gray-50 text-gray-600"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TouristSiteSection;
