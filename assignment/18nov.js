// task 1
// call once function
// desc: create a function which can't be called more than once
// function sum (){
// }
// sum()
// sum() // new throw()

// var callOne = function () {
//   let res1 = false;
//   return function () {
//     if (!res1) {
//       res1 = true;
//     }   };
// };
// console.log(callOne());

// var something = (function() {
//   var executed = false;

//   return function(x,y) {
//       if (!executed) {
//           executed = true;
//          console.log("Call once function")
//       }
//   };
// })();
// something()
// something()

// //task 2

// const arr = [[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9];
// create a fucntion to flat the array => [1,2,2,4,5,6,2,4,8,9]

function arrayOuter() {
  let result = [];

  return function flatArray(arr) {
    if (arr == 0) {
      return result;
    } else {
      finalflatArray1 = [].concat.apply([], arr);
      return finalflatArray1;
    }
  };
}
let finalflatArray1 = arrayOuter();
console.log(finalflatArray1([[1, 2], [2, 4, [5, 6, [2, 4]]], 8, 9]));

// //---------------------------------------------------------

// // task 3
// // a = [{name:'amit'}, {name: 'Akshay'}]
// // b = [{name: 'abcd'},{name:'abdc'}, {name:'kjdshck}, {name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]
// // result = [{name: 'Akshay'}, {name: 'akshay'}, {name:'AMit'}]

const array = [{ name: "amit" }, { name: "Akshay" }];

const anotherArray = [
  { name: "Deepa" },
  { name: "John" },
  { name: "krisha" },
  { name: "Akshay" },
  { name: "akshay" },
  { name: "AMit" },
];

const FinalArray = anotherArray.filter((elem) =>
  array.find(({ name }) => elem.name.toLowerCase() == name.toLowerCase())
);

console.log(FinalArray);

// //===============


