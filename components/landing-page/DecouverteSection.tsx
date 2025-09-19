const HeritageSection = () => {
  return (
    <div className="py-10">
      <div className="relative w-full bg-[url(/images/place-amazone.svg)] bg-benin-green/65 bg-cover bg-fixed bg-no-repeat min-h-[600px] h-screen flex items-center justify-center ">
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* Overlay texte */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 md:px-6">
          <h2 className="text-3xl md:text-5xl xl:text-6xl  font-bold text-white drop-shadow-lg leading-tight">
            Découvrez l’histoire et l’héritage du Bénin
          </h2>
          <div className="w-16 h-1 bg-benin-green rounded mt-3"></div>
          <p className="mt-4 text-base sm:text-xl text-gray-100 max-w-2xl drop-shadow-md">
            Autour de chaque monument, vivez aussi l’art et la créativité de nos
            artisans locaux.
          </p>
        </div>
      </div>
    </div>
  );
};
export default HeritageSection;
