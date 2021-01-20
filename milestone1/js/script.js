const arrayDiGattini = [
  {
    name: 'Silvestro',
    age: '12',
    color: 'nero e bianco',
    sex: 'maschio',
  },
  {
    name: 'Garfield',
    age: '23',
    color: 'tigrato arancione',
    sex: 'maschio',
  },
  {
    name: 'Kitty',
    age: '1',
    color: 'grigio',
    sex: 'femmina',
  },
]

arrayDiGattini.forEach((element) => console.log(`Il gatto di nome ${element.name} ha il pelo di colore ${element.color}`));
