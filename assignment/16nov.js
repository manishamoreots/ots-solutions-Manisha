//--------------------settimeout---------------------

// setTimeout(() => {
//   console.log("Hello");
// }, 1000);

//---------------------Resolved-----------------------

// let promise1 = new Promise(function (resolve) {
//   setTimeout(function () {
//     resolve("Resolved!");
//   }, 1000);
// });
// console.log(promise);

//-------------------Rejected-------------------------

let promise2 = new Promise(function (reject) {
  setTimeout(function () {
    reject("Rejected!");
  }, 1000);
});
console.log(promise2);
