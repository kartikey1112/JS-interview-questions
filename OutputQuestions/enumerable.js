const myLifeSummedUp = ['☕', '💻', '🍷', '🍫'];

for (let item in myLifeSummedUp) {
  console.log(item);
}

for (let item of myLifeSummedUp) {
  console.log(item);
}


// A: 0 1 2 3 and "☕" "💻" "🍷" "🍫"
// B: "☕" "💻" "🍷" "🍫" and "☕" "💻" "🍷" "🍫"
// C: "☕" "💻" "🍷" "🍫" and 0 1 2 3
// D: 0 1 2 3 and {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// With a for-in loop, we can iterate over enumerable properties. In an array, the enumerable properties are the "keys" of array elements, which are actually their indexes. You could see an array as:

// {0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}

// Where the keys are the enumerable properties. 0 1 2 3 get logged.

// With a for-of loop, we can iterate over iterables. An array is an iterable. When we iterate over the array, the variable "item" is equal to the element it's currently iterating over, "☕" "💻" "🍷" "🍫" get logged.