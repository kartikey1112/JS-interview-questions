console.log(`${(x => x)('I love')} to program`);


// A: I love to program
// B: undefined to program
// C: ${(x => x)('I love') to program
// D: TypeError
// Answer

// Answer: A
// Expressions within template literals are evaluated first. This means that the string will contain the returned value of the expression, the immediately invoked function (x => x)('I love') in this case. We pass the value 'I love' as an argument to the x => x arrow function. x is equal to 'I love', which gets returned. This results in I love to program.