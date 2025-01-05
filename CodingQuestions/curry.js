function curry(fn) {
    const argumentsLength = fn.length;
    let args = [];  // Accumulating arguments
  
    function curried(...newArgs) {
      args = [...args, ...newArgs];  // Add the new arguments to the accumulated ones
  
      if (args.length >= argumentsLength) {
        // Once the number of accumulated arguments equals fn.length, call fn
        return fn(...args);
      }
  
      return curried;  // Otherwise, return the curried function to continue accumulating arguments
    }
  
    return curried;
  }
    

  const join = (a, b, c) => {
    return `${a}_${b}_${c}`
 }
 const curriedJoin = curry(join)
console.log('curriedJoin(1,2,3,4) :>> ', join(1,2,3),(1,2,4),(1,2,5));