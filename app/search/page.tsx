import { Suspense } from "react";
import { Header } from "../../components/search/Header";
import { Main } from "../../components/search/Main";
import ArtisanalShopSkeleton from "@/components/landing-page/skeletons/ArtisanalShopSkeleton";
import { MapPin } from "lucide-react";
import TouristSiteSkeleton from "@/components/landing-page/skeletons/TouristSiteSkeleton";

const SearchPage = () => {
  return (
    <Suspense
      fallback={
        <>
          <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                  Sites touristiques
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <TouristSiteSkeleton key={`site-skel-${i}`} />
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-yellow-600" />
                  Artisans locaux
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <ArtisanalShopSkeleton key={`artisan-skel-${i}`} />
                  ))}
                </div>
              </section>
            </div>
          </main>
        </>
      }
    >
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Main />
      </div>
    </Suspense>
  );
};

export default SearchPage;
