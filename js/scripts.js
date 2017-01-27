// funkcje zad 8.6
var a = 0,
    h = 4;
function getTriangleArea(a, h) {
  if ( (a > 0) && (h > 0) ) {
    return a*h/2;
  } else {
     alert('Nieprawidłowe dane');
    }
}
console.log( getTriangleArea(a, h) );

console.log( getTriangleArea(10,6) );

var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(14, 22);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(5, 10);
console.log(triangle3Area);