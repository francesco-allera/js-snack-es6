/*
Si scriva una funzione che accetti 3 argomenti, un array e 2 numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i 2 numeri.
*/

/* ----- FUNCTIONS ----- */

// Validation for numbers => boolean
function validNumber(num, min, max) {
   num = parseInt(num);

   if (isNaN(num)) return false;
   if (min && num < min) return false;
   if (max && num > max) return false;

   return true;
}

// Ask to insert a number between a min and a max
function asking(min, max) {
   var num;

   do {
      num = parseInt(prompt('Inserisci un numero tra '+ min +' e '+ max));
      if (!validNumber(num, min, max)) alert('Numero non valido');
   } while (!validNumber(num, min, max));

   return num;
}

// Returns a new array, given: array, min index, max index
function myFunction(array, min, max) {
   var newArray = [];

   for (var i = min - 1; i < max && i < array.length; i++) {
      newArray.push(array[i]);
   }

   return newArray;
}

/* ----- VARIABLES ----- */
var output = document.getElementById('output');
var array = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];
var newArray = [];
var text = '';
var numberMin, numberMax;


// Asking the user for a 'min' and a 'max' range
numberMin = asking(1, array.length);
numberMax = asking(numberMin, array.length);

// Create an array based on index of numberMin and numberMax
newArray = myFunction(array, numberMin, numberMax);

// Create a text and printing it in HTML
for (let i = 0; i < newArray.length; i++) {
   text += '<li>' + newArray[i] + '</li>';
}
output.innerHTML = text;