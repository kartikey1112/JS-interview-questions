function* startGame() {
    const answer = yield 'Do you love JavaScript?';
    if (answer !== 'Yes') {
      return "Oh wow... Guess we're done here";
    }
    return 'JavaScript loves you back ❤️';
  }
  
  const game = startGame();
  console.log(/* 1 */); // Do you love JavaScript?
  console.log(/* 2 */); // JavaScript loves you back ❤️
 
 
//   A: game.next("Yes").value and game.next().value
//   B: game.next.value("Yes") and game.next.value()
//   C: game.next().value and game.next("Yes").value
//   D: game.next.value() and game.next.value("Yes")
  
  
  
  
  
  
//   Answer
  
//   Answer: C
//   A generator function "pauses" its execution when it sees the yield keyword. First, we have to let the function yield the string "Do you love JavaScript?", which can be done by calling game.next().value.
  
//   Every line is executed, until it finds the first yield keyword. There is a yield keyword on the first line within the function: the execution stops with the first yield! This means that the variable answer is not defined yet!
  
//   When we call game.next("Yes").value, the previous yield is replaced with the value of the parameters passed to the next() function, "Yes" in this case. The value of the variable answer is now equal to "Yes". The condition of the if-statement returns false, and JavaScript loves you back ❤️ gets logged.
  
  