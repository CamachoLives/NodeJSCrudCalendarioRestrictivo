let nums = [3, 8, 3, 3, 4, 4];
var singleNumber = function (nums) {
  const valoresUnicos = nums.filter(
    (valor) => nums.indexOf(valor) === nums.lastIndexOf(valor)
  );
  return valoresUnicos;
};

console.log(singleNumber(nums));
