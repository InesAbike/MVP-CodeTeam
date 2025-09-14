import React, { useState } from 'react';
import Image from 'next/image';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { FaMap } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
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
                <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                    Accueil
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                    Destinations
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Carte Interactive
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                    Artisanat
                </a>
            </div>

            {/* Boutons Desktop + Menu Hamburger */}
            <div className="flex items-center space-x-4">
                {/* Bouton Contact Desktop */}
                <button className="hidden md:flex border border-gray-200 backdrop-blur-sm text-gray-500 px-4 py-2 rounded-xl items-center space-x-2 hover:bg-opacity-30 transition-all">
                    <span>Nous contacter</span>
                    <BsArrowRightCircleFill size={16} />
                </button>

                {/* Bouton Hamburger */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-gray-400 hover:text-gray-500 transition-colors p-2"
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
                                className="text-gray-300 hover:text-gray-500 transition-colors text-lg py-3 border-b border-white/10"
                                onClick={closeMenu}
                            >
                                Accueil
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-gray-500 transition-colors text-lg py-3 border-b border-white/10"
                                onClick={closeMenu}
                            >
                                Destinations
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-gray-500 transition-colors text-lg py-3 border-b border-white/10"
                                onClick={closeMenu}
                            >
                              Carte Interactive
                            </a>
                            <a
                                href="#"
                                className="text-gray-300 hover:text-gray-500 transition-colors text-lg py-3 border-b border-white/10"
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
    )
}


export default NavBar