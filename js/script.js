// SNACK 1
const arrayDiBici = [
  {
    'nome': 'bici1',
    'peso': 3,
  },
  {
    'nome': 'bici2',
    'peso': 2,
  },
  {
    'nome': 'bici3',
    'peso': 6,
  },
  {
    'nome': 'bici4',
    'peso': 4,
  }
];

let biciLeggera = arrayDiBici[0];

for (let i = 0; i < arrayDiBici.length; i++) {
  if (arrayDiBici[i].peso < biciLeggera.peso) {
    biciLeggera = arrayDiBici[i];
  }
}

const {nome, peso} = biciLeggera;

console.log(`La ${nome} è la bici più leggera con il peso di ${peso} kg`);


// SNACK 2
function randomNumberGenerator(minNumberRange, maxNumberRange){
  var randomNumber = Math.floor(Math.random() * (maxNumberRange + 1 - minNumberRange) + minNumberRange);
  return randomNumber;
}

const arrayDiSquadre = [
  {
    'nome': 'Roma',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    'nome': 'Juventus',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    'nome': 'Inter',
    'punti fatti': 0,
    'falli subiti': 0,
  },
  {
    'nome': 'Milan',
    'punti fatti': 0,
    'falli subiti': 0,
  }
];

// for (let i = 0; i < arrayDiSquadre.length; i++) {
//   var {punti fatti} = arrayDiSquadre;
//   {punti fatti} = randomNumberGenerator(1, 100);
//   {falli subiti} = randomNumberGenerator(1, 50);
// }

console.log(arrayDiSquadre);
