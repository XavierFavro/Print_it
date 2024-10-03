// Définition du tableau de slides, qui contient les informations sur les images et les taglines
const slides = [
	{
	  "image": "./assets/images/slideshow/slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "./assets/images/slideshow/slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  // Sélection des éléments du DOM qui seront utilisés dans le code
  const arrow_leftButton = document.querySelector('.arrow_left'); // Flèche gauche
  const arrow_rightButton = document.querySelector('.arrow_right'); // Flèche droite
  const images = document.querySelector('#banner'); // Élément qui affichera les images
  const dots = document.querySelectorAll('.dot'); // Éléments qui afficheront les points de navigation
  
  // Définition de l'index de la slide actuelle
  let currentIndex = 0;
  
  // Événement pour la flèche gauche : décrémente l'index de la slide actuelle et met à jour l'affichage
  arrow_leftButton.addEventListener('click', () => {
	currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1; // Décrémente l'index de la slide actuelle
	updateBanner(); // Met à jour l'affichage
  });
  
  // Événement pour la flèche droite : incrémente l'index de la slide actuelle et met à jour l'affichage
  arrow_rightButton.addEventListener('click', () => {
	currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1; // Incrémente l'index de la slide actuelle
	updateBanner(); // Met à jour l'affichage
  });
  
  // Fonction qui met à jour l'affichage du carrousel
  function updateBanner() {
	// Récupération de l'image actuelle
	const currentImage = slides[currentIndex].image; // Récupère l'image actuelle
	const currentTagLine = slides[currentIndex].tagLine; // Récupère la tagline actuelle
	
	// Mise à jour de l'image du carrousel
	images.style.backgroundImage = `url(${currentImage})`; // Met à jour l'image du carrousel
	
	// Mise à jour du texte du carrousel
	const tagLineElement = document.querySelector('#banner p'); // Sélectionne l'élément qui affichera la tagline
	tagLineElement.innerHTML = currentTagLine; // Met à jour la tagline
	
	// Mise à jour des points de navigation
	dots.forEach((dot, index) => {
	  dot.classList.remove('dot_selected'); // Retire la classe css 'dot_selected' de tous les points
	  if (index === currentIndex) {
		dot.classList.add('dot_selected'); // Ajoute la classe css 'dot_selected' au point actuel
	  }
	});
  }
  
  // Appel initial de la fonction updateBanner pour afficher la première slide
  updateBanner();
