const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
  };
  
  const colors = ['pink', 'red', 'blue'];
  
  console.log(colorConfig.colors[1]);
  
//   A: true
//   B: false
//   C: undefined
//   D: TypeError
  
//   Answer
  
//   Answer: D
//   In JavaScript, we have two ways to access properties on an object: bracket notation, or dot notation. In this example, we use dot notation (colorConfig.colors) instead of bracket notation (colorConfig["colors"]).
  
//   With dot notation, JavaScript tries to find the property on the object with that exact name. In this example, JavaScript tries to find a property called colors on the colorConfig object. There is no property called colors, so this returns undefined. Then, we try to access the value of the first element by using [1]. We cannot do this on a value that's undefined, so it throws a TypeError: Cannot read property '1' of undefined.
  
//   JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement. If we would've used colorConfig[colors[1]], it would have returned the value of the red property on the colorConfig object.
  
  