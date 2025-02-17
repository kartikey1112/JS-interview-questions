fetch('https://www.website.com/api/user/1')
  .then(res => res.json())
  .then(res => console.log(res));


// A: The result of the fetch method.
// B: The result of the second invocation of the fetch method.
// C: The result of the callback in the previous .then().
// D: It would always be undefined.
// Answer

// Answer: C
// The value of res in the second .then is equal to the returned value of the previous .then. You can keep chaining .thens like this, where the value is passed to the next handler.