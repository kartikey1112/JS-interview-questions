const emojis = ['🥑', ['✨', '✨', ['🍕', '🍕']]];

console.log(emojis.flat(1));


// A: ['🥑', ['✨', '✨', ['🍕', '🍕']]]
// B: ['🥑', '✨', '✨', ['🍕', '🍕']]
// C: ['🥑', ['✨', '✨', '🍕', '🍕']]
// D: ['🥑', '✨', '✨', '🍕', '🍕']
// Answer

// Answer: B
// With the flat method, we can create a new, flattened array. The depth of the flattened array depends on the value that we pass. In this case, we passed the value 1 (which we didn't have to, that's the default value), meaning that only the arrays on the first depth will be concatenated. ['🥑'] and ['✨', '✨', ['🍕', '🍕']] in this case. Concatenating these two arrays results in ['🥑', '✨', '✨', ['🍕', '🍕']].