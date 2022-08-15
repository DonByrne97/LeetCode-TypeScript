function containsDuplicate(nums: number[]): boolean {
    let encountered: number[] = []; 
    for(let i: number = 0; i < nums.length; i++) {
        if(encountered.includes(nums[i])) {
            return true; 
        } else {
            encountered.push(nums[i]); 
        }
    }
    return false; 
};