class Counter {
    #number = 10
  
    increment() {
      this.#number++
    }
  
    getNum() {
      return this.#number
    }
  }
  
  const counter = new Counter()
  counter.increment()
  
  console.log(counter.#number)
  
  
//   A: 10
//   B: 11
//   C: undefined
//   D: SyntaxError
//   Answer
  
//   Answer: D
//   In ES2020, we can add private variables in classes by using the #. We cannot access these variables outside of the class. When we try to log counter.#number, a SyntaxError gets thrown: we cannot access it outside the Counter class!
  
  