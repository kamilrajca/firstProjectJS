// zadanie 8.8 łąńcuchy znaków
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';

var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var textCharsAfter = text.replace('Papugi', animalUpperCased);
console.log(textCharsAfter.length/2);

var partOftextCharsAfter = textCharsAfter.slice(0,45);
console.log(partOftextCharsAfter);
