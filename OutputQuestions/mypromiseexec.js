const myPromise = Promise.resolve(Promise.resolve('Promise'));

function funcOne() {
  setTimeout(() => console.log('Timeout 1!'), 0);
  myPromise.then(res => res).then(res => console.log(`${res} 1!`));
  console.log('Last line 1!');
}

async function funcTwo() {
  const res = await myPromise;
  console.log(`${res} 2!`)
  setTimeout(() => console.log('Timeout 2!'), 0);
  console.log('Last line 2!');
}

funcOne();
funcTwo();
// A: Promise 1! Last line 1! Promise 2! Last line 2! Timeout 1! Timeout 2!
// B: Last line 1! Timeout 1! Promise 1! Last line 2! Promise2! Timeout 2! 
// C: Last line 1! Promise 2! Last line 2! Promise 1! Timeout 1! Timeout 2!
// D: Timeout 1! Promise 1! Last line 1! Promise 2! Timeout 2! Last line 2!
// Answer

// Answer: C
// First, we invoke funcOne. On the first line of funcOne, we call the asynchronous setTimeout function, from which the callback is sent to the Web API. (see my article on the event loop here.)

// Then we call the myPromise promise, which is an asynchronous operation. Pay attention, that now only the first then clause was added to the microtask queue.

// Both the promise and the timeout are asynchronous operations, the function keeps on running while it's busy completing the promise and handling the setTimeout callback. This means that Last line 1! gets logged first, since this is not an asynchonous operation.

// Since the callstack is not empty yet, the setTimeout function and promise in funcOne cannot get added to the callstack yet.

// In funcTwo, the variable res gets Promise because Promise.resolve(Promise.resolve('Promise')) is equivalent to Promise.resolve('Promise') since resolving a promise just resolves it's value. The await in this line stops the execution of the function until it receives the resolution of the promise and then keeps on running synchronously until completion, so Promise 2! and then Last line 2! are logged and the setTimeout is sent to the Web API. If the first then clause in funcOne had its own log statement, it would be printed before Promise 2!. Howewer, it executed silently and put the second then clause in microtask queue. So, the second clause will be printed after Promise 2!.

// Then the call stack is empty. Promises are microtasks so they are resolved first when the call stack is empty so Promise 1! gets to be logged.

// Now, since funcTwo popped off the call stack, the call stack is empty. The callbacks waiting in the queue (() => console.log("Timeout 1!") from funcOne, and () => console.log("Timeout 2!") from funcTwo) get added to the call stack one by one. The first callback logs Timeout 1!, and gets popped off the stack. Then, the second callback logs Timeout 2!, and gets popped off the stack.