import Image from "next/image";

const HeritageSection = () => {
  return (
    <div className="py-10">
      <div className="relative w-full h-screen flex items-center justify-center ">
        {/* Image de fond */}
        <Image
          src="/images/place-amazone.svg"
          alt="Statue Amazone - Bénin"
          fill
          className="object-cover brightness-60"
          priority
        />

        {/* Overlay texte */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h2 className="text-5xl lg:text-6xl  font-bold text-white drop-shadow-lg  leading-tight">
            Découvrez l’histoire et l’héritage du Bénin
          </h2>
          <p className="mt-4 text-xl text-gray-100 max-w-2xl drop-shadow-md">
            Autour de chaque monument,  vivez aussi l’art et la créativité de nos artisans locaux.
          </p>
        </div>
      </div>
    </div>
  );
}
export default HeritageSection 