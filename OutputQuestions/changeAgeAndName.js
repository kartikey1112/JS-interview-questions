const person = {
    name: 'Lydia',
    age: 21,
  };
  
  const changeAge = (x = { ...person }) => (x.age += 1);
  const changeAgeAndName = (x = { ...person }) => {
    x.age += 1;
    x.name = 'Sarah';
  };
  
  changeAge(person);
  changeAgeAndName();
  
  console.log(person);


//   A: {name: "Sarah", age: 22}
//   B: {name: "Sarah", age: 23}
//   C: {name: "Lydia", age: 22}
//   D: {name: "Lydia", age: 23}
//   Answer
  
//   Answer: C
//   Both the changeAge and changeAgeAndName functions have a default parameter, namely a newly created object { ...person }. This object has copies of all the key/values in the person object.
  
//   First, we invoke the changeAge function and pass the person object as its argument. This function increases the value of the age property by 1. person is now { name: "Lydia", age: 22 }.
  
//   Then, we invoke the changeAgeAndName function, however we don't pass a parameter. Instead, the value of x is equal to a new object: { ...person }. Since it's a new object, it doesn't affect the values of the properties on the person object. person is still equal to { name: "Lydia", age: 22 }.
  
  