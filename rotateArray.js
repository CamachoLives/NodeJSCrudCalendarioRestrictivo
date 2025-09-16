const nums = [-1, -100, 3, 99],
  k = 2;
var rotate = function (nums, k) {
  let z = 0;
  console.log(k);
  for (let x = 0; x < nums.length; x++) {
    console.log(nums[k + 1]);
    console.log(nums.length);

    if (nums.length >= k) {
      nums[z] = nums[k + 1];
      z++;
      k++;
    } else {
      for (let y = 0; (y = k); y++) {
        nums[z] = nums[y];
        z++;
      }
    }
  }
  return nums[z];
};

console.log(rotate(nums, k));
