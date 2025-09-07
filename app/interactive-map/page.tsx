import type { NextPage } from "next";
import Filters from "../components/interactive-map/Filter";
import Results from "../components/interactive-map/Result";
import MapWrapper from "../components/interactive-map/MapWrapper";

const Home: NextPage = () => {
  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6">
        <Filters />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Carte interactive</h3>
              <MapWrapper />
            </div>
          </div>
          <div className="lg:col-span-1">
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;