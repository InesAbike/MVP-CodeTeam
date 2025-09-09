import React from 'react'
import Image from 'next/image'
import { Bike, CalendarFold, CarFront, CircleQuestionMark, Footprints, GraduationCap, Hand, Heart, Mail, MessageCircle, Phone, Scissors, Share, Shield, Star, ThumbsUp } from 'lucide-react'
import { FaScissors, FaStar } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'
import ArtisanalShopCard from '../components/landing-page/ArtisanalShopCard'
import { shopDetails } from '@/mocks/shopDetails'

const DetailsShop = () => {

  const shop = shopDetails;

  const renderStars = (rating: number, size = "w-4 h-4") => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`${size} ${i < Math.floor(rating) ? 'fill-current text-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('fr-FR') + ' FCFA';
  };

  const getWorkshopIcon = (iconName: string) => {
    const icons = {
      Hand: <Hand />,
      GraduationCap: <GraduationCap />
    };
    return icons[iconName] || <Hand />;
  };

  return (
    <div className=''>
      <div className='bg-gray-50'>
        {/* Hero Section */}
        <div className='w-full h-[600px] relative'>
          <Image
            src={shop.mainImage}
            alt={shop.name}
            fill
            className='absolute inset-0 object-cover'
          />
          <div className="absolute inset-0 w-full">
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent">
              <div className="py-8 px-12 text-white flex flex-col items-start justify-between">
                <div className='flex items-center gap-4'>
                  <div className='bg-[#D4AF37] px-2 py-1 rounded-full flex items-center gap-2 text-base font-semibold'>
                    <FaScissors /> <span>{shop.category}</span>
                  </div>
                  <div className='flex items-center gap-2 text-sm font-semibold'>
                    <FaStar className='text-[#D4AF37]' /> 
                    <span>{shop.rating} <span className='text-white/70'>({shop.totalReviews} avis)</span></span>
                  </div>
                </div>
                <div className='flex items-center justify-between w-full'>
                  <div className='flex items-start flex-col gap-2'>
                    <div className='text-xl mt-2'>{shop.name}</div>
                    <div className='flex items-center gap-2'>
                      <IoLocationSharp /> {shop.location.address} • {shop.status}
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <button className='bg-[#D4AF37] px-4 py-2 rounded-lg'>Ajouter à l'itinéraire</button>
                    <button className='px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm'>Partager</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span className="flex items-center">
                  <span className="mr-1">📞</span> Appels
                </span>
                <span className="flex items-center">
                  <span className="mr-1">💬</span> WhatsApp
                </span>
                <span className="flex items-center">
                  <span className="mr-1">⭐</span> Itinéraire
                </span>
                <span className="flex items-center">
                  <span className="mr-1">💾</span> Sauvegarder
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {Object.entries(shop.openingHours).find(([day, hours]) => 
                  hours !== "Fermé" && day.includes("Lun")
                )?.[1] || "Voir horaires"}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* About Section */}
              <section className="bg-white rounded-lg p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">À propos de l'atelier</h1>
                <div className="text-gray-700 space-y-4">
                  {shop.about.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </section>

              {/* Products Section */}
              <section className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Produits Phares</h2>
                  <a href="#" className="text-yellow-500 hover:text-yellow-600 text-sm">Voir tout →</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {shop.featuredProducts.map((product) => (
                    <div key={product.id} className='flex flex-col'>
                      <div className="rounded-xl mb-3 relative h-[200px] w-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={500}
                          height={500}
                          className='absolute inset-0 object-cover h-full w-full rounded-xl'
                        />
                        <Heart className="absolute top-3 right-3 w-6 h-6 text-white" />
                      </div>
                      <div className='flex flex-col gap-2'>
                        <h3 className="font-semibold text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-yellow-500">{formatPrice(product.price)}</span>
                          <span className="text-xs text-gray-500">{product.priceEuro}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Artisan Profile */}
              <section className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Rencontrez l'Artisan</h2>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full">
                    <Image
                      src={shop.artisan.avatar}
                      alt={shop.artisan.name}
                      width={50}
                      height={50}
                      className='h-22 w-22 rounded-full'
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{shop.artisan.name}</h3>
                        <p className="text-sm text-yellow-500 font-medium">
                          {shop.artisan.title} — {shop.artisan.experience}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-700 mb-3">
                      «{shop.artisan.quote}»
                    </p>

                    <p className="text-sm text-gray-700 mb-4">
                      {shop.artisan.description}
                    </p>

                    <div className="flex items-center space-x-4 text-sm">
                      {shop.artisan.certified && (
                        <span className="flex items-center text-gray-600">
                          <Shield className='text-yellow-500 mr-1' size={20} />
                          Artisan certifié
                        </span>
                      )}
                      <span className="flex items-center text-gray-600">
                        <CalendarFold className="text-yellow-500 mr-1" size={20} />
                        {shop.artisan.totalExperience}
                      </span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Workshops Section */}
              <section className="bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Expérience Atelier</h2>
                <p className="text-gray-500 mb-6">
                  Participez à un atelier authentique et apprenez les techniques de base du tissage traditionnel béninois.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {shop.workshops.map((workshop) => (
                    <div key={workshop.id} className={`bg-white rounded-lg p-4 border border-${workshop.color}-200`}>
                      <div className="flex items-center mb-3">
                        <div className={`w-12 h-12 bg-${workshop.color}-500 rounded-full flex items-center justify-center mr-3 text-white`}>
                          {getWorkshopIcon(workshop.icon)}
                        </div>
                        <h3 className="font-semibold text-gray-900">{workshop.name}</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{workshop.duration} - {workshop.level}</p>

                      <ul className="text-sm text-gray-700 space-y-1 mb-4">
                        {workshop.features.map((feature, index) => (
                          <li key={index}>✓ {feature}</li>
                        ))}
                      </ul>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-yellow-500">{formatPrice(workshop.price)}</span>
                        <button className={`bg-${workshop.color}-500 hover:bg-${workshop.color}-600 text-white px-4 py-2 rounded text-sm`}>
                          Réserver
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reviews Section */}
              <section className="bg-white rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Avis Clients</h2>
                  <div className="flex items-center space-x-2">
                    <div className="flex text-yellow-400">
                      {renderStars(shop.rating)}
                    </div>
                    <span className="text-sm font-medium">{shop.rating}</span>
                    <span className="text-sm text-gray-500">({shop.totalReviews} avis)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {shop.reviews.map((review) => (
                    <div key={review.id} className="flex items-start gap-8 pb-6 border-b border-gray-200">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={50}
                        height={50}
                        className='h-12 w-12 rounded-full'
                      />
                      <div className="flex flex-col">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{review.name}</h4>
                          <div className="flex text-yellow-400">
                            {renderStars(review.rating, "w-3 h-3")}
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mb-2">{review.country} • {review.timeAgo}</p>
                        <p className="text-sm text-gray-700">{review.comment}</p>
                        <div className="flex gap-2 items-center text-xs text-gray-500 mt-4">
                          <ThumbsUp size={14} />
                          <button className="hover:text-blue-600">Utile ({review.helpful})</button>
                          <button className="hover:text-blue-600">Répondre</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-6">
                  <button className="text-yellow-500 text-sm font-medium">
                    Voir tous les avis ({shop.totalReviews})
                  </button>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-4">
              {/* Contact Info */}
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Informations Pratiques</h3>

                <div className="space-y-3">
                  {Object.entries(shop.openingHours).map(([days, hours]) => (
                    <div key={days} className="flex items-center text-sm">
                      <span className={`w-2 h-2 ${hours === 'Fermé' ? 'bg-red-500' : 'bg-green-500'} rounded-full mr-3`}></span>
                      <div>
                        <div className="text-gray-900 font-medium">{days}:</div>
                      </div>
                      <div className="ml-auto">
                        <div className="text-gray-900">{hours}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 space-y-2">
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                    <MessageCircle size={24} />
                    <div className='flex flex-col gap-1'>
                      <span>WhatsApp</span>
                      <span className="text-xs">{shop.contact.whatsapp}</span>
                    </div>
                  </button>

                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                    <Phone size={24} />
                    <div className='flex flex-col gap-1'>
                      <span>Téléphone</span>
                      <span className="text-xs">{shop.contact.phone}</span>
                    </div>
                  </button>
                  
                  <button className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg items-center flex space-x-2">
                    <Mail size={24} />
                    <div className='flex flex-col gap-1'>
                      <span>Email</span>
                      <span className="text-xs">{shop.contact.email}</span>
                    </div>
                  </button>
                </div>

                <div className="mt-4 flex w-full items-center gap-4 flex-col md:flex-row">
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium">
                    Ajouter à mon itinéraire
                  </button>
                  <button className="w-full border text-yellow-500 py-3 px-4 rounded-lg font-medium hover:bg-yellow-500 hover:text-white">
                    Partager cette boutique
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Shops */}
          <section className="mt-12 bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Boutiques Similaires</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {shop.similarShops.map((similarShop) => (
                <div key={similarShop.id} className="embla__slide flex-[0_0_35%]">
                  <ArtisanalShopCard
                    name={similarShop.name}
                    location={similarShop.location}
                    categories={similarShop.categories}
                    imageSrc={similarShop.imageSrc}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DetailsShop