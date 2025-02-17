const groceries = ['banana', 'apple', 'peanuts'];

if (groceries.indexOf('banana')) {
  console.log('We have to buy bananas!');
} else {
  console.log(`We don't have to buy bananas!`);
}

// A: We have to buy bananas!
// B: We don't have to buy bananas
// C: undefined
// D: 1
// Answer

// Answer: B
// We passed the condition groceries.indexOf("banana") to the if-statement. groceries.indexOf("banana") returns 0, which is a falsy value. Since the condition in the if-statement is falsy, the code in the else block runs, and We don't have to buy bananas! gets logged.

