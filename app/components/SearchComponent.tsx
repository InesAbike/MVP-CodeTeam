"use client";

import React, { useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

interface SearchResults {
  touristicSites: any[];
  artisanShops: any[];
}

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('');
  const [limit, setLimit] = useState(10);

  // Utilisation de la fonction de recherche unifiée
  const searchResults: SearchResults | undefined = useQuery(
    api.api.search.searchAll,
    {
      ...(searchQuery && { query: searchQuery }),
      ...(selectedCategory && { category: selectedCategory }),
      ...(selectedCity && { city: selectedCity }),
      ...(selectedDepartment && { department: selectedDepartment }),
      ...(selectedNeighborhood && { neighborhood: selectedNeighborhood }),
      ...(limit && { limit }),
    }
  );

  const handleSearch = () => {
    // La recherche se fait automatiquement via useQuery
    // Les résultats sont dans searchResults
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Recherche Sites Touristiques & Boutiques d'Artisans</h1>

      {/* Formulaire de recherche */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Recherche textuelle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Recherche textuelle
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Nom, description..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Catégorie */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Catégorie
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Toutes les catégories</option>
              <optgroup label="Sites Touristiques">
                <option value="culturel">Culturel</option>
                <option value="naturel">Naturel</option>
                <option value="historique">Historique</option>
                <option value="religieux">Religieux</option>
              </optgroup>
              <optgroup label="Boutiques d'Artisans">
                <option value="textile">Textile</option>
                <option value="sculpture">Sculpture</option>
                <option value="bijouterie">Bijouterie</option>
                <option value="poterie">Poterie</option>
                <option value="vannerie">Vannerie</option>
              </optgroup>
            </select>
          </div>

          {/* Ville */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ville
            </label>
            <input
              type="text"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              placeholder="Ex: Cotonou, Porto-Novo..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Département */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Département
            </label>
            <input
              type="text"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              placeholder="Ex: Littoral, Atlantique..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Quartier */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quartier
            </label>
            <input
              type="text"
              value={selectedNeighborhood}
              onChange={(e) => setSelectedNeighborhood(e.target.value)}
              placeholder="Ex: Fidjrossè, Gbèdjromèdé..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Limite de résultats */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nombre max de résultats
            </label>
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Rechercher
        </button>
      </div>

      {/* Résultats */}
      {searchResults && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Sites Touristiques */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-green-600">
              Sites Touristiques ({searchResults.touristicSites.length})
            </h2>
            {searchResults.touristicSites.length === 0 ? (
              <p className="text-gray-500">Aucun site touristique trouvé</p>
            ) : (
              <div className="space-y-4">
                {searchResults.touristicSites.map((site) => (
                  <div key={site._id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg">{site.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{site.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {site.category}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {site.location.city}
                      </span>
                    </div>
                    {site.images && site.images.length > 0 && (
                      <img
                        src={site.images[0]}
                        alt={site.name}
                        className="w-full h-32 object-cover rounded-md mt-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Boutiques d'Artisans */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4 text-orange-600">
              Boutiques d'Artisans ({searchResults.artisanShops.length})
            </h2>
            {searchResults.artisanShops.length === 0 ? (
              <p className="text-gray-500">Aucune boutique d'artisan trouvée</p>
            ) : (
              <div className="space-y-4">
                {searchResults.artisanShops.map((shop) => (
                  <div key={shop._id} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-lg">{shop.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{shop.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {shop.categories.map((category: string) => (
                        <span key={category} className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                          {category}
                        </span>
                      ))}
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        {shop.location.city}
                      </span>
                    </div>
                    {shop.images && shop.images.length > 0 && (
                      <img
                        src={shop.images[0]}
                        alt={shop.name}
                        className="w-full h-32 object-cover rounded-md mt-2"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loading state */}
      {!searchResults && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Recherche en cours...</p>
        </div>
      )}
    </div>
  );
};

export default SearchComponent;