
[1, 2, 3, 4].reduce((x, y) => console.log(x, y));


// A: 1 2 and 3 3 and 6 4
// B: 1 2 and 2 3 and 3 4
// C: 1 undefined and 2 undefined and 3 undefined and 4 undefined
// D: 1 2 and undefined 3 and undefined 4


// Answer

// Answer: D
// The first argument that the reduce method receives is the accumulator, x in this case. The second argument is the current value, y. With the reduce method, we execute a callback function on every element in the array, which could ultimately result in one single value.

// In this example, we are not returning any values, we are simply logging the values of the accumulator and the current value.

// The value of the accumulator is equal to the previously returned value of the callback function. If you don't pass the optional initialValue argument to the reduce method, the accumulator is equal to the first element on the first call.

// On the first call, the accumulator (x) is 1, and the current value (y) is 2. We don't return from the callback function, we log the accumulator, and the current values: 1 and 2 get logged.

// If you don't return a value from a function, it returns undefined. On the next call, the accumulator is undefined, and the current value is 3. undefined and 3 get logged.

// On the fourth call, we again don't return from the callback function. The accumulator is again undefined, and the current value is 4. undefined and 4 get logged.

