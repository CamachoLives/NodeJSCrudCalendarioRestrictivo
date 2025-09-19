let nums = [2,2,1];
var singleNumber = function (nums) {
  const valoresUnicos = nums.filter(
    (valor) => nums.indexOf(valor) === nums.lastIndexOf(valor)
  );
  
  return parseInt(valoresUnicos);
};

console.log(singleNumber(nums));
