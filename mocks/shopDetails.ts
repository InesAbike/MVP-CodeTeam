export const shopDetails = {
    // Informations de base
    id: 1,
    name: "Atelier Kpakpa Textiles",
    category: "Textile Traditionnel",
    rating: 4.8,
    totalReviews: 124,
    location: {
      address: "Quartier Ganhi, Cotonou",
      coordinates: {
        lat: 6.3654,
        lng: 2.4183
      }
    },
    status: "Ouvert maintenant",
    mainImage: "/images/atelier.png",
    
    // Heures d'ouverture
    openingHours: {
      "Lun - Ven": "8h00 - 18h00",
      "Sam": "8h00 - 20h00",
      "Dim": "Fermé"
    },
    
    // Contact
    contact: {
      phone: "+229 97 xx xx xx",
      whatsapp: "+229 97 xx xx xx",
      email: "contact@atelier.bj"
    },
    
    // Description
    about: [
      "L'atelier Apùuya Kpolovi propose depuis trois générations l'art ancestral du tissage béninois, ainsi que la fabrication artisanale d'objets utilitaires et décoratifs créés uniquement avec leurs connaissances ancestrales de textile authentique et les voyageurs en quête d'authenticité.",
      "Nos activités redonnent confiance et techniques en développant nos talents intérieurs pour partage à tous ceux que nous cadeautons aux motifs géométriques tissés inspirés de la culture Fon et Yoruba. Chaque création respects une histoire, notre art répond et reflète le contexte culturel de Bénin.",
      "Vient découvrir notre atelier dans une zone viable guidés et visiter lors avec cette pièces unique qui vous accompagnera longtemps dans vos souvenirs de voyage."
    ],
    
    // Artisan
    artisan: {
      name: "Moïka Kpohia Adjovi",
      title: "Maître Tisseur",
      experience: "depuis 20 ans",
      totalExperience: "25 ans d'expérience",
      avatar: "/images/avatar.png",
      quote: "Mon grand-père m'a transmis l'art du tissage depuis l'époque depuis l'âge. Depuis plus de 30 ans, je perpétue cette tradition familiale avec passion et respect pour nos ancêtres.",
      description: "Expert aux techniques ancestrales du peuple Fon, Moïka Kpohia est reconnu comme l'un des derniers gardiens des motifs traditionnels sacrés. Son savoir-faire exceptionnel et sa créativité moderne créent des œuvres uniques d'exception.",
      certified: true
    },
    
    // Produits phares
    featuredProducts: [
      {
        id: 1,
        name: "Panier Kanté Royal",
        description: "Tissage traditionnel aux motifs géométriques sacrés, idéal pour les cérémonies",
        price: 35000,
        priceEuro: "~53€",
        image: "/images/pagne-kanté.png"
      },
      {
        id: 2,
        name: "Panier Tissé Traditionnel",
        description: "Panier artisanal tissé résistant, parfait pour la décoration et l'usage pratique.",
        price: 12000,
        priceEuro: "+7€",
        image: "/images/pagne-kanté.png"
      },
      {
        id: 3,
        name: "Écharpes Colorées",
        description: "Collection d'écharpes en motifs traditionnels, parfaites pour toutes les occasions créatives.",
        price: 8000,
        priceEuro: "+4€",
        image: "/images/pagne-kanté.png"
      },
      {
        id: 4,
        name: "Tissu Cérémonial Doré",
        description: "Tissu exceptionnel tissé de soie, réservé aux grandes occasions et cérémonies traditionnelles.",
        price: 55000,
        priceEuro: "+32€",
        image: "/images/pagne-kanté.png"
      }
    ],
    
    // Ateliers proposés
    workshops: [
      {
        id: 1,
        name: "Atelier Découverte",
        level: "Débutant",
        duration: "2 heures",
        price: 15000,
        features: [
          "Introduction aux techniques de base",
          "Création d'un petit objet souvenir",
          "Atelier de rythmique des motifs"
        ],
        color: "yellow",
        icon: "Hand"
      },
      {
        id: 2,
        name: "Atelier Maître",
        level: "Avancé",
        duration: "Niveau complet",
        price: 45000,
        features: [
          "Techniques avancées de tissage",
          "Création d'un pagne personnel",
          "Symboles traditionnels"
        ],
        color: "red",
        icon: "GraduationCap"
      }
    ],
    
    // Avis clients
    reviews: [
      {
        id: 1,
        name: "Marie Laurent",
        country: "France",
        timeAgo: "Il y a 3 jours",
        rating: 5,
        avatar: "/images/avatar.png",
        comment: "Une expérience absolument magique ! Moïka Kpohia nous a accueillis avec une chaleur exceptionnelle. Les enseignements sur les techniques et l'histoire des motifs étaient passionnants. J'ai reparti un magnifique pagne et surtout une belle expérience humaine.",
        helpful: 12
      },
      {
        id: 2,
        name: "James Wilson",
        country: "USA",
        timeAgo: "Il y a 1 mois",
        rating: 5,
        avatar: "/images/avatar.png",
        comment: "Outstanding craftsmanship and authentic cultural experience. The workshop was incredibly informative and the quality of the textiles is exceptional. Highly recommend for anyone interested in traditional African art.",
        helpful: 8
      },
      {
        id: 3,
        name: "Aminata Traoré",
        country: "Côte d'Ivoire",
        timeAgo: "Il y a 2 semaines",
        rating: 4,
        avatar: "/images/avatar.png",
        comment: "En tant qu'Africaine, j'ai été touchée de voir la préservation de nos traditions. Les motifs sont authentiques et la qualité irréprochable. Un lieu à absolument visiter pour comprendre la richesse de notre patrimoine.",
        helpful: 15
      }
    ],
    
    // Boutiques similaires
    similarShops: [
      {
        id: 2,
        name: "Artisanat Béninois",
        location: "Cotonou",
        categories: ["sculptures", "textiles", "bijoux"],
        imageSrc: "/images/artisanal-shop-img/weaver-shop.svg",
      },
      {
        id: 3,
        name: "Atelier Traditionnel",
        location: "Ouidah",
        categories: ["poterie", "vannerie", "tissage"],
        imageSrc: "/images/artisanal-shop-img/weaver-shop.svg",
      },
      {
        id: 4,
        name: "Créations Locales",
        location: "Abomey",
        categories: ["bronze", "cuir", "tissus"],
        imageSrc: "/images/artisanal-shop-img/weaver-shop.svg",
      }
    ]
  };
  