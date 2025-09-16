const nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;
var rotate = function (nums, k) {
  const parte = nums.slice(-k);
  console.log(parte);

  const parte1 = nums.slice(0, nums.length - k);
  console.log(parte1);

  const union = parte.concat(parte1);
  console.log(union);
  return union;
};

console.log(rotate(nums, k));
