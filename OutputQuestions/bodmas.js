console.log(3 + 4 + '5');



// A: "345"
// B: "75"
// C: 12
// D: "12"


// Answer

// Answer: B
// Operator associativity is the order in which the compiler evaluates the expressions, either left-to-right or right-to-left. This only happens if all operators have the same precedence. We only have one type of operator: +. For addition, the associativity is left-to-right.

// 3 + 4 gets evaluated first. This results in the number 7.

// 7 + '5' results in "75" because of coercion. JavaScript converts the number 7 into a string, see question 15. We can concatenate two strings using the +operator. "7" + "5" results in "75".

