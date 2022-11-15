// 1. Question

//   Using reduce,
//   Get this Output -> ["Salman Khan", "Riya Rajput"]
//   Hint -> Initial Value of Accumulator -> []

const users = [
  { firstName: "Akshay", lastName: "Khurana", age: 27 },
  { firstName: "Salman", lastName: "Khan", age: 55 },
  { firstName: "Riya", lastName: "Rajput", age: 34 },
  { firstName: "Simran", lastName: "Kapoor", age: 27 },
];

const finalArray = users.reduce((accumulator, currentValue)=> {
    if(currentValue.age>27){
  accumulator.push( currentValue.firstName  + " " + currentValue.lastName);
  }return accumulator;
  
}, []);

console.log(finalArray);

// 2. Question
/*
  const users = [
      { firstName: "Akshay", lastName: "Khurana", age: 27, gender: "male" },
      { firstName: "Salman", lastName: "Khan", age: 55, gender: "male" },
      { firstName: "Riya", lastName: "Rajput", age: 34, gender: "female" },
      { firstName: "Simran", lastName: "Kapoor", age: 27. gender: "female" },
  ];
  Output ->
  [
      {fullName: "Akshay Khurana", age: 27},
      {fullName: "Salman Khan", age: 55}
  ]
*/
