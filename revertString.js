s = ["h", "e", "l", "l", "o"];
var reverseString = function (s) {
  let z = 0;
  let k = s.length - 1;
  while (z < k) {
    let temporal = s[z];
    s[z] = s[k];
    s[k] = temporal;
  }
  console.log(s);
  return s;
};

console.log(reverseString(s));
