

 //Niveau 1 – Récupérer les données de l'API
  fetch('https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/restaurant-bresilien.json')
  .then(response => response.json()) // transforme la réponse en JSON
  .then(data => {
    console.log(data);
    
    // ici on utilise les données reçues

    // niveau2  Affichage du contenu principal
// Niveau 2 – Affichage du contenu principal
// Dans la fonction, crée un élément div pour afficher le nom de l'entreprise, sa phrase d'accroche et un bouton d'appel à l'action.
// Affiche ces informations dynamiquement avec les données récupérées depuis l'API.
//recuperer les elements html par leurs identifiants


let head = document.getElementById("head");

// créer les elements en html
      let titre= document.createElement('h1');
      let soustitre = document.createElement('h2');
      let button = document.createElement('button');
// afficher du contenu de texte des elements crées
        titre.textContent = data.nomCommercial;
        soustitre.textContent = data.texteAccroche	;
        button.textContent = data.texteBouton;
// integrer les elements dans leur parents
head.appendChild(titre);
head.appendChild(soustitre);
head.appendChild(button);

let PhrasePromesses = data.promessesClient;

PhrasePromesses.forEach(phrases => {
  let promesses = document.getElementById("promesses");
  let paragraphe = document.createElement("p");
  paragraphe.textContent= phrases;
  promesses.appendChild(paragraphe);
});
//   Niveau 3 – Afficher les activités
// Pour chaque activité dans les données JSON, crée dynamiquement une div contenant un titre, une description et une image  
 let plats= data.plats;
 console.log(plats);
  plats.forEach(valeurs => {

    let sectionPlats=document.getElementById("plats");
    // Appeler les élements présent dans le Html 
    let card = document.createElement("div");
    let imagePlats= document.createElement("img");
    let titrePlat= document.createElement("h3");
    let paragraphePlat= document.createElement("p");
   // mettre les valeurs des élements crées
    imagePlats.src= valeurs["image-url"];
    titrePlat.textContent= valeurs.nom;
    paragraphePlat.textContent= valeurs.desc;
    // integrer les élements dans leur parents
    card.appendChild(imagePlats);
    card.appendChild(titrePlat);
    card.appendChild(paragraphePlat);
    sectionPlats.appendChild(card);
    // Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image

  });


  })
  .catch(error => {
    // ici on gère les erreurs
    console.error('Erreur lors du fetch :', error);
  });


