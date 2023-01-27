/*
Creare un array di oggetti.
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.
*/

/* ----- Variables ----- */
const outputBikes = document.getElementById('output-bikes');
const outputLighter = document.getElementById('output-lighter');
const bikes = [
   { nome: 'Bianchi', peso: 7 },
   { nome: 'Garelli', peso: 9 },
   { nome: 'Carrera', peso: 6 },
   { nome: 'Atala', peso: 9 }
];
let lighter = bikes[0];
let text = '';

// Cycling all the bikes
for (let i = 0; i < bikes.length; i++) {
   // Creating the text for the HTML
   text += '<li>';

   // Cycling the keys of a bike
   for (let key in bikes[i]) {
      text += `${key} bici: ${bikes[i][key]}<br>`;

      // If the bike has the smaller weight => now it's the lighter
      if (bikes[i].peso < lighter.peso) lighter = bikes[i];
   }

   // Finishing the text for the HTML
   text += '</li>';
}

// Printing the array of bikes and the lighter bike on HTML
outputBikes.innerHTML = text;
outputLighter.innerText = `La bici che pesa meno è la ${lighter.nome}`;