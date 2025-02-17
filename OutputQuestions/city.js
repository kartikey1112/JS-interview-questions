const person = {
    name: 'Lydia',
    age: 21,
  };
  
  let city = person.city;
  city = 'Amsterdam';
  
  console.log(person);



//   A: { name: "Lydia", age: 21 }
//   B: { name: "Lydia", age: 21, city: "Amsterdam" }
//   C: { name: "Lydia", age: 21, city: undefined }
//   D: "Amsterdam"
//   Answer
  
//   Answer: A
//   We set the variable city equal to the value of the property called city on the person object. There is no property on this object called city, so the variable city has the value of undefined.
  
//   Note that we are not referencing the person object itself! We simply set the variable city equal to the current value of the city property on the person object.
  
//   Then, we set city equal to the string "Amsterdam". This doesn't change the person object: there is no reference to that object.
  
//   When logging the person object, the unmodified object gets returned.