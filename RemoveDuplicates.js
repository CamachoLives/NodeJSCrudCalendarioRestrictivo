let nums = [1, 1, 2, 2, 3, 4, 5, 5];

function removeDuplicates(nums) {
  let z = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[z] = nums[i];
      z++;
    }
  }
  return z;
}

console.log(removeDuplicates(nums));
