const person = {
    name: 'Lydia Hallie',
    hobbies: ['coding'],
  };
  
  function addHobby(hobby, hobbies = person.hobbies) {
    hobbies.push(hobby);
    return hobbies;
  }
  
  addHobby('running', []);
  addHobby('dancing');
  addHobby('baking', person.hobbies);
  
  console.log(person.hobbies);
  
  
  
  
//   A: ["coding"]
//   B: ["coding", "dancing"]
//   C: ["coding", "dancing", "baking"]
//   D: ["coding", "running", "dancing", "baking"]
//   Answer
  
//   Answer: C
//   The addHobby function receives two arguments, hobby and hobbies with the default value of the hobbies array on the person object.
  
//   First, we invoke the addHobby function, and pass "running" as the value for hobby and an empty array as the value for hobbies. Since we pass an empty array as the value for hobbies, "running" gets added to this empty array.
  
//   Then, we invoke the addHobby function, and pass "dancing" as the value for hobby. We didn't pass a value for hobbies, so it gets the default value, the hobbies property on the person object. We push the hobby dancing to the person.hobbies array.
  
//   Last, we invoke the addHobby function, and pass "baking" as the value for hobby, and the person.hobbies array as the value for hobbies. We push the hobby baking to the person.hobbies array.
  
//   After pushing dancing and baking, the value of person.hobbies is ["coding", "dancing", "baking"]