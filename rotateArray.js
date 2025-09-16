const nums = [1, 2],
  k = 0;
var rotate = function (nums, k) {
  k = k % nums.length;
  const parte = nums.slice(-k);
  console.log(parte);

  const parte1 = nums.slice(0, nums.length - k);
  console.log(parte1);

  if (nums.length > 1) {
    if (k == 0) {
      return nums;
    } else {
      const union = parte.concat(parte1);
      console.log(union);
      for (let y = 0; y < union.length; y++) {
        nums[y] = union[y];
        console.log(nums[y]);
      }

      return nums;
    }
  } else {
    return nums;
  }
};

console.log(rotate(nums, k));
