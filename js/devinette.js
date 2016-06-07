/* 
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme
var proposition;
var tour = 0;
var historique = "";
var reste = 6;
var motTentative = "";
while (tour < 6) {
    if (reste > 1) {
        motTentative = " tentatives";
    } else {
        motTentative = " tentative";
    }
    proposition = Number(prompt("saisir un chiffre entre 1 et 100" + historique + ", il vous reste " + reste + motTentative));
    if ((proposition >= 1) && (proposition <= 100)) {
        if (proposition > solution) {
            console.log(proposition + " est trop grand");
            if (historique === "") {
                historique = " vous avez saisie " + String(proposition);
            } else {
                historique = historique + " - "  + String(proposition);
            }
        } else if (proposition < solution) {
            console.log(proposition + " est trop petit");
            if (historique === "") {
                historique = " vous avez saisie " +  String(proposition);
            } else {
                historique = historique + " - "  + String(proposition);
            }
        } else {
            console.log("Vous avez gagné la solution était " + solution);
            break;
        }
        tour++;
        reste--;
    } else {
        console.log("Erreur vous devez choisir entre 1 et 100");

    }
}
if (tour === 6) {
    console.log("Perdu... La solution était " + solution + historique);
}