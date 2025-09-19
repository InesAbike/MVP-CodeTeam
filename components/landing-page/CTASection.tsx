import Link from "next/link";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function HeroSection() {
  return (
    <div className="relative h-[500px] bg-[url('/images/pattern-green-yellow-red.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
        <div className="text-center px-6 mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Prêt à explorer le Bénin ?
          </h1>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Créez votre itinéraire personnalisé et découvrez les merveilles
            culturelles et artisanales du pays.
          </p>

          <div className="flex items-center justify-center">
            <Link
              href="/search"
              className="border border-white text-white px-4 py-2 rounded-xl flex items-center space-x-2 transition-colors focus:outline-none focus:ring-2 focus:ring-benin-yellow/70 hover:bg-benin-green hover:border-benin-green"
            >
              <span className="text-white">Découvrir</span>
              <BsArrowRightCircleFill size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
