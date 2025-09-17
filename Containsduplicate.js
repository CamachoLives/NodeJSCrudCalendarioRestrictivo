let nums = [1, 3, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var containsDuplicate = function (nums) {
  arreglo = [];
  valor = null;
  for (x = 0; x < nums.length; x++) {
    arreglo.push(nums[x]);
    valor = nums[x + 1];
    if (arreglo.includes(valor)) {
      return true;
    }
  }
  
  return false;
};

console.log(containsDuplicate(nums));
