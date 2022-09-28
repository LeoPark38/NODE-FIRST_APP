const person = {
  name: 'Max',
  age: 29,
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }
};

const leo = ['Sport', 'Cooking', 10]

// for ( let test of leo){
//   console.log(test);
// }

console.log(leo.map(hobby => {
  return "Hobby : "+ hobby;
} ));

console.log(leo);