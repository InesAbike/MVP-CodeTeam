import React, { useState } from 'react';
import { Heart, Phone, MessageCircle, Star, Menu, X, Bell, MapPin } from 'lucide-react';
import { BsArrowRightCircleFill } from 'react-icons/bs';
const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white/50 rounded-sm flex items-center justify-center">
                            <div className="text-blue-600 font-bold text-lg">B</div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Accueil</a>
                        <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Destination</a>
                        <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Circuits touristiques</a>
                        <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Artisanat</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="border border-blue-500 backdrop-blur-sm text-blue-500 px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-opacity-30 transition-all">
                            <span className="hidden sm:inline">Nous contacter</span>
                            <BsArrowRightCircleFill size={16} />
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-700 hover:text-yellow-600 p-2"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t bg-white">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
                                Accueil
                            </a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
                                Destination
                            </a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
                                Circuits Touristiques
                            </a>
                            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
                                Artisanat
                            </a>
                            <div className="flex items-center space-x-4">
                                <button className="border border-white backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-opacity-30 transition-all">
                                    <span className="hidden sm:inline">Nous contacter</span>
                                    <BsArrowRightCircleFill size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar