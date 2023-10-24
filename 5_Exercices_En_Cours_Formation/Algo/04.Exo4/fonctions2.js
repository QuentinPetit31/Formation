// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(n1, n2) {
    if(n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log("Tests de f7");
console.log(f7(10, 2));
console.log(f7(10, 20));




function f8(n1, n2, n3) {
    if(n1 > n2) {
        if(n1 > n3) {
            return n1;
        } else {
            return n3;
        }
    } else {
        if(n2 > n3) {
            return n2;
        } else {
            return n3;
        }
    }
}

function f8bis(n1, n2, n3) {
    let maxN1N2 = f7(n1,n2);
    return f7(maxN1N2,n3)

}
console.log (f8bis(1,2,3));

/*
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon
*/
function syracuse(nombre) {
    if (nombre % 2 === 0) {
        // Le nombre est pair, retourne la moitié du nombre
        return nombre / 2;
    } else {
        // Le nombre est impair, retourne le triple du nombre + 1
        return nombre * 3 + 1;

    }
    console.log(syracuse(3));

}

/*
Écrire une fonction countDown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/

/*
Écrire une fonction fastCountDown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/

/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

/*
À la main, calculer `euclide(6,10)`.
*/