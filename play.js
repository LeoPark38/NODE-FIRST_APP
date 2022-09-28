let name ="max";
let age="29";
let hasHobbies =true;

function sum(userName, userAge, userHooby){
  return (
    "name is : "+ userName + "age is :"+userAge+"hobby : "+userHooby
  );
}

const sum2 = (userName, userAge, userHooby) =>{
  return (
    "name is : "+ userName + "age is :"+userAge+"hobby : "+userHooby
  );
}

// ---------------------------------------------------------------------------
//1
const add = (a,b) => {
  return a+b;
};
//2
const add2 = (a,b) => a+b;
//3
//const addOne = (a) => a+1;
const addOne = a => a+1;
//4
const addRandom = () => 1+2;
//--------------------------------------------------------------------------------


console.log(add(1,2));
console.log(sum2(name,age,hasHobbies));