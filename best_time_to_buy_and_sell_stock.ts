function maxProfit(prices: number[]): number {
    let left : number = 0; 
    let right : number = 1; 
    let max_profit : number = 0; 
    while(right < prices.length) {
        if(prices[left] < prices[right]) { 
            let profit : number = prices[right] - prices[left]; // Determine the profit from prices at the left pointer subtracted from prices at the right pointer
            max_profit = Math.max(max_profit, profit); // Get the max between max_profit and profit 
        } else {
            left = right; // If prices[right] is greater than prices[left], set left to right. 
        }
        right++; // Increment the right pointer 
    }
    return max_profit; 
};
