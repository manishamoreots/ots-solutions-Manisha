//1. Solve this pattern

/*
     *1
    **12
   ***123
  ****1234
 *****12345
******123456

*/

// i = 2, Space = 5
// i = 4, Space = 4
// i = 6, Space = 3
// i = 8, Space = 2
// i = 10, Space = 1
// i = 12, Space = 0

let mycounter = 5;
for (let i = 1; i <= 6; i = i + 1) {
  var text = "";
  //  Space
  for (let j = 1; j <= mycounter; j++) {
    text = text + " ";
  }
  // Printing *
  for (let k = 1; k <= i; k++) {
    text = text + "*";
  }
  //Number
  for (let l = 1; l <= i; l++) {
    if (l >= 1) {
      text = text + l;
    }
  }

  console.log(text + "\n");
  mycounter--;
}

//---------------------------------------------------------------------------------
const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
  { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
  { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
  { firstName: "Simran", lastName: "Kapoor", age: 27, gender: "female" },
];

// /*
// Output ->
// Using Reduce ->
// [
//     "Names - Akshay Khurana, Salman Khan, Riya Rajput, Simran Kapoor",
//     "Sum of there age - SUM"
// ]

// */

const finalOutput = users.reduce((acc, currentValue) => {
  acc.push(`${currentValue.firstName} ${currentValue.lastName}`);

  return acc;
}, []);
console.log(finalOutput);

const finalOutput1 = users.reduce((acc, currentValue) => {
  return acc + currentValue.age;
}, 0);
console.log(finalOutput1);

//--------------------------------------------------------------------

// Create Function with Spread Operator used Sring Literals also.

// const subjects = [
//   "C++",
//   "JavaScript",
//   "React",
//   "MongoDB",
//   "NodeJs",
//   "ExpressJs",
// ];

// const allSubjects = [...subjects];
// console.log(allSubjects);


