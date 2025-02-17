function getItems(fruitList, ...args, favoriteFruit) {
    return [...fruitList, ...args, favoriteFruit]
  }
  
  getItems(["banana", "apple"], "pear", "orange")
  
  
  
//   A: ["banana", "apple", "pear", "orange"]
//   B: [["banana", "apple"], "pear", "orange"]
//   C: ["banana", "apple", ["pear"], "orange"]
//   D: SyntaxError
//   Answer
  
  
//   Answer: D
//   ...args is a rest parameter. The rest parameter's value is an array containing all remaining arguments, and can only be the last parameter! In this example, the rest parameter was the second parameter. This is not possible, and will throw a syntax error.
  
//   function getItems(fruitList, favoriteFruit, ...args) {
//     return [...fruitList, ...args, favoriteFruit];
//   }
  
//   getItems(['banana', 'apple'], 'pear', 'orange');
//   The above example works. This returns the array [ 'banana', 'apple', 'orange', 'pear' ]