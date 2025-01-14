function sumValues(x, y, z) {
    return x + y + z;
  }
  
  
//   A: sumValues([...1, 2, 3])
//   B: sumValues([...[1, 2, 3]])
//   C: sumValues(...[1, 2, 3])
//   D: sumValues([1, 2, 3])
//   Answer
  
//   Answer: C
//   With the spread operator ..., we can spread iterables to individual elements. The sumValues function receives three arguments: x, y and z. ...[1, 2, 3] will result in 1, 2, 3, which we pass to the sumValues function.
  
  