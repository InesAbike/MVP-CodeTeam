import React from 'react'
import Image from 'next/image'
import { Scissors } from 'lucide-react'
import { FaScissors, FaStar } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
const DetailsShop = () => {
  return (
    <div>
      <div className='w-full h-[600px]'>
        <Image
          src="/images/atelier.png"
          alt=""
          fill
          className='inset-0 object-cover'
        />
        <div className="absolute inset-0 w-full">
          <div className="absolute bottom-0 w-full h-52 bg-gradient-to-t from-black/50 to-transparent">
            <div className="p-4 text-white flex flex-col items-start justify-between">
              <div className='flex items-center gap-4'>
                <div className='bg-[#D4AF37] px-2 py-1 rounded-full flex items-center gap-2 text-base font-semibold'>
                  <FaScissors /> <span>Textile Traditionnel</span>
                </div>
                <div className='flex items-center gap-2 text-sm font-semibold'>
                  <FaStar className='text-[#D4AF37]' /> <span>4.8 <span className='text-white/70'>(124 avis)</span></span>
                </div>
              </div>
              <div className='flex items-center justify-between w-full'>
                <div className='flex items-start flex-col gap-2'>
                  <div className='text-xl'>Atelier Kpakpa Textiles</div>
                  <div className='flex items-center gap-2'><IoLocationSharp /> Quartier Ganhi, Cotonou • Ouvert maintenant</div>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='bg-[#D4AF37] px-4 py-2 rounded-lg '> Ajouter à l'itinéraire</button>
                  <button className='px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm'>Partager</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default DetailsShop