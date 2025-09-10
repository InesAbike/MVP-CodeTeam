'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { MapPin } from 'lucide-react';
import {
  useSearchAll,
  useSearchTouristicSites,
  useSearchArtisanShops,
} from '@/services/search';
import type { SearchDTO } from '@/types/search.types';
import type { TouristicSite } from '@/types/touristic.types';
import type { ArtisanShop } from '@/types/artisan.types';
import ArtisanalShopCard from '@/app/components/landing-page/ArtisanalShopCard';
import TouristSiteCard from '@/app/components/landing-page/TouristSiteCard';
import ArtisanalShopSkeleton from '@/app/components/landing-page/skeletons/ArtisanalShopSkeleton';
import TouristSiteSkeleton from '@/app/components/landing-page/skeletons/TouristSiteSkeleton';

type SearchCategory = 'all' | 'sites' | 'artisans';

export const Main = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTab = (searchParams.get('tab') || 'all') as SearchCategory;
  const query = searchParams.get('q') || undefined;
  const category = searchParams.get('category') || undefined;
  const location = searchParams.get('location') || undefined;

  const searchArgs: SearchDTO = {
    query,
    category,
    city: location,
  };

  const searchResults = useSearchAll(searchArgs);
  const sitesOnlyResults = useSearchTouristicSites(searchArgs);
  const artisansOnlyResults = useSearchArtisanShops(searchArgs);

  const isLoading = searchResults === undefined || sitesOnlyResults === undefined || artisansOnlyResults === undefined;

  const handleTabChange = (tab: SearchCategory) => {
    const params = new URLSearchParams(searchParams);
    params.set('tab', tab);
    router.push(`${pathname}?${params.toString()}`);
  };

  const sites = selectedTab === 'all' ? searchResults?.touristicSites : sitesOnlyResults;
  const artisans = selectedTab === 'all' ? searchResults?.artisanShops : artisansOnlyResults;

  const getCount = (tab: SearchCategory) => {
    if (isLoading) return 0;
    if (tab === 'all') return (searchResults?.touristicSites.length || 0) + (searchResults?.artisanShops.length || 0);
    if (tab === 'sites') return sitesOnlyResults?.length || 0;
    if (tab === 'artisans') return artisansOnlyResults?.length || 0;
    return 0;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {[
            { value: 'all', label: 'Tout' },
            { value: 'sites', label: 'Sites touristiques' },
            { value: 'artisans', label: 'Artisans' },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => handleTabChange(tab.value as SearchCategory)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === tab.value
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
              <span className="ml-2 bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                {getCount(tab.value as SearchCategory)}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-8">
        {isLoading ? (
          <>
            {(selectedTab === 'all' || selectedTab === 'sites') && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                  Sites touristiques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => <TouristSiteSkeleton key={i} />)}
                </div>
              </section>
            )}
            {(selectedTab === 'all' || selectedTab === 'artisans') && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                  Artisans locaux
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => <ArtisanalShopSkeleton key={i} />)}
                </div>
              </section>
            )}
          </>
        ) : (
          <>
            {(selectedTab === 'all' || selectedTab === 'sites') && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                  Sites touristiques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sites?.map((site: TouristicSite) => (
                    <TouristSiteCard key={site._id} id={site._id} title={site.name} description={site.description} imageSrc={site.images[0]} imageAlt={site.name} />
                  ))}
                </div>
                {sites?.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    Aucun site touristique trouvé pour votre recherche.
                  </p>
                )}
              </section>
            )}

            {(selectedTab === 'all' || selectedTab === 'artisans') && (
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                  Artisans locaux
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {artisans?.map((artisan: ArtisanShop) => (
                    <ArtisanalShopCard key={artisan._id} name={artisan.name} location={artisan.location.city} categories={artisan.categories} imageSrc={artisan.images[0]} />
                  ))}
                </div>
                {artisans?.length === 0 && (
                  <p className="text-gray-500 text-center py-8">
                    Aucun artisan trouvé pour votre recherche.
                  </p>
                )}
              </section>
            )}
          </>
        )}
      </div>
    </main>
  );
};
