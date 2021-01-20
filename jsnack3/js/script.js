function myFunction(array, min, max) {
  var newArray = [];
  for (var i = min - 1; i < max; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

var mioArray = ['primo', 'secondo', 'terzo', 'quarto', 'quinto', 'sesto', 'settimo', 'ottavo', 'nono', 'decimo'];

console.log(myFunction(mioArray, 2, 7));
