// let no = 195;
// let res = no.toString().split("").reverse().join("");
// console.log(res);

// function revNum(num) {
//   console.log(num.toString().split("").reverse().join(""));
// }
// revNum(891);

// // let nom = 123;
// // let final = nom.toString().split("").reverse().join("");
// // console.log(final);

// // let firstName = "OTS Solutions";
// // let result = firstName.split("").reverse().join("");
// // console.log(result);

// /*

//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *


// i = 1, Space = 3
// i = 3, Space = 2
// i = 5, Space = 1
// i = 7, Space = 0
var text = "";
let spaceCounter = 3;
for (let i = 1; i <= 7; i = i + 2) {

// Loop for Space
for (let k = 1; k <= spaceCounter; k++) {
  text = text + " ";
}
// Loop for Printing *
for (let j = 1; j <= i; j++) {
  text = text + "*";
}
console.log(text + "\n");
spaceCounter--;
}

// i = 5, Space = 1
// i = 3, Space = 2
// i = 1, Space = 3


spaceCounter=1;
for (let i = 5; i >= 1; i = i - 2) {
    var text = "";
    // Loop for Space
    for (let k = 1; k <= spaceCounter; k++) {
      text = text + " ";
    }
    // Loop for Printing *
    for (let j = 1; j <= i; j++) {
      text = text + "*";
    }
    console.log(text + "\n");
    spaceCounter++;
    }


//Given a string

//Ex -

//A man is walking beside the road
//A* man** is*** walking**** beside***** the****** road*******

// let str = "A man is walking beside the road";
// let newstr = str.split(" ");
// console.log(newstr);

// for (let i = 0; i < newstr.length(); i++) {
//   for (let j = 0; j < i; j++) {

//   }
// }
// const a=10;
//  a=20;
// console.log(a);


