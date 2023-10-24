function calculer(){
    //récupération des éléments HTML
    const resultat = document.querySelector('#resultat');
    //récupération du nombre de chocolatines à facturer
    const quantite = document.querySelector('#quantite').value;
    //prix total
    let total = 0;
    //prix des chocolatines
    let prixChoco = [1.4, 1.3, 1.20];
    //test si quantite n'est pas un nombre
    if(isNaN(quantite)){
        resultat.textContent = "Veuillez saisir un nombre";
    }
    //test si le champ est vide (bonus)
    else if(quantite == ""){
        resultat.textContent = "Veuillez remplir le champ quantité avec un nombre";
    }
    //test sinon faire le calcul
    else{
        //tester le prix pour la quantité comprise entre 1 et 10
        if(quantite > 0 && quantite <= 10){
            total = nbrChoco * prixChoco[0];
        }
        //tester le prix pour une quantité comprise entre 1 et 20
        else if(quantite >= 11 && quantite <= 20){
            total = (10*prixChoco[0])+((quantite-10)*prixChoco[1]);
        }
        //tester le prix pour une quantité supérieure 
        else{
            total = (10*prixChoco[0])+(10*prixChoco[1])+((quantite-20)*prixChoco[2]);
        }
        //afficher dans le paragraphe #resultat de la page HTML le prix total à payer
        resultat.textContent = "Le prix total est égal à : "+total.toFixed(2)+" €";
    }
}