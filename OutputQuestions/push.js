let newList = [1, 2, 3].push(4);

console.log(newList.push(5));

// A: [1, 2, 3, 4, 5]
// B: [1, 2, 3, 5]
// C: [1, 2, 3, 4]
// D: Error



// Answer

// Answer: D
// The .push method returns the new length of the array, not the array itself! By setting newList equal to [1, 2, 3].push(4), we set newList equal to the new length of the array: 4.

// Then, we try to use the .push method on newList. Since newList is the numerical value 4, we cannot use the .push method: a TypeError is thrown.

