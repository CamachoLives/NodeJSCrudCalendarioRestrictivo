int = -3456;
var reverse = function (int) {
  let r = null;
  let contador = 0;
  let temporal = 0;

  while (int > 0) {
    let digito = int % 10;

    if (contador == 0) {
      r = digito;
      console.log(r);
      contador++;
    } else {
      r = "" + temporal + digito;
    }
    int = Math.floor(int / 10);
    temporal = r;
  }
  int = r;
  //
  return parseInt(int);
};

console.log(reverse(int));
