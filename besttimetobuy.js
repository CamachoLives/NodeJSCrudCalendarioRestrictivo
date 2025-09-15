const prices = [7,1,5,3,6,4];

function maxprofit(prices) {
  let valortotal = 0;
  for (let x = 0; x < prices.length; x++) {
    console.log(prices[x])
    console.log(prices[x + 1])
    if (prices[x] < prices[x + 1]) {
      valortotal = (prices[x + 1] - prices[x]) + valortotal;
      console.log(valortotal)
    }
  }
  return valortotal
}

console.log(maxprofit(prices));
