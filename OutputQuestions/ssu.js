const fruit = ['🍌', '🍊', '🍎']

fruit.slice(0, 1)
fruit.splice(0, 1)
fruit.unshift('🍇')

console.log(fruit)


// A: ['🍌', '🍊', '🍎']
// B: ['🍊', '🍎']
// C: ['🍇', '🍊', '🍎']
// D: ['🍇', '🍌', '🍊', '🍎']
// Answer

// Answer: C
// First, we invoke the slice method on the fruit array. The slice method does not modify the original array, but returns the value that it sliced off the array: the banana emoji. Then, we invoke the splice method on the fruit array. The splice method does modify the original array, which means that the fruit array now consists of ['🍊', '🍎']. At last, we invoke the unshift method on the fruit array, which modifies the original array by adding the provided value, ‘🍇’ in this case, as the first element in the array. The fruit array now consists of ['🍇', '🍊', '🍎'].

