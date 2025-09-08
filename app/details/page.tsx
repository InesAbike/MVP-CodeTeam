import React from 'react'
import Image from 'next/image'
import { Bike, CalendarFold, CarFront, CircleQuestionMark, Footprints, GraduationCap, Hand, Heart, Mail, MessageCircle, Phone, Scissors, Share, Shield, Star, ThumbsUp } from 'lucide-react'
import { FaScissors, FaStar } from 'react-icons/fa6'
import { IoLocationSharp } from 'react-icons/io5'

const DetailsShop = () => {

  const Products = {
    id:''
  }
  return (
    <div className=''>
    <div className='bg-gray-50'>
      <div className='w-full h-[600px] relative'>
        <Image
          src="/images/atelier.png"
          alt=""
          fill
          className='absolute inset-0 object-cover'
        />
        <div className="absolute inset-0 w-full">
          <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/50 to-transparent">
            <div className="py-8 px-12 text-white flex flex-col items-start justify-between">
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
              Ouvert jusqu'à 18h00
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
                <p>
                  L'atelier Apùuya Kpolovi propose depuis trois générations l'art ancestral du tissage béninois, ainsi
                  que la fabrication artisanale d'objets utilitaires et décoratifs créés uniquement avec leurs connaissances
                  ancestrales de textile authentique et les voyageurs en quête d'authenticité.
                </p>
                <p>
                  Nos activités redonnent confiance et techniques en développant nos talents intérieurs pour partage à tous
                  ceux que nous cadeautons aux motifs géométriques tissés inspirés de la culture Fon et Yoruba. Chaque
                  création respects une histoire, notre art répond et reflète le contexte culturel de Bénin.
                </p>
                <p>
                  Vient découvrir notre atelier dans une zone viable guidés et visiter lors avec cette pièces unique qui
                  vous accompagnera longtemps dans vos souvenirs de voyage.
                </p>
              </div>
            </section>

            {/* Products Section */}
            <section className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Produits Phares</h2>
                <a href="#" className="text-yellow-500 hover:text-yellow-600 text-sm">Voir tout →</a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Product 1 */}
                <div className='flex flex-col'>
                  <div className="rounded-xl mb-3 relative h-[200px] w-full">
                    <Image
                      src="/images/pagne-kanté.png"
                      alt=""
                      width={500}
                      height={500}
                      className='absolute inset-0 object-cover h-full w-full rounded-xl'
                    />
                    <Heart className="absolute top-3 right-3 w-6 h-6 text-white" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className="font-semibold text-gray-900">Panier Kanté Royal</h3>
                    <p className="text-sm text-gray-600">
                      Tissage traditionnel aux motifs géométriques sacrés,
                      idéal pour les cérémonies
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-yellow-500">35,000 FCFA</span>
                      <span className="text-xs text-gray-500">~53€</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className="rounded-xl mb-3 relative h-[200px] w-full">
                    <Image
                      src="/images/pagne-kanté.png"
                      alt=""
                      width={500}
                      height={500}
                      className='absolute inset-0 object-cover h-full w-full rounded-xl'
                    />
                    <Heart className="absolute top-3 right-3 w-6 h-6 text-white" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className="font-semibold text-gray-900">Panier Tissé Traditionnel</h3>
                    <p className="text-sm text-gray-600">
                      Panier artisanal tissé résistant, parfait pour la
                      décoration et l'usage pratique.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-yellow-500">12 000 FCFA</span>
                      <span className="text-xs text-gray-500">+7€</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <div className="rounded-xl mb-3 relative h-[200px] w-full">
                    <Image
                      src="/images/pagne-kanté.png"
                      alt=""
                      width={500}
                      height={500}
                      className='absolute inset-0 object-cover h-full w-full rounded-xl'
                    />
                    <Heart className="absolute top-3 right-3 w-6 h-6 text-white" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className="font-semibold text-gray-900 mb-1">Écharpes Colorées</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Collection d'écharpes en motifs traditionnels,
                      parfaites pour toutes les occasions créatives.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-yellow-500">8 000 FCFA</span>
                      <span className="text-xs text-gray-500">+4€</span>
                    </div>
                  </div>
                </div>

                <div className='flex flex-col'>
                  <div className="rounded-xl mb-3 relative h-[200px] w-full">
                    <Image
                      src="/images/pagne-kanté.png"
                      alt=""
                      width={500}
                      height={500}
                      className='absolute inset-0 object-cover h-full w-full rounded-xl'
                    />
                    <Heart className="absolute top-3 right-3 w-6 h-6 text-white" />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <h3 className="font-semibold text-gray-900 mb-1">Tissu Cérémonial Doré</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      Tissu exceptionnel tissé de soie, réservé aux grandes
                      occasions et cérémonies traditionnelles.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-yellow-500">55 000 FCFA</span>
                      <span className="text-xs text-gray-500">+32€</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Rencontrez l'Artisan</h2>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full">
                  <Image
                    src="/images/avatar.png"
                    alt=""
                    width={50}
                    height={50}
                    className='h-22 w-22 rounded-full'
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">Moïka Kpohia Adjovi</h3>
                      <p className="text-sm text-yellow-500 font-medium">Maître Tisseur — depuis 20 ans</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 mb-3">
                    «Mon grand-père m'a transmis l'art du tissage depuis l'époque depuis l'âge. Depuis plus
                    de 30 ans, je perpétue cette tradition familiale avec passion et respect pour nos
                    ancêtres.»
                  </p>

                  <p className="text-sm text-gray-700 mb-4">
                    Expert aux techniques ancestrales du peuple Fon, Moïka Kpohia est reconnu
                    comme l'un des derniers gardiens des motifs traditionnels sacrés. Son
                    savoir-faire exceptionnel et sa créativité moderne créent des œuvres uniques
                    d'exception.
                  </p>

                  <div className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center text-gray-600">
                      <Shield className='text-yellow-500 mr-1' size={20} />
                      Artisan certifié
                    </span>
                    <span className="flex items-center text-gray-600">
                      <CalendarFold className="text-yellow-500 mr-1" size={20} />
                      25 ans d'expérience
                    </span>
                  </div>
                </div>
              </div>
            </section>
            {/* Experience Atelier */}
            <section className="bg-gradient-to-r from-yellow-50/50 to-orange-50/50 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Expérience Atelier</h2>
              <p className="text-gray-500 mb-6">
                Participez à un atelier authentique et apprenez les techniques de base du tissage traditionnel
                béninois.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Atelier Découverte */}
                <div className="bg-white rounded-lg p-4 border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center mr-3 text-white">
                      <Hand />
                    </div>
                    <h3 className="font-semibold text-gray-900">Atelier Découverte</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">2 heures - Débutant</p>

                  <ul className="text-sm text-gray-700 space-y-1 mb-4">
                    <li>✓ Introduction aux techniques de base</li>
                    <li>✓ Création d'un petit objet souvenir</li>
                    <li>✓ Atelier de rythmique des motifs</li>
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-yellow-500">15 000 FCFA</span>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded text-sm">
                      Réserver
                    </button>
                  </div>
                </div>

                {/* Atelier Maître */}
                <div className="bg-white rounded-lg p-4 border border-red-200 flex flex-col gap-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-3 text-white">
                      <GraduationCap />
                    </div>
                    <h3 className="font-semibold text-gray-900">Atelier Maître</h3>
                  </div>
                  <p className="text-sm text-gray-600">Niveau complet - Avancé</p>

                  <ul className="text-sm text-gray-700 space-y-1 mb-1">
                    <li>✓ Techniques avancées de tissage</li>
                    <li>✓ Création d'un pagne personnel</li>
                    <li>✓ Symboles traditionnels</li>
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-yellow-500">45 000 FCFA</span>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm">
                      Réserver
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Artisan Profile */}


            {/* Avis Clients */}
            <section className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Avis Clients</h2>
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.8</span>
                  <span className="text-sm text-gray-500">(127 avis)</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Review 1 */}
                <div className="flex items-start gap-8 pb-6 border-b border-gray-200">
                  <Image
                    src="/images/avatar.png"
                    alt=""
                    width={50}
                    height={50}
                    className='h-12 w-12 rounded-full'
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">Marie Laurent</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">France • Il y a 3 jours</p>
                    <p className="text-sm text-gray-700">
                      "Une expérience absolument magique ! Moïka Kpohia nous a accueillis avec une chaleur
                      exceptionnelle. Les enseignements sur les techniques et l'histoire des motifs étaient
                      passionnants. J'ai reparti un magnifique pagne et surtout une belle expérience humaine."
                    </p>
                    <div className="flex gap-2 items-center text-xs text-gray-500 mt-4">
                      <ThumbsUp size={14} />
                      <button className="hover:text-blue-600">Utile (12)</button>
                      <button className="hover:text-blue-600">Répondre</button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-8 pb-6 border-b border-gray-200">
                  <Image
                    src="/images/avatar.png"
                    alt=""
                    width={50}
                    height={50}
                    className='h-12 w-12 rounded-full'
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">James Wilson</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">USA • Il y a 1 mois</p>
                    <p className="text-sm text-gray-700">
                      "Outstanding craftsmanship and authentic cultural experience. The workshop was
                      incredibly informative and the quality of the textiles is exceptional. Highly recommend for
                      anyone interested in traditional African art."
                    </p>
                    <div className="flex gap-2 items-center text-xs text-gray-500 mt-4">
                      <ThumbsUp size={14} />
                      <button className="hover:text-blue-600">Utile (8)</button>
                      <button className="hover:text-blue-600">Répondre</button>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-8 pb-6 border-b border-gray-200">
                  <Image
                    src="/images/avatar.png"
                    alt=""
                    width={50}
                    height={50}
                    className='h-12 w-12 rounded-full'
                  />
                  <div className="flex flex-col">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-semibold text-gray-900">Aminata Traoré</h4>
                      <div className="flex text-yellow-400">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                        <Star className="w-3 h-3 text-gray-300" />
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">USA • Il y a 1 mois</p>
                    <p className="text-sm text-gray-700">
                      "En tant qu'Africaine, j'ai été touchée de voir la préservation de nos traditions. Les motifs
                      sont authentiques et la qualité irréprochable. Un lieu à absolument visiter pour comprendre
                      la richesse de notre patrimoine."
                    </p>
                    <div className="flex gap-2 items-center text-xs text-gray-500 mt-4">
                      <ThumbsUp size={14} />
                      <button className="hover:text-blue-600">Utile (8)</button>
                      <button className="hover:text-blue-600">Répondre</button>
                    </div>
                  </div>
                </div>

              </div>

              <div className="text-center mt-6">
                <button className="text-yellow-500 text-sm font-medium">
                  Voir tous les avis (127)
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
                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  <div>
                    <div className="text-gray-900 font-medium">Horaires d'ouverture :</div>
                    <div className="text-gray-600">Lun - Ven</div>
                    <div className="text-gray-600">Sam - Dim</div>
                  </div>
                  <div className="ml-auto">
                    <div className="text-gray-900">8h00 - 18h00</div>
                    <div className="text-gray-900">8h00 - 20h00</div>
                  </div>
                </div>

                <div className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <div>
                    <div className="text-gray-900 font-medium">Dimanche</div>
                    <div className="text-gray-600">Fermé</div>
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                  <MessageCircle size={24} />
                  <div className='flex flex-col gap-1'>
                    <span>WhatsApp</span>
                    <span className="text-xs">+229 97 xx xx xx</span>
                  </div>
                </button>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center space-x-2">
                  <Phone size={24} />
                  <div className='flex flex-col gap-1'>
                    <span>Téléphone</span>
                    <span className="text-xs">+229 97 xx xx xx</span>
                  </div>
                </button>
                <button className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg flex space-x-2">
                  <Mail size={24} />
                  <div className='flex flex-col gap-1'>
                    <span>Email</span>
                    <span className="text-xs">contact@atelier.bj</span>
                  </div>
                </button>
              </div>

              <div className="mt-4 text-center">
                <span className="text-sm text-gray-600">Suivez-nous</span>
                <div className="flex mt-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"><CircleQuestionMark /></div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center"><CircleQuestionMark /></div>
                  <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center"><CircleQuestionMark /></div>
                </div>
              </div>

              <div className="mt-4 flex w-full items-center gap-4 flex-col md:flex-row">
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium">
                  Ajouter à mon itinéraire
                </button>
                <button className="w-full border- hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium">
                  <Share /> Partager cette boutique
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Localisation & Sites Proches */}
        <section className="bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Localisation & Sites Proches</h2>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="relative lg:col-span-2 col-sapn-1">
              <div className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-green-200 via-yellow-100 to-orange-200 relative">
                  {/* Simulated map with roads */}
                  <div className="absolute inset-4">
                    <div className="w-full h-full relative">
                      {/* Roads */}
                      <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-400"></div>
                      <div className="absolute top-2/3 left-0 w-full h-1 bg-gray-400"></div>
                      <div className="absolute left-1/3 top-0 w-1 h-full bg-gray-400"></div>
                      <div className="absolute left-2/3 top-0 w-1 h-full bg-gray-400"></div>

                      {/* Location pins */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>

                      {/* Other pins */}
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-4 bg-red-400 rounded-full border border-white"
                          style={{
                            top: `${20 + (i * 10) + (i % 3) * 15}%`,
                            left: `${15 + (i * 8) + (i % 4) * 12}%`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  {/* Map controls */}
                  <div className="absolute bottom-4 right-4 space-y-2">
                    <button className="w-8 h-8 bg-white rounded shadow border text-gray-600 hover:bg-gray-50">+</button>
                    <button className="w-8 h-8 bg-white rounded shadow border text-gray-600 hover:bg-gray-50">-</button>
                  </div>

                  <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded shadow text-xs font-medium">
                    Atelier Kpohia
                  </div>
                </div>
              </div>
            </div>

            {/* Sites Proches */}
            <div className='col-span-1'>
              <h3 className="font-semibold text-gray-900 mb-4">Sites touristiques proches</h3>

              <div className="space-y-3">
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg bg-10">
                  <div>
                    <h4 className="font-medium text-gray-900">Marché Dantokpa</h4>
                    <p className="text-sm text-gray-600">Le plus grand marché d'Afrique de l'Ouest</p>
                    <p className='flex items-center gap-2 text-xs text-gray-500'><Footprints size={16}/> 10 min à pied</p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">0.8 km</span>
                </div>
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg bg-10">
                  <div>
                    <h4 className="font-medium text-gray-900">Fondation Zinsou</h4>
                    <p className="text-sm text-gray-600">Musée d'art contemporain africain</p>
                    <p className='flex items-center gap-2 text-xs text-gray-500'><CarFront size={16}/> 5 min en voiture</p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">1.2 km</span>
                </div>
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg bg-10">
                  <div>
                    <h4 className="font-medium text-gray-900">Plage de Fridjrossè</h4>
                    <p className="text-sm text-gray-600">Plage populaire avec restaurants</p>
                    <p className='flex items-center gap-2 text-xs text-gray-500'><Footprints size={16} /> 15 min en zem</p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">3.5 km</span>
                </div>
                <div className="flex items-start justify-between p-3 bg-gray-50 rounded-lg bg-10">
                  <div>
                    <h4 className="font-medium text-gray-900">Cathédrale Notre-Dame</h4>
                    <p className="text-sm text-gray-600">Architecture coloniale remarquable</p>
                    <p className='flex items-center gap-2 text-xs text-gray-500'><Bike size={16} />25 min à pieds</p>
                  </div>
                  <span className="text-sm font-medium text-yellow-600">2.1 km</span>
                </div>
              </div>

              <button className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium">
              Créer un itinéraire combiné
              </button>
            </div>
          </div>
        </section>
        {/* Boutiques Similaires */}
        <section className="mt-12 bg-white rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-8">Boutiques Similaires</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Atelier Terre Rouge */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-red-600 relative">
                <div className="absolute inset-4 bg-black/20 rounded flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-2">🏺</div>
                    <div className="text-sm">Poterie traditionnelle</div>
                  </div>
                </div>
                <Heart className="absolute top-3 right-3 w-5 h-5 text-white" />
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs">
                  Ouvert
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Atelier Terre Rouge</h3>
                <p className="text-sm text-gray-600 mb-2">Poterie traditionnelle et sculpture en terre cuite</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      <Star className="w-3 h-3 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">4.1 (98)</span>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span className="mr-3">📍 Quartier Zongo • 1.5 km</span>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded text-sm">
                  Découvrir
                </button>
              </div>
            </div>

            {/* Maître Sculpteur Hounsou */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-emerald-700 relative">
                <div className="absolute inset-4 bg-black/20 rounded flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-2">🗿</div>
                    <div className="text-sm">Sculpture sur bois</div>
                  </div>
                </div>
                <Heart className="absolute top-3 right-3 w-5 h-5 text-white" />
                <div className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 rounded text-xs">
                  Ouvert
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Maître Sculpteur Hounsou</h3>
                <p className="text-sm text-gray-600 mb-2">Masques traditionnels et sculptures sur bois</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">4.9 (156)</span>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span className="mr-3">📍 Quartier Akpakpa • 2.3 km</span>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm">
                  Découvrir
                </button>
              </div>
            </div>

            {/* Bijoux Ancestraux Soglo */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-yellow-400 to-orange-500 relative">
                <div className="absolute inset-4 bg-black/20 rounded flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-2xl mb-2">💍</div>
                    <div className="text-sm">Bijoux traditionnels</div>
                  </div>
                </div>
                <Heart className="absolute top-3 right-3 w-5 h-5 text-white" />
                <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded text-xs">
                  Ouvert
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Bijoux Ancestraux Soglo</h3>
                <p className="text-sm text-gray-600 mb-2">Bijoux traditionnels en or et pierres précieuses</p>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      <Star className="w-3 h-3 text-gray-300" />
                    </div>
                    <span className="text-xs text-gray-500">4.2 (203)</span>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 mb-3">
                  <span className="mr-3">📍 Centre-ville • 0.8 km</span>
                </div>
                <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded text-sm">
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Patrimoine Culturel Béninois */}
        <section className="mt-12 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Patrimoine Culturel Béninois</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Découvrez la richesse des traditions artisanales du Bénin à travers nos boutiques
              partenaires
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {/* Textile Traditionnel */}
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧵</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Textile Traditionnel</h3>
              <p className="text-sm text-gray-600 mb-3">
                Techniques ancestrales transmises
                de génération en génération
              </p>
              <div className="text-2xl font-bold text-yellow-600 mb-1">23+</div>
              <div className="text-xs text-gray-500">Ateliers</div>
            </div>

            {/* Sculpture & Masques */}
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎭</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sculpture & Masques</h3>
              <p className="text-sm text-gray-600 mb-3">
                Art rituel et décoratif des
                peuples du Bénin
              </p>
              <div className="text-2xl font-bold text-red-600 mb-1">18+</div>
              <div className="text-xs text-gray-500">Artistes</div>
            </div>

            {/* Poterie Artisanale */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏺</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Poterie Artisanale</h3>
              <p className="text-sm text-gray-600 mb-3">
                Céramiques précises et décorative
                inspirées de la terre locale
              </p>
              <div className="text-2xl font-bold text-green-600 mb-1">12+</div>
              <div className="text-xs text-gray-500">Potiers</div>
            </div>

            {/* Bijouterie Locale */}
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bijouterie Locale</h3>
              <p className="text-sm text-gray-600 mb-3">
                Ornements traditionnels en métaux
                précieux et pierres locales
              </p>
              <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
              <div className="text-xs text-gray-500">Bijoutiers</div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium">
              🎨 Explorer tout l'artisanat béninois
            </button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Créez votre itinéraire culturel personnalisé</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Combinez la visite de sites touristiques avec la découverte d'ateliers d'artisanaux
            authentiques. Une expérience unique vous attend au Bénin !
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center">
              <span className="mr-2">🗓️</span>
              Planifier une visite
            </button>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center">
              <Phone className="w-4 h-4 mr-2" />
              Conseils en guide
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Guides locaux certifiés
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Expériences authentiques
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              Soutien aux artisans locaux
            </span>
          </div>
        </section>
      </div>
      </div>
    </div>
  )
}

export default DetailsShop