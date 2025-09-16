"use client";
import React from "react";
import Image from "next/image";
import { Heart, MessageCircle, Phone } from "lucide-react";
import { IoLocationSharp } from "react-icons/io5";
import ArtisanalShopCard from "../../components/landing-page/ArtisanalShopCard";
import { shopFeaturedProducts } from "@/mocks/shopDetails";
import { useGetArtisanShopById } from "@/services/artisanShops";
import { Id } from "@/convex/_generated/dataModel";
import { useGetTopArtisanShops } from "@/services/index";
import ArtisanalShopSkeleton from "@/app/components/landing-page/skeletons/ArtisanalShopSkeleton";
import Link from "next/link";
import { useParams } from "next/navigation";

const DetailsShop = () => {
  const params = useParams();
  const id = params.id as Id<"artisanShops">;
  const shop = useGetArtisanShopById(id as Id<"artisanShops">);
  const otherShop = useGetTopArtisanShops();

  if (!id) {
    return <div>ID manquant</div>;
  }
  const formatPrice = (price: number) => {
    return price.toLocaleString("fr-FR") + " FCFA";
  };
  function getDayName(dayIndex: number): string {
    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    return days[dayIndex] || "";
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {shop === undefined ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      ) : shop === null ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-gray-600">Boutique non trouvée</p>
        </div>
      ) : (
        <div>
          <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="w-full h-[600px] relative">
              <Image
                src={
                  shop.images[0] || "/images/artisanal-shop-img/weaver-shop.svg"
                }
                alt={shop.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 w-full">
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent">
                  <div className="py-8 md:px-12 px-6 max-w-6xl mx-auto text-white flex flex-col items-start justify-between">
                    <div className="flex items-center gap-4 mb-4">
                      {shop.categories.map((category, index) => (
                        <span
                          key={index}
                          className="bg-[#D4AF37] px-2 py-1 rounded-full flex items-center gap-2 text-base"
                        >
                          <span>{category}</span>
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between w-full gap-8 flex-wrap">
                      <div className="flex items-start flex-col gap-2">
                        <h1 className="text-3xl font-semibold text-white">
                          {shop.name}
                        </h1>
                        <div className="flex items-center mt-2 text-white">
                          <IoLocationSharp className="mr-1" />
                          <span>
                            {shop.location?.address}, {shop.location?.city}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {(() => {
                            const today = new Date().getDay();
                            const todaySchedule = shop.openingHours?.find(
                              (day) => day.day === today,
                            );
                            if (!todaySchedule) {
                              return (
                                <div className="flex justify-between">
                                  <span>Horaires non disponibles</span>
                                </div>
                              );
                            }
                            return (
                              <div className="flex flex-col gap-1">
                                <div className="flex items-center justify-between text-sm">
                                  {todaySchedule.isClosed ? (
                                    <span className="bg-red-500 text-white font-medium px-2 py-1 rounded-full">
                                      Fermé
                                    </span>
                                  ) : (
                                    <span className="bg-green-500 text-white font-medium px-2 py-1 rounded-full">
                                      Ouvert {todaySchedule.openingTime} -{" "}
                                      {todaySchedule.closingTime}
                                    </span>
                                  )}
                                </div>
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                      <div className="flex items-center flex-wrap gap-2">
                        <Link href="/interactive-map">
                          <button className="bg-[#D4AF37] px-4 py-2 rounded-lg">
                            Ajouter à l&apos;itinéraire
                          </button>
                        </Link>
                        <button className="px-4 py-2 rounded-lg  bg-white/50 backdrop-blur-sm">
                          Partager
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* About Section */}
                <section className="bg-white rounded-lg p-6">
                  <h1 className="text-2xl text-gray-900 mb-4">
                    À propos de l&apos;atelier
                  </h1>
                  <div className="text-gray-700 space-y-4">
                    {shop.description}
                  </div>
                </section>

                {/* Products Section */}
                <section className="bg-white rounded-lg p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl text-gray-900">Produits Phares</h2>
                    <a
                      href="#"
                      className="text-yellow-500 hover:text-yellow-600 text-sm"
                    >
                      Voir tout →
                    </a>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {shopFeaturedProducts.map((product) => (
                      <div key={product.id} className="flex flex-col">
                        <div className="rounded-xl mb-3 relative h-[200px] w-full">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={500}
                            height={500}
                            className="absolute inset-0 object-cover h-full w-full rounded-xl"
                          />
                          <Heart className="absolute top-3 right-3 w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold text-gray-900">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {product.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-lg text-yellow-500">
                              {formatPrice(product.price)}
                            </span>
                            <span className="text-xs text-gray-500">
                              {product.priceEuro}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-4">
                {/* Contact Info */}
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Informations Pratiques
                  </h3>

                  <div className="space-y-3">
                    <div className="space-y-2">
                      {shop.openingHours?.map((day, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-gray-700">
                            {getDayName(day.day)}:
                          </span>
                          {day.isClosed ? (
                            <span className="text-gray-500">Fermé</span>
                          ) : (
                            <span>
                              {day.openingTime} - {day.closingTime}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                    <MessageCircle size={24} />
                    <div className="flex flex-col gap-1">
                      <span>WhatsApp</span>
                      <span className="text-xs">{shop.contact}</span>
                    </div>
                  </button>

                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                    <Phone size={24} />
                    <div className="flex flex-col gap-1">
                      <span>Téléphone</span>
                      <span className="text-xs">{shop.contact}</span>
                    </div>
                  </button>
                </div>

                <div className="mt-4 flex w-full items-center gap-4 flex-col md:flex-row">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg">
                    Ajouter à mon itinéraire
                  </button>
                  <button className="w-full border text-yellow-500 py-3 px-4 rounded-lg">
                    Partager cette boutique
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Shops */}
          <section className="mt-12 bg-white rounded-lg p-6 max-w-6xl mx-auto">
            <h2 className="text-xl text-gray-900 text-center mb-8">
              Autres Boutiques
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {!otherShop
                ? // Show 4 skeleton cards while loading
                  Array.from({ length: 4 }).map((_, index) => (
                    <ArtisanalShopSkeleton key={`skeleton-${index}`} />
                  ))
                : otherShop.map((shop) => (
                    <div
                      key={shop._id}
                      className="embla__slide flex-[0_0_375px]"
                    >
                      <Link href={`/artisanat-shop/${shop._id}`}>
                        <ArtisanalShopCard
                          id={shop._id}
                          name={shop.name}
                          location={shop.location.address}
                          categories={shop.categories}
                          imageSrc={
                            shop.images[0] ||
                            "/images/artisanal-shop-img/weaver-shop.svg"
                          }
                        />
                      </Link>
                    </div>
                  ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default DetailsShop;
