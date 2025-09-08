"use client";
import React, { useCallback, useEffect, useState } from "react";
import TouristSiteCard from "./TouristSiteCard";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGetTouristicSites } from "@/services/touristicSites";
import TouristSiteSkeleton from "@/app/components/skeletons/TouristSiteSkeleton";

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

  const sitesData = useGetTouristicSites();

  const touristSites = sitesData?.map((site) => ({
    title: site.name,
    description: site.description,
    imageSrc: site.images[0] || "/images/tourist-site-img/porte-non-retour.jpg",
    imageAlt: `${site.name} - ${site.location.city}`,
  })) || [];

  // Loading state
  const isLoading = !sitesData;

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
              {isLoading ? (
                // Show 4 skeleton cards while loading
                Array.from({ length: 4 }).map((_, index) => (
                  <TouristSiteSkeleton key={`skeleton-${index}`} />
                ))
              ) : (
                touristSites.map((site, index) => (
                  <div key={index} className="embla__slide flex-[0_0_375px]">
                    <TouristSiteCard
                      title={site.title}
                      description={site.description}
                      imageSrc={site.imageSrc}
                      imageAlt={site.imageAlt}
                    />
                  </div>
                ))
              )}
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
