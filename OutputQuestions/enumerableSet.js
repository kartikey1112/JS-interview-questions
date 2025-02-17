const set = new Set();

set.add(1);
set.add('Lydia');
set.add({ name: 'Lydia' });

for (let item of set) {
  console.log(item + 2);
}


// A: 3, NaN, NaN
// B: 3, 7, NaN
// C: 3, Lydia2, [object Object]2
// D: "12", Lydia2, [object Object]2


// Answer

// Answer: C
// The + operator is not only used for adding numerical values, but we can also use it to concatenate strings. Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.

// The first one is 1, which is a numerical value. 1 + 2 returns the number 3.

// However, the second one is a string "Lydia". "Lydia" is a string and 2 is a number: 2 gets coerced into a string. "Lydia" and "2" get concatenated, which results in the string "Lydia2".

// { name: "Lydia" } is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes "[object Object]". "[object Object]" concatenated with "2" becomes "[object Object]2".

