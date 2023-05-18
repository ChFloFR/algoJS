  function abreviation(str){
    const splitNoms = str.slice(" ");

    return `${splitNoms[0]} ${splitNoms[1].chartAt(0)}.`
    // console.log(splitNoms);
  }
// ATTENTION JE N AI PAS COMPRIS - A REVOIR ET REFAIRE
// et en plus ça ne marche pas -_-

/* ÉNONCÉ 📚 */

/* Créez un algorithme qui retourne l'abréviation d'un nom et prénom. */

/* Tests à passer 🧪 */

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("Alfred Hitchcock")); // Alfred H.
