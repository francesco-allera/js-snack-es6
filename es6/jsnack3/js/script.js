/*
Si scriva una funzione che accetti 3 argomenti, un array e 2 numeri (A più piccolo di B).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i 2 numeri.
*/

/* ----- Functions ----- */

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
   let num;

   do {
      num = parseInt(prompt('Inserisci un numero tra ' + min + ' e ' + max));
      if (!validNumber(num, min, max)) alert('Numero non valido');
   } while (!validNumber(num, min, max));

   return num;
}


/* ----- VARIABLES ----- */
const output = document.getElementById('output');
const array = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];
let newArray = [];
let text = '';
let numberMin, numberMax;


// Asking the user for a 'min' and a 'max' range
numberMin = asking(1, array.length);
numberMax = asking(numberMin, array.length);

// Create an array based on index of numberMin and numberMax
newArray = array.filter((el, i) => (i >= numberMin - 1) && i < numberMax);

// Printing the elements in HTML
newArray.forEach((el) => output.innerHTML += `<li>${el}</li>`);