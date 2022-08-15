function twoSum(nums: number[], target: number): number[] {
    let returnArray: number[] = []; 
    for(let i : number = 0; i < nums.length; i++) {
        for(let j : number = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                returnArray = [i, j]; 
            }
        }
    }
    return returnArray; 
};