import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-white min-h-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 h-full py-12 px-6">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-lg font-semibold mb-4">Bénin Découverte</h3>
            <p className="text-sm flex-1">
              Votre guide pour découvrir les merveilles touristiques et
              artisanales du Bénin.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
          <ul className="text-sm space-y-5">
            <li>Accueil</li>
            <li>Carte interactive</li>
            <li>Rechercher</li>
            <li>Itinéraires</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold mb-4">Informations</h3>
          <ul className="text-sm space-y-5">
            <li>À propos</li>
            <li>Contact</li>
            <li>Confidentialité</li>
            <li>Conditions d'utilisation</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <span
                className="w-8 h-8 inline-block"
                style={{
                  mask: "url(/icons/facebook.svg) no-repeat center",
                  WebkitMask: "url(/icons/facebook.svg) no-repeat center",
                  backgroundColor: "#fff",
                }}
              ></span>
            </a>
            <a href="#" aria-label="Twitter">
              <span
                className="w-8 h-8 inline-block"
                style={{
                  mask: "url(/icons/twitter.svg) no-repeat center",
                  WebkitMask: "url(/icons/twitter.svg) no-repeat center",
                  backgroundColor: "#fff",
                }}
              ></span>
            </a>
            <a href="#" aria-label="Instagram">
              <span
                className="w-8 h-8 inline-block"
                style={{
                  mask: "url(/icons/instagram.svg) no-repeat center",
                  WebkitMask: "url(/icons/instagram.svg) no-repeat center",
                  backgroundColor: "#fff",
                }}
              ></span>
            </a>
            <a href="#" aria-label="Email">
              <span
                className="w-8 h-8 inline-block"
                style={{
                  mask: "url(/icons/enveloppe.svg) no-repeat center",
                  WebkitMask: "url(/icons/enveloppe.svg) no-repeat center",
                  backgroundColor: "#fff",
                }}
              ></span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-end border-t border-white/20 p-5">
        <div className="text-white text-sm">
          {" "}
          &copy; {currentYear} Bénin Découverte. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
