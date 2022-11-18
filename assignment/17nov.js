//Memoized Multiplication

function MulofNumbers() {
  let cache = {};
  return function (x, y) {
    if (cache[x + " "+ y]) {
      console.log(`Already calculated Multiplication: ${x} ${y}`);
      return cache[(x, y)];
    }
    console.log(`Multiplication of ${x} ${y} is:`);
    const result = x * y;
    cache[x + " "+ y] = result;
    console.log(result);
  };
}
const memorized = MulofNumbers();
memorized(4, 5);
memorized(16, 10);
memorized(4, 5);
memorized(3, 5);

//Create Constructor function and make object

function Students(FirstName, age, rollNo) {
  this.FirstName = FirstName;
  this.age = age;
  this.rollNo = rollNo;
}
let trainee1 = new Students("Manisha", 24, 1);
console.log(trainee1);

