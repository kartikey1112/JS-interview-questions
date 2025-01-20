const person = { name: 'Lydia Hallie' };

Object.seal(person);


// A: person.name = "Evan Bacon"
// B: person.age = 21
// C: delete person.name
// D: Object.assign(person, { age: 21 })
// Answer

// Answer: A
// With Object.seal we can prevent new properties from being added, or existing properties to be removed.

// However, you can still modify the value of existing properties.