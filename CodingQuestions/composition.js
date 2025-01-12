// Here you are asked to create a pipe() function, which chains multiple functions together to create a new function.

// Suppose we have some simple functions like this

// const times = (y) =>  (x) => x * y
// const plus = (y) => (x) => x + y
// const subtract = (y) =>  (x) => x - y
// const divide = (y) => (x) => x / y
// Your pipe() would be used to generate new functions

// pipe([
//   times(2),
//   times(3)
// ])  
// // x * 2 * 3
// pipe([
//   times(2),
//   plus(3),
//   times(4)
// ]) 
// // (x * 2 + 3) * 4
// pipe([
//   times(2),
//   subtract(3),
//   divide(4)
// ]) 
// // (x * 2 - 3) / 4


// Solution is given below















const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

function pipe(funcs) {
	return function (initialValue){
		let res = initialValue;
		console.log(res)
		for(let i=0;i<funcs.length;i++){
			res = funcs[i](res);
		}
		return res;
	}
}



const returned  = pipe([times(2),times(3)])

console.log('pipe[times(2),times(3)] :>> ',returned(1) );





