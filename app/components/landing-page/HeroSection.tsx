"use client";
import React, { useState } from "react";
import { Search, Play, MapPin, DollarSign } from "lucide-react";
import Image from "next/image";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { FaMap } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  const [searchData, setSearchData] = useState({
    tourName: "",
    price: "",
    location: "",
    date: "",
  });

  const handleCityButtonClick = (city: string) => {
    setSearchData((prev) => ({
      ...prev,
      location: prev.location === city ? "" : city,
    }));
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchData.tourName) {
      params.set("q", searchData.tourName);
    }
    if (searchData.location) {
      params.set("location", searchData.location);
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <div className="relative w-full bg-black/40 overflow-hidden min-h-screen flex flex-col justify-between">
      <Image
        src="/images/hero-benin.webp"
        alt="Bénin - La perle de l’Afrique de l’Ouest"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Navigation */}
      <nav className="relative flex items-center justify-between px-6 lg:px-12 py-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <div className="text-white text-lg">
              <FaMap />
            </div>
          </div>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Accueil
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Destinations
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Carte Interactive
          </a>
          <a
            href="#"
            className="text-white hover:text-blue-200 transition-colors"
          >
            Artisanat
          </a>
        </div>

        {/* Boutons Desktop + Menu Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Bouton Contact Desktop */}
          <button className="hidden md:flex border border-white backdrop-blur-sm text-white px-4 py-2 rounded-xl items-center space-x-2 hover:bg-opacity-30 transition-all">
            <span>Nous contacter</span>
            <BsArrowRightCircleFill size={16} />
          </button>

          {/* Bouton Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-blue-200 transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeMenu}
            ></div>

            {/* Menu Mobile */}
            <div className="fixed top-0 right-0 h-full w-full sm:w-1/2 bg-green-900 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out">
              {/* Header du menu */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FaMap className="text-white text-sm" />
                  </div>
                </div>
                <button
                  onClick={closeMenu}
                  className="text-white hover:text-blue-200 transition-colors p-1"
                >
                  <HiX size={24} />
                </button>
              </div>

              {/* Items du menu */}
              <div className="flex flex-col p-4">
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-lg py-3 border-b border-white/10"
                  onClick={closeMenu}
                >
                  Accueil
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-lg py-3 border-b border-white/10"
                  onClick={closeMenu}
                >
                  Destinations
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-lg py-3 border-b border-white/10"
                  onClick={closeMenu}
                >
                  Carte Interactive
                </a>
                <a
                  href="#"
                  className="text-white hover:text-blue-200 transition-colors text-lg py-3 border-b border-white/10"
                  onClick={closeMenu}
                >
                  Artisanat
                </a>

                {/* Bouton Contact Mobile dans le menu */}
                <button
                  className="mt-6 w-full border border-white backdrop-blur-sm text-white px-4 py-3 rounded-xl flex items-center justify-center space-x-2 hover:bg-white/10 transition-all"
                  onClick={closeMenu}
                >
                  <span>Nous contacter</span>
                  <BsArrowRightCircleFill size={16} />
                </button>
              </div>
            </div>
          </>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 px-3 sm:px-6 lg:px-12 md:mt-16 lg:mt-20 py-20">
        {/* Feature Tags */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm flex items-center">
            <MapPin size={14} className="mr-2" />
            meilleurs circuits
          </span>
          <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm flex items-center">
            <Search size={14} className="mr-2" />
            découvertes
          </span>
          <span className="bg-white/20 text-white px-4 py-2 rounded-lg text-sm backdrop-blur-sm flex items-center">
            <DollarSign size={14} className="mr-2" />
            patrimoine
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 col-span-2">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-white leading-tight">
              Découvrez Le Cœur Du Bénin
            </h1>

            <p className="text-white text-lg lg:text-xl opacity-90 leading-relaxed max-w-lg">
              Itinéraires parfaits, excursions uniques et expériences
              inoubliables - créez votre voyage de rêve avec nous !
            </p>

            {/* Search Form */}
            <div className="backdrop-blur-sm border border-white/50 rounded-2xl p-6 space-y-4">
              <h3 className="text-white text-lg font-semibold">
                Trouvez le meilleur endroit
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-white text-sm opacity-80">
                    À la recherche de
                  </label>
                  <input
                    type="text"
                    placeholder="Nom du site"
                    value={searchData.tourName}
                    onChange={(e) =>
                      setSearchData((prev) => ({
                        ...prev,
                        tourName: e.target.value,
                      }))
                    }
                    className="w-full backdrop-blur-md bg-white/20 text-white/40 placeholder-white placeholder-opacity-60 rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm opacity-80">Prix</label>
                  <input
                    type="text"
                    placeholder="Budget"
                    value={searchData.price}
                    onChange={(e) =>
                      setSearchData((prev) => ({
                        ...prev,
                        price: e.target.value,
                      }))
                    }
                    className="w-full backdrop-blur-sm bg-white/20 text-white/40 placeholder-white placeholder-opacity-60 rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm opacity-80">
                    Localisation
                  </label>
                  <input
                    type="text"
                    placeholder="Ville ou région"
                    value={searchData.location}
                    onChange={(e) =>
                      setSearchData((prev) => ({
                        ...prev,
                        location: e.target.value,
                      }))
                    }
                    className="w-full backdrop-blur-md bg-white/20 text-white/40 placeholder-white placeholder-opacity-60 rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white text-sm opacity-80">Date</label>
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) =>
                      setSearchData((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    className="w-full backdrop-blur-sm bg-white/20 text-white/40  rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                <div className="flex flex-wrap gap-2">
                  <span className="text-white text-sm opacity-80 mr-2">
                    Filtre:
                  </span>
                  {["Cotonou", "Ouidah", "Ganvié"].map((city) => (
                    <button
                      key={city}
                      onClick={() => handleCityButtonClick(city)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        searchData.location === city
                          ? "bg-[#556B2F] text-white"
                          : "bg-white/20 text-white hover:bg-opacity-30"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setSearchData((prev) => ({ ...prev, location: "" }))
                    }
                    className="text-white text-sm opacity-60 hover:opacity-80 underline ml-2"
                  >
                    Effacer filtre
                  </button>
                </div>
                <button
                  onClick={handleSearch}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
                >
                  <Search size={16} />
                  <span>Recherche</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Content - Circular Map */}
          <div className="hidden lg:flex justify-center items-center col-span-1">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-96 h-96 bg-[url(/images/decouverte.jpeg)] rounded-full border-4 border-white border-opacity-30 bg-white backdrop-blur-md flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                    <Play
                      size={24}
                      className="text-green-600 ml-1"
                      fill="currentColor"
                    />
                  </button>
                </div>
              </div>

              {/* Location Points */}
              <div className="absolute top-8 right-12 bg-white rounded-lg px-3 py-1 shadow-lg">
                <span className="text-sm font-medium text-gray-800">
                  Ganvié
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
              </div>

              <div className="absolute bottom-16 right-4 bg-white rounded-lg px-3 py-1 shadow-lg">
                <span className="text-sm font-medium text-gray-800">
                  Ouidah
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white rounded-lg px-3 py-1 shadow-lg">
                <span className="text-sm font-medium text-gray-800">
                  Cotonou
                </span>
                <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
              </div>

              {/* Connecting Lines */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full">
                  <path
                    d="M200,200 Q250,150 280,100"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M200,200 Q280,250 320,280"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    strokeDasharray="5,5"
                  />
                  <path
                    d="M200,200 Q120,280 80,320"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
