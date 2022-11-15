
// Memorizad Sum of Numbers
function sumofNumbers() {
  let cache = {};
  return function (x, y) {
    if (cache[(x, y)]) {
      console.log(`Already calculated sum: ${x} ${y}`);
      return cache[(x, y)];
    }
    console.log(`Sum of ${x} ${y} is:`);
    const result = x + y;
    cache[(x, y)] = result;
    console.log(result);
  };
}
const memorized = sumofNumbers();
memorized(4, 5);
memorized(16, 10);
memorized(4, 5);

function cube() {
  let cache = {};
  return function (x) {
    if (cache[x]) {
      console.log(`Already calculated cube: ${x}`);
      return cache[x];
    }
    console.log(`calculated cube: ${x}`);
    const result = Math.pow(x, 3);
    cache[x] = result;
    console.log(result);
  };
}
const memoized1 = cube();
memoized1(4);
memoized1(8);
memoized1(4);
