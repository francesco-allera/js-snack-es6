function myFunction(array, min, max) {
  var newArray = [];
  for (var i = min; i < max; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

var mioArray = [1,2,3,4,5,6,7,8,9,10];

console.log(myFunction(mioArray, 2, 7));
