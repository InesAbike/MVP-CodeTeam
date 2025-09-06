import React from 'react'
import { BsArrowRightCircleFill } from 'react-icons/bs'

const NavBar = () => {
  return (
       <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6">
       <div className="flex items-center space-x-2">
           <div className="w-8 h-8 bg-white/50 rounded-sm flex items-center justify-center">
               <div className="text-blue-600 font-bold text-lg">B</div>
           </div>
           <span className="text-white font-semibold text-lg">BÉNIN TOUR</span>
       </div>

       <div className="hidden md:flex items-center space-x-8">
           <a href="#" className="text-white hover:text-blue-200 transition-colors">Accueil</a>
           <a href="#" className="text-white hover:text-blue-200 transition-colors">Destinations</a>
           <a href="#" className="text-white hover:text-blue-200 transition-colors">Circuits Touristiques</a>
           <a href="#" className="text-white hover:text-blue-200 transition-colors">Artisanat</a>
       </div>

       <div className="flex items-center space-x-4">
           <button className="border border-white backdrop-blur-sm text-white px-4 py-2 rounded-xl flex items-center space-x-2 hover:bg-opacity-30 transition-all">
               <span className="hidden sm:inline">Nous contacter</span>
               <BsArrowRightCircleFill size={16} />
           </button>
       </div>
   </nav>
  )
}

export default NavBar