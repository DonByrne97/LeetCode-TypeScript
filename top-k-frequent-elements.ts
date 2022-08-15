function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>(); // Create a new map of type <number, number> 
    for(let i = 0; i < nums.length; i++) { // Iterate through nums (inputted array) 
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1); 
        // Sets nums[i] as the key. If the key exists, we increment it by 1. If it doesn't, 
        // we set the value as 0, then add 1. 
    }
    return[...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([num, times]) => num); 
    // Get the map entries, then sort them from largest to smallest. Then, slice from the map 
    // anything with an index greater than k. Then, map the keys to an array called "num." 
};
