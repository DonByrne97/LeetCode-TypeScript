function groupAnagrams(strs: string[]): string[][] {
    const map = new Map(); // Create a new map 
    for(let str of strs) { // Iterate through the array of strings 
        const sortedStr=  str.split('').sort().join('');  // Created a sorted version of str
        if(map.has(sortedStr)) { // Check if the map has the sortedStr as a key 
            map.set(sortedStr, [...map.get(sortedStr), str]); // Create a new map entry with sortedStr as the key. Add str to the array at that value, including all existing elements. 
        } else {
            map.set(sortedStr, [str]); // Create a new map entry with sortedStr as the key and the str as the first element in the array that the value. 
        }
    }
    return Array.from(map.values()); // Return all arrays from the map. 
};