import React from "react";

const Filters: React.FC = () => {
  const categories = ["Sites touristiques", "Boutiques d’artisanat"];
  const types = [
    "Historique",
    "Naturel",
    "Spirituel",
    "Textile",
    "Culturel",
    "Poterie",
  ];
  const regions = ["Toutes les régions", "Ouidah", "Tanguiéta", "Abomey"];

  return (
    <div className="bg-white p-5 rounded-lg border border-gray-200">
      <h3 className="text-lg font-semibold text-brown-600 mb-2">Filtres</h3>
      <div className="grid grid-cols-3 gap-4">
        <div className="space-y-4">
          <h4 className="text-md font-medium">Catégories</h4>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-blue-600" />
              <span>{cat}</span>
            </label>
          ))}
        </div>
        <div className="space-y-4">
          <h4 className="text-md font-medium">Types</h4>
          <div className="grid grid-cols-2 gap-1">
            {types.map((type) => (
              <label key={type} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-md font-medium">Région</h4>
          <select className="w-full p-2 border rounded">
            {regions.map((reg) => (
              <option key={reg}>{reg}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
