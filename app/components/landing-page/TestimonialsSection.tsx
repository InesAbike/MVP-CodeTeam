import { Marquee } from "./Marquee";
import Image from "next/image";

interface TestimonialCardProps {
  text: string;
  userName: string;
  userHandle: string;
  userImage: string;
}

const testimonials = [
  {
    id: 1,
    text: "La carte interactive a rendu la découverte si facile ! J'ai trouvé des ateliers d'artisans cachés à proximité des principaux sites touristiques. Les sculptures en bronze de Cotonou sont extraordinaires !",
    userName: "Marie Dubois",
    userHandle: "@marie_travels",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 2,
    text: "Plateforme incroyable ! Les informations détaillées sur chaque artisan et leurs spécialités m'ont permis de trouver exactement ce que je cherchais. L'expérience du Festival Vaudou était inoubliable.",
    userName: "Samuel Kofi",
    userHandle: "@sam_explorer",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 3,
    text: "Grâce à cette plateforme, j'ai découvert le patrimoine royal d'Abomey et les tisserands traditionnels. Une immersion culturelle authentique que je recommande vivement !",
    userName: "Aïcha Bello",
    userHandle: "@aicha_culture",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 4,
    text: "Les recommandations personnalisées sont parfaites ! J'ai visité des marchés locaux et acheté des tissus Kente authentiques. L'interface est intuitive et les infos très utiles.",
    userName: "Pierre Mensah",
    userHandle: "@pierre_artisan",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 5,
    text: "J'adore pouvoir planifier mes visites à l'avance. Les horaires d'ouverture des ateliers et les événements culturels sont toujours à jour. Un must pour tout visiteur du Bénin !",
    userName: "Fatou Diarra",
    userHandle: "@fatou_voyage",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 6,
    text: "Cette app m'a fait découvrir des trésors cachés ! Les potiers de Sè et leurs créations uniques, les bijoux en argent de Grand-Popo... Une richesse artistique incroyable.",
    userName: "Laurent Kossou",
    userHandle: "@laurent_art",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 7,
    text: "Simple, efficace et culturellement enrichissant. Les circuits proposés allient parfaitement tourisme et découverte artisanale. Bravo pour cette initiative !",
    userName: "Élise Togbé",
    userHandle: "@elise_benin",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 8,
    text: "La géolocalisation des ateliers est un plus énorme. J'ai pu visiter 5 artisans différents en une journée à Porto-Novo. Chaque rencontre était authentique et mémorable.",
    userName: "Yves Akplogan",
    userHandle: "@yves_discover",
    userImage: "/images/reviewer.svg",
  },
  {
    id: 9,
    text: "En tant que guide touristique, cette plateforme m'aide énormément à proposer des expériences uniques à mes clients. Les fiches artisans sont très complètes !",
    userName: "Rosine Gbèdo",
    userHandle: "@rosine_guide",
    userImage: "/images/reviewer.svg",
  },
];

// Répartition équilibrée des témoignages en 4 colonnes
const distributeTestimonials = () => {
  const columns: TestimonialCardProps[][] = [[], [], [], []];
  testimonials.forEach((testimonial: TestimonialCardProps, index: number) => {
    return columns[index % 4].push(testimonial);
  });
  return columns;
};

const [firstRow, secondRow, thirdRow, fourthRow] = distributeTestimonials();

const TestimonialCard = ({
  text,
  userName,
  userHandle,
  userImage,
}: TestimonialCardProps) => {
  return (
    <div className="bg-black/20 w-72 rounded-xl p-4 text-white">
      <p className="text-sm leading-relaxed mb-4">{text}</p>

      <div className="flex items-center">
        {userImage ? (
          <div className="w-8 h-8 rounded-full overflow-hidden mr-3">
            <Image
              src={userImage}
              alt={userName}
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="w-8 h-8 bg-gray-600 rounded-full mr-3"></div>
        )}

        <div>
          <div className="text-sm font-medium">{userName}</div>
          <div className="text-xs text-gray-400">{userHandle}</div>
        </div>
      </div>
    </div>
  );
};

export function TestimonialsSection() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Ce que disent les touristes
        </h2>
        <p className="text-gray-500 mt-2">
          Expériences réelles de visiteurs ayant exploré les trésors culturels
          de Bénin
        </p>
      </div>

      <div className="relative bg-black/80 flex h-[500px] max-w-7xl mx-auto flex-row items-center justify-center overflow-hidden rounded-2xl p-4">
        <Marquee pauseOnHover vertical className="[--duration:25s]" repeat={3}>
          {firstRow.map((testimonial: TestimonialCardProps, index: number) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              userName={testimonial.userName}
              userHandle={testimonial.userHandle}
              userImage={testimonial.userImage}
            />
          ))}
        </Marquee>

        <Marquee
          reverse
          pauseOnHover
          vertical
          className="[--duration:30s]"
          repeat={3}
        >
          {secondRow.map((testimonial: TestimonialCardProps, index: number) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              userName={testimonial.userName}
              userHandle={testimonial.userHandle}
              userImage={testimonial.userImage}
            />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical className="[--duration:35s]" repeat={3}>
          {thirdRow.map((testimonial: TestimonialCardProps, index: number) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              userName={testimonial.userName}
              userHandle={testimonial.userHandle}
              userImage={testimonial.userImage}
            />
          ))}
        </Marquee>

        <Marquee
          pauseOnHover
          reverse
          vertical
          className="[--duration:28s]"
          repeat={3}
        >
          {fourthRow.map((testimonial: TestimonialCardProps, index: number) => (
            <TestimonialCard
              key={index}
              text={testimonial.text}
              userName={testimonial.userName}
              userHandle={testimonial.userHandle}
              userImage={testimonial.userImage}
            />
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-t from-transparent to-black"></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-b from-transparent to-black"></div>
      </div>
    </div>
  );
}
