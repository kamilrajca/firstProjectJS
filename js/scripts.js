// plik scrips.js
var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

// 8.4 pole trójkąta
var a = 2,
    h = 4 ,
    triangleArea = a * h / 2;
console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log(triangleArea);

// 8.4 pole trójkąta z promt
var a = prompt ('podaj długośc podstawy trójkąta a:');
var h = prompt ("podaj wysokość trójkąta h:");
var triangleArea = a * h / 2;
alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
console.log(triangleArea);