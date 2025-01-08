// What does the setInterval method return in the browser?
setInterval(() => console.log('Hi'), 1000);


// A: a unique id
// B: the amount of milliseconds specified
// C: the passed function
// D: undefined
// Answer

// Answer: A
// It returns a unique id. This id can be used to clear that interval with the clearInterval() function.