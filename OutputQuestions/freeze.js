const box = { x: 10, y: 20 };

Object.freeze(box);

const shape = box;
shape.x = 100;

console.log(shape);


// A: { x: 100, y: 20 }
// B: { x: 10, y: 20 }
// C: { x: 100 }
// D: ReferenceError


// Answer: B
// Object.freeze makes it impossible to add, remove, or modify properties of an object (unless the property's value is another object).

// When we create the variable shape and set it equal to the frozen object box, shape also refers to a frozen object. You can check whether an object is frozen by using Object.isFrozen. In this case, Object.isFrozen(shape) would return true, since the variable shape has a reference to a frozen object.

// Since shape is frozen, and since the value of x is not an object, we cannot modify the property x. x is still equal to 10, and { x: 10, y: 20 } gets logged.