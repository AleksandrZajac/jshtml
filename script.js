console.log('Hello world!!!');
var wizards = [
  {
    name: 'Пендальф',
    eyesColor: 'blue',
    coatColor: 'green'
  },
  {
    name: 'Баба Яга',
    eyesColor: 'black',
    coatColor: 'gray'
  },
  {
    name: 'Сарумян',
    eyesColor: 'white',
    coatColor: 'yellow'
  },
  {
    name: 'Радагаст',
    eyesColor: 'red',
    coatColor: 'blue'
  }
];

var party = 'Саурон пригласил на вечеринку: ';

var result = wizards.
  map(function (it) {
    return it.coatColor;
  }).join(', ');

console.log(party + result);
