function* generatorOne() {
    yield ['a', 'b', 'c'];
  }
  
  function* generatorTwo() {
    yield* ['a', 'b', 'c'];
  }
  
  const one = generatorOne();
  const two = generatorTwo();
  
  console.log(one.next().value);
  console.log(two.next().value);
  
  
  A: a and a
//   B: a and undefined
//   C: ['a', 'b', 'c'] and a
//   D: a and ['a', 'b', 'c']
//   Answer
  
//   Answer: C
//   With the yield keyword, we yield values in a generator function. With the yield* keyword, we can yield values from another generator function, or iterable object (for example an array).
  
//   In generatorOne, we yield the entire array ['a', 'b', 'c'] using the yield keyword. The value of value property on the object returned by the next method on one (one.next().value) is equal to the entire array ['a', 'b', 'c'].
  
//   console.log(one.next().value); // ['a', 'b', 'c']
//   console.log(one.next().value); // undefined
//   In generatorTwo, we use the yield* keyword. This means that the first yielded value of two, is equal to the first yielded value in the iterator. The iterator is the array ['a', 'b', 'c']. The first yielded value is a, so the first time we call two.next().value, a is returned.
  
//   console.log(two.next().value); // 'a'
//   console.log(two.next().value); // 'b'
//   console.log(two.next().value); // 'c'
//   console.log(two.next().value); // undefined