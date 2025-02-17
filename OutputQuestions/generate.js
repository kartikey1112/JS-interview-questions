async function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield Promise.resolve(i);
  }
}

(async () => {
  const gen = range(1, 3);
  for await (const item of gen) {
    console.log(item);
  }
})();


// A: Promise {1} Promise {2} Promise {3}
// B: Promise {<pending>} Promise {<pending>} Promise {<pending>}
// C: 1 2 3
// D: undefined undefined undefined
// Answer

// Answer: C
// The generator function range returns an async object with promises for each item in the range we pass: Promise{1}, Promise{2}, Promise{3}. We set the variable gen equal to the async object, after which we loop over it using a for await ... of loop. We set the variable item equal to the returned Promise values: first Promise{1}, then Promise{2}, then Promise{3}. Since we're awaiting the value of item, the resolved promise, the resolved values of the promises get returned: 1, 2, then 3.

