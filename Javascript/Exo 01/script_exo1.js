/*console.log("texte")
let nbr1 = 10;
let nbr2 = 5;
let temporaire = nbr1; //10
nbr1 = nbr2; //5
nbr2 = temporaire;
console.log (nbr1,nbr2)

let texte = "Bonjour ";
let utilisateur = "Mathieu";
//concatenation version double ""
console.log("la solution est : "+texte+" "+utilisateur+" "+(nbr1+nbr2));
//version simple ''
console.log('la solution est : '+texte+' '+utilisateur+' '+(nbr1+nbr2));
//version template string
console.log(`La solution est : ${texte} ${utilisateur} ${nbr1+nbr2}`);

let nbr4=10

if (nbr4>=0){
    console.log("Le nombre est positif")
}else {
    console.log("Le nombre est negatif")
}

let nbr5=10

if ((nbr4+nbr5)>=0){
    console.log("Le nombre est positif")
}else {
    console.log("Le nombre est negatif")
}


let nbr6 = parseInt(prompt("Saisir le nombre "));
let nbr7 = parseInt(prompt("Saisir le nombre "));


if ((nbr6>0 && nbr7>0)||(nbr6<0 && nbr7<0)) {
    console.log("Le nombre est positif");
}else if(nbr6<0 || nbr7<0) {
    console.log("Le nombre est negatif");
}else if(nbr6==0 || nbr7==0){
    console.log("Le nombre est 0");
}


let age = prompt("Saisir votre age exemple:6");
switch(true){
    case(age==6)
        :console.log ("Poussin");
        break;
    case(age==7)
        :console.log ("Poussin");
        break;
    case(age==8)
        :console.log ("Pupille");
        break;
    case(age==9)
        :console.log ("Pupille");
        break;
    case(age==10)
        :console.log ("Minime");
        break;
    case(age==11)
        :console.log ("Minime");
        break;
    case(age==12)
        :console.log ("Cadet");
        break;
}

let mots = [];
mots[0] = prompt('Saisir un mot');
mots[1] = prompt('Saisir un mot');
mots[2] = prompt('Saisir un mot');

let tabTri = [];
tabTri[0]= mots[0];
tabTri[1]= mots[1];
tabTri[2]= mots[2];

tabTri.sort();
if(tabTri[0]==mots[0]&&tabTri[1]==mots[1]&&tabTri[2]==mots[2]){
    console.log('Les mots sont dans l\'ordre alphabetique');
}
else {
    console.log('Les mots ne sont pas tries dans l\'ordre');
}


let nbr1=prompt("Saisir nombre 1")
let nbr2=prompt("Saisir nombre 2")
let nbr3=prompt("Saisir nombre 3")

if(nbr1<=nbr2 && nbr2<=nbr3){
    console.log ("le nombres dans l\'ordre croissant sont \:")
}else{
    console.log("les nombre ne sont pas tries dans l'odre croissant")
    }

let tableauproduits =[]

    let nom=prompt("Entrer le nom du produit")
    let prixHT=prompt("Entrer le prix HT du produit")
    let quantite=prompt("Enter la quantite du produit")
    let prixTTC = prixHT*1.20*quantite

    tableauproduits.push (nom,prixHT,quantite,prixTTC)

    console.log (prixTTC);
    console.table(tableauproduits);
    console.log (nom);
    console.log (tableauproduits[1])
    console.log("Prix TTC du dernier produit :" + tableauproduits [3])


let user = [];
for(let i = 0;i< 2; i++){
    user.push({"nom":prompt("Entrez le nom de l'utilisateur"), "prenom":prompt("Entrez le prenom de l'utilisateur"), "age":prompt("Entrez l'age de l'utilisateur"),"tel":prompt("Entrez le numero de telephone de l'utilisateur")})
}
console.log(user);
-
let utilisateurleplusjeune = user [0].age;
let nomutilisateurleplusjeune = user [0].nom;
for(let i= 0; i< user.length ; i++){
    if (user[i].age < utilisateurleplusjeune.age) {
        utilisateurleplusjeune=user[i].age;
        nomutilisateurleplusjeune=user[i].nom;
    }
}
console.log("L'utilisateur le plus jeune est :"+ nomutilisateurleplusjeune)


let students = [];
for(let i = 0; i < 3; i++){
    let student = {
        'prenom': prompt("Saisir le nom de l'éléve : "+(i+1)),
        'note': parseInt (prompt("Saisir la note de l'élève : "+(i+1)))
    }
    students.push(student);
}

let totalNote = 0;{
for(let i = 0; i<students.length; i++){
    totalNote += students[i].note;
}
}
console.log (totalNote)
let moyenne=totalNote/students.length
console.log  ("La moyenne générale des élèves est: "+ moyenne);


//quantité de chocolatine
let nbrChoco = parseInt(prompt("Saisir le nombre de chocolatine"));
//prix total
let total = 0;
//prix des chocolatines
let prixChoco = [1.4, 1.3, 1.20];
//tester le prix pour la quantité comprise entre 1 et 10
if(nbrChoco > 0 && nbrChoco <= 10){
    total = nbrChoco * prixChoco[0];
}
//tester le prix pour une quantité comprise entre 1 et 20
else if(nbrChoco >= 11 && nbrChoco <= 20){
    total = (10*prixChoco[0])+((nbrChoco-10)*prixChoco[1]);
}
//tester le prix pour une quantité supérieure 
else{
    total = (10*prixChoco[0])+(10*prixChoco[1])+((nbrChoco-20)*prixChoco[2]);
}
//afficher dans la console
console.log("Le prix total est égal à : "+total);
//afficher dans un popup
alert("Le prix total est égal à : "+total);



Pour son nouveau spectacle, un mentaliste a besoin d'un programme pour s'exercer à deviner un nombre entre 1 et 100.
Pour réussir son tour il doit deviner le nombre en moins de 10 tentatives.
A chaque tour il va demander si le nombre qu’il énonce est plus petit ou plus grand que le nombre choisi.
-Si il réussit à découvrir le nombre en moins de 10 essais 
            -> son entrainement acharné a payé, 
-Sinon 
           -> il est un mauvais mentaliste et il va devoir changer de métier.
Il souhaite savoir en cas de réussite (en moins de 10 essais) 
           -> le nombre d'essai qu'il a effectué pour trouver le nombre. 


Exo 12 boucle mentaliste :
//nombre random à trouver
let nbrATrouve = numberRandom(100);
console.log(nbrATrouve);
//nombre de tour de jeu
let tour = 1;
//première tentative
let nbrTrouve = prompt("Saisir le nombre à trouver");
//boucle pour le jeu
while(nbrATrouve != nbrTrouve && tour < 10){
    //condition si le nombre est trop grand
    if(nbrTrouve > nbrATrouve){
        alert("Saisir un nombre plus petit");
    }
    //condition si le nombre est trop petit
    if(nbrTrouve < nbrATrouve){
        alert("Saisir un nombre plus Grand");
    }
    //incrémenter le tour
    tour++;
    //redemander la saisie d'un nombre
    nbrTrouve = prompt("Saisir le nombre à trouver");
}
//condition de victoire
if(nbrATrouve==nbrTrouve){
    alert("Bravo tu as gagné en : "+tour+" tours");
}
//condition de défaite
if(tour > 9){
    alert("Vous avez perdu vous pouvez changer de métier !");
}
//fonction qui génére un nombre random
function numberRandom(nbr){
    return Math.floor((Math.random() * nbr) + 1);
}




Exercice 13 Boucles :
Nous avons un jeu de dés que nous souhaitons automatiser.
Les règles de ce jeu de dès sont les suivantes :
-Il y à 2 participants : la banque et le joueur.
-Le jeu dure 5 tours.
-A chaque tour :
    --La banque lance un dès de 6 faces (score 1 à 6).
    --Le joueur lance un dès de 6 faces (score 1 à 6).
    --Si le joueur fait plus que la banque, ajouter 1 pts au score du joueur,
    --Si le joueur fait le même lancé que la banque, ajouter 2 pts au score du joueur.
    --Si le joueur fait moins que la banque, ajouter 1 pts au score de la banque.
-A la fin des 5 tours le gagnant est celui qui a le score le plus élevé.
-> Afficher le gagnant et son score (nbr de pts).
*/ 

