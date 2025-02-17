console.log('I want pizza'[0]);


// A: """
// B: "I"
// C: SyntaxError
// D: undefined
// Answer

// Answer: B
// In order to get a character at a specific index of a string, you can use bracket notation. The first character in the string has index 0, and so on. In this case, we want to get the element with index 0, the character "I', which gets logged.

// Note that this method is not supported in IE7 and below. In that case, use .charAt().