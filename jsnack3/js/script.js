// FUNZIONE IN ES5
/* function myFunction(array, min, max) {
  var newArray = [];
  for (var i = min - 1; i < max; i++) {
    newArray.push(array[i]);
  }
  return newArray;
} */
// FUNZIONE DI ALFREDO
/* function myFunction (array, min, max) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= min && array[i] <= max) {
      newArray.push(array[i]);
    }
  }
} */
// ESERCIZIO IN ES5
/* var mioArray = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];

var userMinValue = parseInt(prompt('Scegli il numero minimo'));
// verificare che i controlli siano corretti prima di iniziare la funzione con il for
var userMaxValue = parseInt(prompt('Scegli il numero massimo'));
// verificare che i controlli siano corretti prima di iniziare la funzione con il for

console.log(myFunction(mioArray, userMinValue, userMaxValue)); */

// ESERCIZIO IN ES6
const arrayFromConst = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];
const userMinValue = parseInt(prompt('Scegli il numero minimo'));
const userMaxValue = parseInt(prompt('Scegli il numero massimo'));

function myFunction(array, min, max) {
  const newArray = array.filter((element, index) => {
    return index >= (min - 1) && index <= (max - 1);
  })
  return newArray;
}

console.log(myFunction(arrayFromConst, userMinValue, userMaxValue));
