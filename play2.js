const person = {
  name: 'Max',
  age: 29,
  greet: function() {
    console.log('Hi, I am ' + this.name);
  }
};

const printName = ({name})=>{
  // console.log(name);
}
person.greet();
printName(person);

console.log(`My name is ${person.name} and I am ${person.age} years old.`);
console.log('ddd ${person.name}');
const {name,age}=person;
// console.log(name,age);


// const coiioedPerson = {...person};
// // console.log(coiioedPerson);

const leo = ['Sport', 'Cooking']
const [hobby1,hobby2] = leo;

//console.log(hobby1,hobby2);
// const coppiedArray = [...leo];
// // console.log(coppiedArray);


// const toArray = (...args) =>{
//   return args;
// }

// console.log(toArray(1,2,3,4));