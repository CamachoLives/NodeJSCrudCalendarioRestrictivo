let nums = [1, 2, 3, 4, 5, 6, 2, 1, 2, 3];
var duplicate = function (nums) {
  const myValor = new Set();
  for (let num of nums) {
    if (myValor.has(num)) {
      return true;
    }
    myValor.add(num);
  }
  return false;
};
