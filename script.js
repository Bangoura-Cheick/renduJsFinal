fetch("https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json")
    .then((response) => response.json()) // transforme la réponse en JSON
    .then((data) => {
      console.log(data);
      console.log(data.nomCommercial);
    
     // Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
     // créer les élements =>
        let h1 = document.getElementById("h1");
        h1.textContent = data.nomCommercial;
        let afficher= document.getElementById("afficher");
        let textAccroche= document.createElement("p");
        let textButton= document.createElement("button");
        let div= document.createElement('div'),
     //Mettre les elements crées dans la div
       afficher.appenChild(div);
        
     //intégrer dans un parent
        divMere.appenChild('textAccroche');
        divMere.appendChild('textButton');
        divMere.appendChild('promessesClients');

    });

