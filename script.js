

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
    //créer les élements Html en Js 
    let card = document.createElement("div");
    let imagePlats= document.createElement("img");
    let titrePlat= document.createElement("h3");
    let paragraphePlat= document.createElement("p");
   // mettre les valeurs dans les élements crées
    imagePlats.src= valeurs["image-url"];
    titrePlat.textContent= valeurs.nom;
    paragraphePlat.textContent= valeurs.desc;
    // integrer les élements dans leur parents
    card.appendChild(imagePlats);
    card.appendChild(titrePlat);
    card.appendChild(paragraphePlat);
    sectionPlats.appendChild(card);
    // Affiche ces informations dans une section dédiée, avec une carte pour chaque activité si les données contiennent un lien vers une image
// Niveau 4 – Afficher les témoignages
// Pour chaque témoignage dans les données JSON
   let temoignages = data.temoignages
   console.log(temoignages);
   temoignages.forEach(valeur => {
   let sectionTemoignages=document.getElementById("temoignages");
// créer dynamiquement une div contenant le prénom, type d'experiences et le commentaire.
   let attest = document.createElement("div");
   let prenom = document.createElement("h3");
   let typeDexperience = document.createElement("h4");
   let commentaire = document.createElement("p");
   let note = document.createElement("h4");
// mettre les valeurs dans les élements crées
     prenom.textContent=valeur.prenom;
     typeDexperience.textContent=valeur.typeDexperience;
     commentaire.textContent=valeur.commentaire;
     note.textContent=valeur.note + "/5";
     
     
// integrer les elements dans leur parent
    attest.appendChild(prenom);
    attest.appendChild(typeDexperience);
    attest.appendChild(commentaire);
    attest.appendChild(note);
    sectionTemoignages.appendChild(attest);
});
//  Niveau 5 (optionnel) – Ajouter une carte interactive
// Ajoute une carte interactive à la page à l’aide de la bibliothèque Leaflet.js.
// Utilise les coordonnées fournies dans les données JSON pour centrer la carte et y ajouter un fond de carte interactif
     var map = L.map('map').setView([45.7379328, 4.8850145], 13);
  
     L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    var marker = L.marker([45.7379328, 4.8850145 ]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am located here.").openPopup();
   
   



// Ajoute ces témoignages sous les activités dans la page
  });


  })
  .catch(error => {
    // ici on gère les erreurs
    console.error('Erreur lors du fetch :', error);
  });


