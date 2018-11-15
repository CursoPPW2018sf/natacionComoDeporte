// JavaScript Document
function frases(){
	var frases = [];
	var frase;
	frase = "No se le puede poner limite a algo, cuanto más sueñes más lejos llegaras. Michael Phelps";
	frases.push (frase);
	frase = "Aprende de tus errores para poder disfrutar al máximo de cada uno de tus triunfos. Mireia Belmonte";
	frases.push (frase);
	frase ="El agua es tu amiga… no tienes que luchar contra ella, simplemente comparte su espíritu y te ayudará a moverte. Alexander Popov";
	frases.push (frase);
	frase="De entre todos los participantes en estos Juegos solo entre los nadadores veo verdaderos atletas. Somos, quizá, los semidioses de la humanidad. Mark Spitz";
	frases.push (frase);
	frase="Para tener éxito, primero tenemos que creer que podemos tenerlo. Mireia Belmonte";
	frases.push(frase);
	frase="Quiero cambiar el deporte de la natación. Quiero que la gente hable sobre él, piense en él, y quiera verlo. Michael Phelps";
	frases.push(frase);
	frase="Hay agua en cada vía, así que está bien. Ian Thorpe";
	frases.push(frase);
	
	var indice = Math.floor(Math.random()*frases.length);
	document.getElementById("frases").innerHTML = frases[indice];
}

