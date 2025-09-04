/**
 * Utilitaires pour la manipulation sécurisée des chaînes de caractères
 */

/**
 * Fonction utilitaire pour convertir une valeur en string lowercase de manière sécurisée
 * @param value - Valeur à convertir (peut être null, undefined, string, number, object)
 * @returns String en lowercase ou string vide si la valeur n'est pas convertible
 *
 * Exemples d'utilisation :
 * safeLowerCase("Hello World") // "hello world"
 * safeLowerCase(null) // ""
 * safeLowerCase(123) // "123"
 * safeLowerCase({}) // ""
 */
export function safeLowerCase(value: any): string {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value.toLowerCase();
  }

  if (typeof value === "number") {
    return value.toString().toLowerCase();
  }

  // Pour les objets ou autres types, on retourne une string vide
  return "";
}

/**
 * Fonction utilitaire pour vérifier si une valeur contient une sous-chaîne de manière sécurisée
 * @param value - Valeur à vérifier
 * @param searchTerm - Terme à rechercher
 * @returns true si la valeur contient le terme, false sinon
 */
export function safeIncludes(value: any, searchTerm: string): boolean {
  const valueStr = safeLowerCase(value);
  const termStr = safeLowerCase(searchTerm);
  return valueStr.includes(termStr);
}

/**
 * Fonction utilitaire pour obtenir une valeur par défaut si la valeur est vide/null
 * @param value - Valeur à vérifier
 * @param defaultValue - Valeur par défaut
 * @returns La valeur originale ou la valeur par défaut
 */
export function safeValue(value: any, defaultValue: string = ""): string {
  if (value === null || value === undefined || value === "") {
    return defaultValue;
  }
  return typeof value === "string" ? value : String(value);
}