class Person {
    constructor() {
      this.name = 'Lydia';
    }
  }
  
  Person = class AnotherPerson {
    constructor() {
      this.name = 'Sarah';
    }
  };
  
  const member = new Person();
  console.log(member.name);


//   A: "Lydia"
//   B: "Sarah"
//   C: Error: cannot redeclare Person
//   D: SyntaxError
//   Answer
  
//   Answer: B
//   We can set classes equal to other classes/function constructors. In this case, we set Person equal to AnotherPerson. The name on this constructor is Sarah, so the name property on the new Person instance member is "Sarah".