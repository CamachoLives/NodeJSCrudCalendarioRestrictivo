const prices = [1, 2, 3, 4, 5 ];

function maxprofit(prices) {
  let z = 0;
  let valortotal = 0;
  for (let x = 0; x < prices.length; x++) {
    if (z === 0) {
      if (prices[x] > z) {
        valortotal = z + prices[x];
        console.log("times", valortotal);
      }
    }
    z = prices[x];
    console.log(z);
  }
  return valortotal;
}

console.log(maxprofit(prices));
