/*

A
AB
ABC
ABCD
ABCDE
ABCD
ABC
AB
A
*/

// i = 1, Space = 0
// i = 2, Space = 0
// i = 3, Space = 0
// i = 4, Space = 0
// i = 5, Space = 0

// i = 4;
// i = 3;
// i = 2;
// i = 1;
let n = 5;
let text = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    text += String.fromCharCode(j + 65);
  }
  text += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    text += String.fromCharCode(j + 65);
  }
  text += "\n";
}
console.log(text);

//===========================================

// let str = "a man is working beside the road";
// let arr2 = str.split(" ");
// console.log(arr2);

// for (let i = 0; i <= arr2.length; i++) {
//   arr2[i] = arr2[i].padEnd(arr2[i].length + i + 1, "*");

//   let res = arr2.join(" ");
// console.log(res);

// }

//==================================

// let str1 = "My name is Akshay Khurana";
// let arr3 = str1.split(" ");
// console.log(arr3);

// for (let i = 0; i < arr3.length; i++) {
//   arr3[i] = arr3[i].padEnd(arr3[i].length + i + 1, "*");
//   arr3[i] = arr3[i].padStart(arr3[i].length + i + 1, "@");
//
// }

//let result = arr3.join(" ");
//   console.log(result);

//===========================================

/*
 *0
 *0*1
 *0*1*2
 *0*1*2*3
 *0*1*2*3*4
 *0*1*2*3*4*5
 */
// let n = 6;
// let star = "";
// for (let i = 0; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     star += "*" + j;
//   }
//   star += "\n";
// }
// console.log(star);

//==============================================

/*

*
* 2 *
* 2 * 4 *
* 2 * 4 * 6 *
* 2 * 4 * 6 * 8 *
* 2 * 4 * 6 * 8 * 10 *

*/

// for (let i = 1; i <= 11; i = i + 2) {
//   for (let j = 1; j <= i; j++) {
//     if (j % 2 != 0) {
//       document.write("*" + " ");
//     } else {
//       document.write(j + " ");
//     }
//   }
//   document.write("<br/>");
// }
