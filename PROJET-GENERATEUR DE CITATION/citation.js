const citations = ["Exige beaucoup de toi-même et attends peu des autres. Ainsi beaucoup d'ennuis te seront épargnés.",

	"L'enseignement devrait être ainsi: celui qui le recoit le recueille comme un don inestimable mais jamais comme une contrainte pénible.",

    "Agis avec gentillesse, mais n'attends pas de la reconnaissance.", 

	"La seule facon de faire un bon travail est d'aimer ce que vous faites...",
	"La folie, c'est de refaire la même chose et d'attendre un résultat différent.",
	 ];

const auteur = ["Confucius", "Albert Einstein", "Confucuis", "Steve Jobs","Alber Einstein"];
let aleatoire = null;
let hashtag = "citations";


	document.getElementById('generer').addEventListener("click", function() {
		aleatoire = Math.floor(Math.random() * citations.length);
		document.querySelector('.quote').innerHTML = citations[aleatoire];
		document.querySelector('.writer').innerHTML = auteur[aleatoire];
	

	});


function generateur() {


const citations = []
const auteur = []
 
let aleatoire = []
let hashtag = ["citations"];

	document.getElementById('generer').addEventListener("click", function() {
		aleatoire = Math.floor(Math.random() * citations.length);
		document.querySelector('.quote').innerHTML = citations[aleatoire];
		document.querySelector('.writer').innerHTML = auteur[aleatoire];
		
	});
}
	  

document.getElementById('citations').checked =true;
	
document.getElementById('auteur').checked = true;	
	 
//www.bouzid-krita.com

 

  

 
 
 
 
 