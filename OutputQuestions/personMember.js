const person = {
    firstName: 'Lydia',
    lastName: 'Hallie',
    pet: {
      name: 'Mara',
      breed: 'Dutch Tulip Hound',
    },
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  };
  
  console.log(person.pet?.name);
  console.log(person.pet?.family?.name);
  console.log(person.getFullName?.());
  console.log(member.getLastName?.());
  
  
//   A: undefined undefined undefined undefined
//   B: Mara undefined Lydia Hallie ReferenceError
//   C: Mara null Lydia Hallie null
//   D: null ReferenceError null ReferenceError
//   Answer
  
//   Answer: B
//   With the optional chaining operator ?., we no longer have to explicitly check whether the deeper nested values are valid or not. If we're trying to access a property on an undefined or null value (nullish), the expression short-circuits and returns undefined.
  
//   person.pet?.name: person has a property named pet: person.pet is not nullish. It has a property called name, and returns Mara. person.pet?.family?.name: person has a property named pet: person.pet is not nullish. pet does not have a property called family, person.pet.family is nullish. The expression returns undefined. person.getFullName?.(): person has a property named getFullName: person.getFullName() is not nullish and can get invoked, which returns Lydia Hallie. member.getLastName?.(): variable member is non-existent therefore a ReferenceError gets thrown!