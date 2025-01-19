const name = 'Lydia Hallie';

console.log(!typeof name === 'object');
console.log(!typeof name === 'string');

// A: false true
// B: true false
// C: false false
// D: true true
// Answer

// Answer: C
// typeof name returns "string". The string "string" is a truthy value, so !typeof name returns the boolean value false. false === "object" and false === "string" both returnfalse.

// (If we wanted to check whether the type was (un)equal to a certain type, we should've written !== instead of !typeof)