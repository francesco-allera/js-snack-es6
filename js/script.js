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
