let greeting;
greetign = {}; // Typo!
console.log(greetign);

// A: {}
// B: ReferenceError: greetign is not defined
// C: undefined

// Answer: A
// It logs the object, because we just created an empty object on the global object! When we mistyped greeting as greetign, the JS interpreter actually saw this as:

// global.greetign = {} in Node.js
// window.greetign = {}, frames.greetign = {} and self.greetign in browsers.
// self.greetign in web workers.
// globalThis.greetign in all environments.
// In order to avoid this, we can use "use strict". This makes sure that you have declared a variable before setting it equal to anything.