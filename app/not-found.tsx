import Link from "next/link";
import { FaMap } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="relative flex py-20 flex-col items-center justify-center space-y-8 bg-white">
      <div className="relative">
        <Link
          href="/"
          className="w-20 aspect-square flex items-center space-x-2 text-white text-lg bg-benin-green rounded-full justify-center"
        >
          <FaMap size={40} />
        </Link>
      </div>

      <h1 className="text-8xl font-normal">404</h1>

      <p className="text-sm">
        Cette page n&apos;existe pas ou a été supprimée.
      </p>

      <div className="flex flex-col items-center gap-6">
        <Link
          href="/"
          className="border-2 border-black bg-white px-4 py-1.5 text-sm text-black uppercase shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 hover:shadow-sm md:px-8"
        >
          Revenir à l&apos;accueil
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
