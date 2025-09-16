int = 3456;
var reverse = function (int) {
  let r = [];

  while (int > 0) {
    let digito = int % 10;
    r.push(digito);
    int = Math.floor(int / 10);
  }

  return r;
};

console.log(reverse(int));
