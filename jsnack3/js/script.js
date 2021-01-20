function myFunction(array, min, max) {
  var newArray = [];
  for (var i = min - 1; i < max; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

var mioArray = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];

var userMinValue = parseInt(prompt('Scegli il numero minimo'));

var userMaxValue = parseInt(prompt('Scegli il numero massimo'));


console.log(myFunction(mioArray, userMinValue, userMaxValue));


const arrayFromConst = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];

let newArrayFromConst = [];

// arrayFromConst.map((element) => {
//   for (let x = )
//   newArrayFromConst.push(element);
// });
//
// console.log(newArrayFromConst);
