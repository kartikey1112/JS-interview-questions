const myFunc = ({ x, y, z }) => {
    console.log(x, y, z);
  };

  
  myFunc(1, 2, 3);
  
//   A: 1 2 3
//   B: {1: 1} {2: 2} {3: 3}
//   C: { 1: undefined } undefined undefined
//   D: undefined undefined undefined
//   Answer
  
//   Answer: D
//   myFunc expects an object with properties x, y and z as its argument. Since we're only passing three separate numeric values (1, 2, 3) instead of one object with properties x, y and z ({x: 1, y: 2, z: 3}), x, y and z have their default value of undefined.
  
  