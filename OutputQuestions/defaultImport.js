export default function sum(x) {
    return x + x;
  }
  
  // index.js
  import * as sum from './sum';
  
  
//   A: sum(4)
//   B: sum.sum(4)
//   C: sum.default(4)
//   D: Default aren't imported with *, only named exports







//   Answer
  
//   Answer: C
//   With the asterisk *, we import all exported values from that file, both default and named. If we had the following file:
  
//   // info.js
//   export const name = 'Lydia';
//   export const age = 21;
//   export default 'I love JavaScript';
  
//   // index.js
//   import * as info from './info';
//   console.log(info);
//   The following would get logged:
  
//   {
//     default: "I love JavaScript",
//     name: "Lydia",
//     age: 21
//   }
//   For the sum example, it means that the imported value sum looks like this:
  
//   { default: function sum(x) { return x + x } }
//   We can invoke this function, by calling sum.default