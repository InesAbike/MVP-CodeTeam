"use client";
import { useCallback, useEffect, useState } from "react";
import TouristSiteCard from "./TouristSiteCard";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useGetTopTouristicSites } from "@/services/index";
import TouristSiteSkeleton from "@/components/landing-page/skeletons/TouristSiteSkeleton";

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

  const sitesData = useGetTopTouristicSites();

  const touristSites =
    sitesData?.map((site) => ({
      id: site._id,
      name: site.name,
      description: site.description,
      imageSrc: site.images[0],
      imageAlt: `${site.name} - ${site.location.city}`,
    })) || [];

  // Loading state
  const isLoading = !sitesData;

  return (
    <section className="py-12 px-3 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 md-2 md:mb-3">
              Sites touristiques populaires
            </h2>
            <div className="hidden md:block w-16 h-1 bg-benin-green rounded"></div>
          </div>
          <div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Découvrez les sites touristiques les plus attrayants et les
              trésors culturels du Bénin.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6 w-full">
              {isLoading
                ? // Show 4 skeleton cards while loading
                  Array.from({ length: 4 }).map((_, index) => (
                    <TouristSiteSkeleton key={`skeleton-${index}`} />
                  ))
                : touristSites.map((site) => (
                    <TouristSiteCard
                      site={site}
                      key={site.id}
                      className="embla__slide flex-[0_0_375px]"
                    />
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
                    ? "bg-white hover:bg-gray-50 text-benin-green ring-1 ring-transparent hover:ring-benin-yellow/40"
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
                    ? "bg-white hover:bg-gray-50 text-benin-green ring-1 ring-transparent hover:ring-benin-yellow/40"
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
