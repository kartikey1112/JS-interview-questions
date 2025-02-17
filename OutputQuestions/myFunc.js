const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
  console.log(num, value);
}

myFunc();
myFunc(3);

// A: 2 4 and 3 6
// B: 2 NaN and 3 NaN
// C: 2 Error and 3 6
// D: 2 4 and 3 Error
// Answer

// Answer: A
// First, we invoked myFunc() without passing any arguments. Since we didn't pass arguments, num and value got their default values: num is 2, and value is the returned value of the function add. To the add function, we pass num as an argument, which had the value of 2. add returns 4, which is the value of value.

// Then, we invoked myFunc(3) and passed the value 3 as the value for the argument num. We didn't pass an argument for value. Since we didn't pass a value for the value argument, it got the default value: the returned value of the add function. To add, we pass num, which has the value of 3. add returns 6, which is the value of value.