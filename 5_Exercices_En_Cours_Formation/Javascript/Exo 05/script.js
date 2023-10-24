function calculer(){
const quantite =parseInt(document.querySelector('#quantite').value);
const prixHt =parseFloat(document.querySelector('#prixHt').value);
let resultat=document.querySelector ('#resultat');
const total=prixHt*1.20*quantite
resultat.textContent=`texte:${total}`;
}

/*Transformer l'exercice 8 pour que le programme utilise des éléments HTML plutôt que des prompts et console.log.
Partie HTML 
Ajouter  les éléments suivants :
-un titre h1 -> calculer le prix TTC,
-un input de (type text, id = prixHt),
-un input de (type text, id = quantite),
-un bouton (onclick =calculer()),
-un paragraphe (id= resultat),
Partie JS :
Créer une fonction calculer :
-récupérer les valeurs des 2 inputs,
-refaire le calcul comme dans l'exercice 8 (correction),
-Afficher le résultat dans le paragraphe (id= resultat) */


/*let produits = [];
for(let i = 0;i< 2; i++){
    let produit = {
        'nom': prompt("Saisir le nom du produit"),
        'prixHt': parseFloat(prompt("Saisir le prix HT du produit")),
        'quantite': parseInt(prompt("Saisir la quantité du produit"))
    };
    produit.prixTtc = produit.prixHt*produit.quantite*1.2;
    produits.push(produit);
}
const quantite = parseInt(document.querySelector('#quantite').value);
let resultat = document.querySelector('#resultat');
//prix total
let total = 0;
produit.prixTtc = produit.prixHt*produit.quantite*1.2;
tab.push(prixHt*quantite*1.20);
produits.push(produit);
const msg = "Le prix total est égal à : ";
//prix des chocolatines*/