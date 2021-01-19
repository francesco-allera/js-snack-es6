// SNACK 1
const arrayDiBici = [
  {
    'nomeBici': 'bici1',
    'peso': 3,
  },
  {
    'nomeBici': 'bici2',
    'peso': 2,
  },
  {
    'nomeBici': 'bici3',
    'peso': 6,
  },
  {
    'nomeBici': 'bici4',
    'peso': 4,
  }
];

let biciLeggera = arrayDiBici[0];

for (let i = 0; i < arrayDiBici.length; i++) {
  if (arrayDiBici[i].peso < biciLeggera.peso) {
    biciLeggera = arrayDiBici[i];
  }
}

const {nomeBici, peso} = biciLeggera;

console.log(`La ${nomeBici} è la bici più leggera con il peso di ${peso} kg`);


// SNACK 2
function randomNumberGenerator(maxNumberRange){
  return Math.floor(Math.random() * (maxNumberRange + 1));
}

const arrayDiSquadre = [
  {
    'nomeSquadra': 'Roma',
    'puntiFatti': 0,
    'falliSubiti': 0,
  },
  {
    'nomeSquadra': 'Juventus',
    'puntiFatti': 0,
    'falliSubiti': 0,
  },
  {
    'nomeSquadra': 'Inter',
    'puntiFatti': 0,
    'falliSubiti': 0,
  },
  {
    'nomeSquadra': 'Milan',
    'puntiFatti': 0,
    'falliSubiti': 0,
  }
];

for (let i = 0; i < arrayDiSquadre.length; i++) {
  var squadra = arrayDiSquadre[i];
  squadra.puntiFatti = randomNumberGenerator(100);
  squadra.falliSubiti = randomNumberGenerator(50);
}

console.log('Primo array di squadre', arrayDiSquadre);

const newArrayDiSquadre = [];

for (let i = 0; i < arrayDiSquadre.length; i++) {
  let vecchiaSquadra = arrayDiSquadre[i];
  const {nomeSquadra, falliSubiti} = vecchiaSquadra;

  newArrayDiSquadre.push({
    nomeSquadra,
    falliSubiti,
  })
}

console.log('Secondo array di squadre', newArrayDiSquadre);
