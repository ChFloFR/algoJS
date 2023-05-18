function getVowelsNumber(txt) {
  function getVowelsNumber(txt) {
    //  /g pour ne pas s'arrêter à la première occurence et i pour l'insensibilité à la casse
    const vowels = txt.match(/[aeiouy]/gi);

    if (vowels) {
      return vowels.length;
    } else {
      return 0;
    }
  }
}

const getVowelsNumber = (txt) =>
  (txt.matchvowels = txt.match(/[aeiouy]/gi)
    ? txt.match(/[aeiouy]/gi).length
    : 0);

/* ÉNONCÉ 📚 */

/* Créez un programme qui retourne le nombre de voyelles dans une chaîne de caractères. */

/* Tests à passer 🧪 */

console.log(getVowelsNumber("jdhqgdqsghdakzejamazemlqksd")); // 5
console.log(getVowelsNumber("Lorem ipsum dolor sit amet consectetur.")); // 13
console.log(getVowelsNumber("L’imagination gouverne le monde.")); // 13
console.log(getVowelsNumber("zzzZZZzz")); // 0
