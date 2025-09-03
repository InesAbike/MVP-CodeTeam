'use client'
import React, { useState } from 'react';
import { Search, Play, MapPin, DollarSign } from 'lucide-react';
import Image from 'next/image';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import SearchComponent from '../SearchComponent';

const HeroBenin = () => {
    const [searchData, setSearchData] = useState({
        tourName: '',
        price: '',
        location: 'Tous les sites',
        date: ''
    });

    const [activeFilters, setActiveFilters] = useState(['Cotonou', 'Ouidah', 'Ganvié']);

    const handleFilterToggle = (filter: string) => {
        setActiveFilters(prev =>
            prev.includes(filter)
                ? prev.filter((f: string) => f !== filter)
                : [...prev, filter]
        );
    };

    return (
        <div className="relative min-h-screen w-full bg-black/40 overflow-hidden">

            <Image
                src="/images/hero-benin.webp"
                alt="Bénin - La perle de l’Afrique de l’Ouest"
                fill
                priority
                className="object-cover -z-10"
            />

            {/* Navigation */}
            <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/50 rounded-sm flex items-center justify-center">
                        <div className="text-blue-600 font-bold text-lg">B</div>
                    </div>
                    <span className="text-white font-semibold text-lg">BÉNIN TOUR</span>
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">Accueil</a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">Destinations</a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">Circuits Touristiques</a>
                    <a href="#" className="text-white hover:text-blue-200 transition-colors">Artisanat</a>
                </div>

                <div className="flex items-center space-x-4">
                    <button className="border border-white backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-opacity-30 transition-all">
                        <span className="hidden sm:inline">Nous contacter</span>
                        <BsArrowRightCircleFill size={16} />
                    </button>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="relative z-10 px-6 lg:px-12 mt-16 lg:mt-20">
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
                        <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                            Découvrez Le Cœur Du Bénin
                        </h1>

                        <p className="text-white text-lg lg:text-xl opacity-90 leading-relaxed max-w-lg">
                            Itinéraires parfaits, excursions uniques et expériences
                            inoubliables - créez votre voyage de rêve avec nous !
                        </p>

                        {/* Search Form */}
                        <div className="backdrop-blur-sm border border-white/50 rounded-2xl p-6 space-y-4">
                            <h3 className="text-white text-lg font-semibold">Trouvez le meilleur endroit</h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="space-y-2">
                                    <label className="text-white text-sm opacity-80">À la recherche de</label>
                                    <input
                                        type="text"
                                        placeholder="Nom du site"
                                        value={searchData.tourName}
                                        onChange={(e) => setSearchData(prev => ({ ...prev, tourName: e.target.value }))}
                                        className="w-full backdrop-blur-md bg-white/20 text-white/40 placeholder-white placeholder-opacity-60 rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm opacity-80">Prix</label>
                                    <input
                                        type="text"
                                        placeholder="Budget"
                                        value={searchData.price}
                                        onChange={(e) => setSearchData(prev => ({ ...prev, price: e.target.value }))}
                                        className="w-full backdrop-blur-sm bg-white/20 text-white/40 placeholder-white placeholder-opacity-60 rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm opacity-80">Localisation</label>
                                    <select
                                        value={searchData.location}
                                        onChange={(e) => setSearchData(prev => ({ ...prev, location: e.target.value }))}
                                        className="w-full backdrop-blur-sm bg-white/20 text-white/40 rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                                    >
                                        <option value="Tous les sites">Tous les sites</option>
                                        <option value="Cotonou">Cotonou</option>
                                        <option value="Ouidah">Ouidah</option>
                                        <option value="Ganvié">Ganvié</option>
                                        <option value="Abomey">Abomey</option>
                                        <option value="Grand-Popo">Grand-Popo</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-white text-sm opacity-80">Date</label>
                                    <input
                                        type="date"
                                        value={searchData.date}
                                        onChange={(e) => setSearchData(prev => ({ ...prev, date: e.target.value }))}
                                        className="w-full backdrop-blur-sm bg-white/20 text-white/40  rounded-lg px-3 py-2 focus:outline-none focus:border-opacity-40"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-white text-sm opacity-80 mr-2">Filtre:</span>
                                    {['Cotonou', 'Ouidah', 'Ganvié'].map((filter) => (
                                        <button
                                            key={filter}
                                            onClick={() => handleFilterToggle(filter)}
                                            className={`px-4 py-2 rounded-lg text-sm transition-all ${activeFilters.includes(filter)
                                                ? 'bg-[#556B2F] text-white'
                                                : 'bg-white bg-opacity-20 text-white hover:bg-opacity-30'
                                                }`}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => setActiveFilters([])}
                                        className="text-white text-sm opacity-60 hover:opacity-80 underline ml-2"
                                    >
                                        Effacer filtre
                                    </button>
                                </div>

                                <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors">
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

                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
                            
                        </div>
                         

                                {/* Play Button */}
                                <div className="absolute inset-0 flex items-center justify-center z-30">
                                    <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                        <Play size={24} className="text-green-600 ml-1" fill="currentColor" />
                                    </button>
                                </div>
                            </div>

                            {/* Location Points */}
                            <div className="absolute top-8 right-12 bg-white rounded-lg px-3 py-1 shadow-lg">
                                <span className="text-sm font-medium text-gray-800">Ganvié</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full absolute -bottom-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>

                            <div className="absolute bottom-16 right-4 bg-white rounded-lg px-3 py-1 shadow-lg">
                                <span className="text-sm font-medium text-gray-800">Ouidah</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                            </div>

                            <div className="absolute bottom-8 left-8 bg-white rounded-lg px-3 py-1 shadow-lg">
                                <span className="text-sm font-medium text-gray-800">Cotonou</span>
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
            <SearchComponent />
        </div>
    );
};

export default HeroBenin;