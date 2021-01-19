// SNACK 1
var arrayDiOggetti = [
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
    'peso': 4,
  }
];

arrayDiOggetti.sort(function(a, b) {
  return a.peso - b.peso;
})

console.log(arrayDiOggetti);

console.log(arrayDiOggetti[0]);

/* CORREZZIONE OTTAVIO
var bici = [
  {
    nome: 'bici1',
    peso: 10,
  },
  {
    nome: 'bici2',
    peso: 8,
  },
  {
    nome: 'bici3',
    peso: 3,
  },
  {
    nome: 'bici4',
    peso: 12,
  },
];

var biciLeggera = bici[0];

for (var i = 0; i < bici.length; i++) {
  if (bici[i].peso < biciLeggera.peso) {
    biciLeggera = bici[i];
  }
}

console.log(biciLeggera); */
