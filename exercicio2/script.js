const num = [];

let i = 0;

while (i <= 8) {
  num.push(Math.floor(Math.random() * 51));
  i++;
}

const triplos = [];

const mult = num.map((n, i, arr) => {
  return triplos.push(n * 3);
});

const metades = [];

const half = num.filter((n) => {
  return metades.push(n / 2);
});

console.log(num);
console.log(metades);
