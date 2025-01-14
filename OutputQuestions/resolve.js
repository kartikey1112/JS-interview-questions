const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
  myPromise().then(res => console.log(res));
  console.log('second');
}

async function secondFunction() {
  console.log(await myPromise());
  console.log('second');
}

firstFunction();
secondFunction();



// A: I have resolved!, second and I have resolved!, second
// B: second, I have resolved! and second, I have resolved!
// C: I have resolved!, second and second, I have resolved!
// D: second, I have resolved! and I have resolved!, second
// Answer

// Answer: D
// With a promise, we basically say I want to execute this function, but I'll put it aside for now while it's running since this might take a while. Only when a certain value is resolved (or rejected), and when the call stack is empty, I want to use this value.

// We can get this value with both .then and the await keywords in an async function. Although we can get a promise's value with both .then and await, they work a bit differently.

// In the firstFunction, we (sort of) put the myPromise function aside while it was running, but continued running the other code, which is console.log('second') in this case. Then, the function resolved with the string I have resolved, which then got logged after it saw that the callstack was empty.

// With the await keyword in secondFunction, we literally pause the execution of an async function until the value has been resolved before moving to the next line.

// This means that it waited for the myPromise to resolve with the value I have resolved, and only once that happened, we moved to the next line: second got logged.

