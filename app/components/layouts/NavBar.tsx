import React, { useState } from 'react';
import { Heart, Phone, MessageCircle, Star, Menu, X, Bell, MapPin } from 'lucide-react';
const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">BJ</span>
          </div>
          <span className="font-bold text-gray-900 text-lg">Bénin Découverte</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Destinations</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Artisanat</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Culture</a>
          <a href="#" className="text-gray-700 hover:text-yellow-600 font-medium">Mon Itinéraire</a>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-600 hover:text-yellow-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
          </div>
          <div className="relative">
            <MapPin className="w-5 h-5 text-gray-600 hover:text-yellow-600 cursor-pointer" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
          </div>
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
              Destinations
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
              Artisanat
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
              Culture
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:text-yellow-600 hover:bg-gray-50 rounded-md font-medium">
              Mon Itinéraire
            </a>
            <div className="flex items-center px-3 py-2 space-x-4">
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">2</span>
              </div>
              <div className="relative">
                <MapPin className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">5</span>
              </div>
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </nav>
  )
}

export default NavBar