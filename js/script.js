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
  if (biciLeggera.peso > arrayDiBici[i].peso) {
    biciLeggera = arrayDiBici[i];
  }
}

let {nome} = biciLeggera;

console.log(nome);


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

for (let i = 0; i < arrayDiSquadre.length; i++) {
  arrayDiSquadre[i]['punti fatti'] = randomNumberGenerator(1, 100);
  arrayDiSquadre[i]['falli subiti'] = randomNumberGenerator(1, 100);
}

console.log(arrayDiSquadre);
