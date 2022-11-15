const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

// 1st Question Answer:-

// const output1 = users
//   .filter((curr) => {
//     if (curr.gender == "female") {
//       return true;
//     }
//   })
//   .map((curr) => {
//     return `My name is ${curr.firstName + " " + curr.lastName}. I am ${
//       curr.age
//     } years old.`;
//   });

// console.log(output1);

const finalArray1 = users.reduce((acc, currentValue) => {
  if (currentValue.gender == "female") {
    acc.push(
      `My name is ${currentValue.firstName} ${currentValue.lastName}. I am ${currentValue.age} years old.`
    );
  }
  return acc;
}, []);

console.log(finalArray1);

/*
1st Output : [  'My name is Riya Rajput. I am 34 years old.',
               'My name is Simran Kapoor. I am 27 years old.']
*/

// 2nd Question Answer:-

const finalArray = users.reduce((acc, currentValue) => {
  if (currentValue.age == 27) {
    acc.push(currentValue.firstName + " " + currentValue.age);
  }
  return acc;
}, []);

console.log(finalArray);

/*
2nd Output :  ['Akshay 27', 'Simran 27']
*/
