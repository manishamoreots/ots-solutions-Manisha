// Memorizad Sum of Numbers
// function sumofNumbers() {
//   let cache = {};
//   return function (x, y) {
//     if (cache[(x, y)]) {
//       console.log(`Already calculated sum: ${x} ${y}`);
//       return cache[(x, y)];
//     }
//     console.log(`Sum of ${x} ${y} is:`);
//     const result = x + y;
//     cache[(x, y)] = result;
//     console.log(result);
//   };
// }
// const memorized = sumofNumbers();
// memorized(4, 5);
// memorized(16, 10);
// memorized(4, 5);

//function currying

// Read about Function Currying & Create a Program to print list of names.
// Example -
// printList("Akshay")("Khurana")("Manisha")("Rahul") -
// Output - Names are -  Akshay, Khurana, Manisha, Rahul

function outer() {
let result=[];
  return function listOfNames(x) {
    if (!x) {
      return result;
    }
    result = result + " " + x;
     return listOfNames;

  };
}

const listOfNames = outer();
console.log(listOfNames("Names are -")("Akshay,")("Khurana,")("Manisha,")("Rahul")());
