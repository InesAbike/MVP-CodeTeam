"use client";
import React, { useCallback, useEffect, useState } from "react";
import ArtisanalShopCard from "./ArtisanalShopCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useGetTopArtisanShops } from "@/services/index";
import ArtisanalShopSkeleton  from "@/app/components/skeletons/ArtisanalShopSkeleton";

const ArtisanalShopSection = () => {
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

  const shopsData = useGetTopArtisanShops();

  const artisanalShops = shopsData?.map((shop) => ({
    id: shop._id,
    name: shop.name,
    location: shop.location.city,
    categories: shop.categories,
    imageSrc: shop.images[0] || "/images/artisanal-shop-img/weaver-shop.svg",
  })) || [];





  // Loading state
  const isLoading = !shopsData;

  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Boutiques artisanales populaires
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Entrez en contact avec des artisans locaux et découvrez l'art
            authentique du Bénin.
          </p>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {isLoading ? (
                // Show 4 skeleton cards while loading
                Array.from({ length: 4 }).map((_, index) => (
                  <ArtisanalShopSkeleton key={`skeleton-${index}`} />
                ))
              ) : (
                artisanalShops.map((shop) => (
                  <div key={shop.id} className="embla__slide flex-[0_0_375px]">
                    <ArtisanalShopCard
                      name={shop.name}
                      location={shop.location}
                      categories={shop.categories}
                      imageSrc={shop.imageSrc}
                    />
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="flex items-center justify-end mt-6">
            <div className="flex items-center gap-2">
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

export default ArtisanalShopSection;
