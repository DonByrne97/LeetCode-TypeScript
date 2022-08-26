function longestPalindrome(s: string): number {
    let ans : number = 0; 
    let map : Map<string, number> = new Map();
    for(let char of s) {
        map.set(char, (map.get(char) || 0) + 1); // Set the char's value to its current value + 1 (or 0 + 1 if it doesn't exist) 
    }
    for(let v of map.values()) {
        ans += Math.floor(v / 2) * 2; 
        if(ans % 2 === 0 && v % 2 === 1) {
            ans++; 
        }
    }
    return ans; 
};
