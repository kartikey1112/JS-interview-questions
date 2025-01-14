const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person);
console.log(Object.keys(person));



// A: { name: "Lydia", age: 21 }, ["name", "age"]
// B: { name: "Lydia", age: 21 }, ["name"]
// C: { name: "Lydia"}, ["name", "age"]
// D: { name: "Lydia"}, ["age"]

// Answer: B
// With the defineProperty method, we can add new properties to an object, or modify existing ones. When we add a property to an object using the defineProperty method, they are by default not enumerable. The Object.keys method returns all enumerable property names from an object, in this case only "name".

// Properties added using the defineProperty method are immutable by default. You can override this behavior using the writable, configurable and enumerable properties. This way, the defineProperty method gives you a lot more control over the properties you're adding to an object.