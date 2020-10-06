let n = 2;
let m = 5;
let i;
let sum = 0;

for (i = n; i <= m; i++) {
  sum += i ** 2;
}
console.log(sum);

let divSlike = document.getElementById("slike");

for (i = 1; i <= 3; i++) {
  divSlike.innerHTML += `<img src ="Slike/${i}.png">`;
}

//Bonus

for (i = 1; i <= 10; i++) {
  if (i % 3 == 1) {
    divSlike.innerHTML += `<img src ="Slike/1.png">`;
  } else if (i % 3 == 2) {
    divSlike.innerHTML += `<img src ="Slike/2.png">`;
  } else {
    divSlike.innerHTML += `<img src ="Slike/3.png">`;
  }
}

n = 20;
m = 100;
let pro = 1;
let del = 11;

for (i = n; i <= m; i++) {
  if (i % del == 0) {
    pro *= i;
  }
}
console.log(pro);

//15. zadatak

n = -40;
m = 19;
let counterpoz = 0;
let counterneg = 0;

for (i = n; i < 0, i++; ) {
  counterneg++;
}
console.log(counterneg);

for (i = m; i >= 0; i--) {
  counterpoz++;
}
console.log(counterpoz);

//14. zadatak

n = 10;
m = 20;
sum = 0;
let brbr = 0;

for (i = n; i <= m; i++) {
  sum += i;
  brbr += 1;
}

let asr = sum / brbr;
console.log(asr);

//17. zadatak

sum = 0;
n = 100;
m = 150;
let broj = 0;

for (i = n; i <= m; i++) {
  if (i % 10 == 4) {
    sum += i;
    broj++;
  }
}
console.log(sum, broj);

//21. zadatak

n = 1;
m = 10;

let a = 2;
pro = 1;

for (i = n; i <= m; i++) {
  if (i % a == 0) {
    pro *= i;
  }
}
console.log(pro);

//20. zadatak

n = 1;
m = 10;
a = 2;
sum = 0;

for (i = n; i <= m; i++) {
  if (i % a != 0) {
    sum += i;
  }
}
console.log(sum);
