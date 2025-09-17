"use client";
import { useCallback, useEffect, useState } from "react";
import ArtisanalShopCard from "./ArtisanalShopCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useGetTopArtisanShops } from "@/services/index";
import ArtisanalShopSkeleton from "@/components/landing-page/skeletons/ArtisanalShopSkeleton";

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

  const artisanalShops =
    shopsData?.map((shop) => ({
      id: shop._id,
      name: shop.name,
      location: shop.location.city,
      categories: shop.categories,
      imageSrc: shop.images[0] || "/images/artisanal-shop-img/weaver-shop.svg",
    })) || [];

  // Loading state
  const isLoading = !shopsData;

  return (
    <section className="py-8 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center md:text-start mb-12">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold text-gray-900 mb-2">
            Boutiques artisanales populaires
          </h2>
          <div className="hidden md:block w-16 h-1 bg-benin-green rounded"></div>
          <p className="text-gray-600 max-w-2xl leading-relaxed text-start">
            Entrez en contact avec des artisans locaux et découvrez l&apos;art
            authentique du Bénin.
          </p>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex gap-6">
              {isLoading
                ? // Show 4 skeleton cards while loading
                  Array.from({ length: 4 }).map((_, index) => (
                    <ArtisanalShopSkeleton key={`skeleton-${index}`} />
                  ))
                : artisanalShops.map((shop) => (
                    <div
                      key={shop.id}
                      className="embla__slide flex-[0_0_375px]"
                    >
                      <ArtisanalShopCard
                        id={shop.id}
                        name={shop.name}
                        location={shop.location}
                        categories={shop.categories}
                        imageSrc={shop.imageSrc}
                      />
                    </div>
                  ))}
            </div>
          </div>

          <div className="flex items-center justify-end mt-6">
            <div className="flex items-center gap-2">
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

export default ArtisanalShopSection;
