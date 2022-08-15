function topKFrequent(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) ?? 0) + 1); 
    }
    return[...map.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(([num, times]) => num); 
};