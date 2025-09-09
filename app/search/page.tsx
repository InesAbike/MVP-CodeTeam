'use client';

import { useState } from 'react';
import { Search, MapPin, Filter, X } from 'lucide-react';

import ArtisanalShopCard from '@/app/components/landing-page/ArtisanalShopCard';
import TouristSiteCard from '@/app/components/landing-page/TouristSiteCard';

type SearchCategory = 'all' | 'sites' | 'artisans'; 

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SearchCategory>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    category: '',
    priceRange: '',
  });

  // Données factices pour la démo
  const sampleArtisans = [
    {
      id: '1',
      name: 'Atelier de Poterie',
      location: 'Cotonou, Bénin',
      categories: ['Potterie'],
      imageSrc: '/images/artisanal-shop-img/potter-shop.jpg',
    },
    // Ajoutez plus d'artisans ici
  ];

  const sampleSites = [
    {
      id: '1',
      title: 'Palais des Rois d\'Abomey',
      description: 'Site historique classé au patrimoine mondial de l\'UNESCO',
      imageSrc: '/images/tourist-site-img/abomey-palace.jpg',
      imageAlt: 'Palais des Rois d\'Abomey',
    },
    // Ajoutez plus de sites ici
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique de recherche ici
    console.log('Recherche:', { searchQuery, filters });
  };

  const clearFilters = () => {
    setFilters({
      location: '',
      category: '',
      priceRange: '',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête avec barre de recherche */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                placeholder="Rechercher des sites touristiques ou des artisans..."
              />
            </div>
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </button>
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Rechercher
            </button>
          </form>

          {/* Filtres déroulants */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Filtres</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                    Localisation
                  </label>
                  <input
                    type="text"
                    id="location"
                    value={filters.location}
                    onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Ville ou région"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Catégorie
                  </label>
                  <select
                    id="category"
                    value={filters.category}
                    onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Toutes les catégories</option>
                    <option value="culturel">Culturel</option>
                    <option value="naturel">Naturel</option>
                    <option value="historique">Historique</option>
                    <option value="artisanal">Artisanal</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                    Fourchette de prix
                  </label>
                  <select
                    id="priceRange"
                    value={filters.priceRange}
                    onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                    className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Tous les prix</option>
                    <option value="free">Gratuit</option>
                    <option value="cheap">Moins de 5 000 FCFA</option>
                    <option value="medium">5 000 - 20 000 FCFA</option>
                    <option value="expensive">Plus de 20 000 FCFA</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Onglets de catégorie */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { value: 'all', label: 'Tout' },
              { value: 'sites', label: 'Sites touristiques' },
              { value: 'artisans', label: 'Artisans' },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setSelectedCategory(tab.value as SearchCategory)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  selectedCategory === tab.value
                    ? 'border-yellow-500 text-yellow-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
                <span className="ml-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                  {tab.value === 'all' 
                    ? sampleArtisans.length + sampleSites.length 
                    : tab.value === 'artisans' 
                      ? sampleArtisans.length 
                      : sampleSites.length}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Résultats de la recherche */}
        <div className="space-y-8">
          {(selectedCategory === 'all' || selectedCategory === 'sites') && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                Sites touristiques
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleSites.map((site) => (
                  <TouristSiteCard key={site.id} {...site} />
                ))}
              </div>
              {sampleSites.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Aucun site touristique trouvé pour votre recherche.
                </p>
              )}
            </section>
          )}

          {(selectedCategory === 'all' || selectedCategory === 'artisans') && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                Artisans locaux
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleArtisans.map((artisan) => (
                  <ArtisanalShopCard key={artisan.id} {...artisan} />
                ))}
              </div>
              {sampleArtisans.length === 0 && (
                <p className="text-gray-500 text-center py-8">
                  Aucun artisan trouvé pour votre recherche.
                </p>
              )}
            </section>
          )}
        </div>
      </main>
    </div>
  );
};

export default SearchPage;
