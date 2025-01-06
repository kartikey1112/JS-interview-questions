// Which of these values are falsy?
// 0;
// new Number(0);
// ('');
// (' ');
// new Boolean(false);
// undefined;


// A: 0, '', undefined
// B: 0, new Number(0), '', new Boolean(false), undefined
// C: 0, '', new Boolean(false), undefined
// D: All of them are falsy

// Answer: A
// There are 8 falsy values:

// undefined
// null
// NaN
// false
// '' (empty string)
// 0
// -0
// 0n (BigInt(0))
// Function constructors, like new Number and new Boolean are truthy.