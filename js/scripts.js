// zadanie 8.9 choinka

function rysujChoinke(poziom){ 
  for (var i=0; i<=poziom; i++) {
    var star = "";
    for (var n=0; n <(2*i-1); n++) {
        star += '*';
    }
    console.log(star)
  }
} 
rysujChoinke(1);
console.log();
rysujChoinke(2);
console.log();
rysujChoinke(3);
console.log();
rysujChoinke(4);
console.log();
rysujChoinke(5);
console.log();

// choinka z spacją 

function rysujChoinke(poziom) {
  for(var i=0; i <= poziom; i++) {
    var star = '';

    for (var j=0; j < poziom- i; j++){
      star += ' ';
    }

    for(var n=0; n<(2*i+1); n++) {
      star += '*';
    }
    console.log(star)
  }
}

rysujChoinke(5);
console.log();