console.log('❤️' === '❤️');
A: true
B: false


// Answer

// Answer: A
// Under the hood, emojis are unicodes. The unicodes for the heart emoji is "U+2764 U+FE0F". These are always the same for the same emojis, so we're comparing two equal strings to each other, which returns true.

