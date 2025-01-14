// What is the Output

Promise.resolve(5);


// A: 5
// B: Promise {<pending>: 5}
// C: Promise {<fulfilled>: 5}
// D: Error
// Answer

// Answer: C
// We can pass any type of value we want to Promise.resolve, either a promise or a non-promise. The method itself returns a promise with the resolved value (<fulfilled>). If you pass a regular function, it'll be a resolved promise with a regular value. If you pass a promise, it'll be a resolved promise with the resolved value of that passed promise.

// In this case, we just passed the numerical value 5. It returns a resolved promise with the value 5.

