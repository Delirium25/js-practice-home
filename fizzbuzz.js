const max = 40;

function fizzBuzz(x) {
  if (x % 3 == 0 && x % 5 == 0) {
    return "fizzbuzz";
  }
  if (x % 3 == 0) {
    return "fizz";
  }
  if (x % 5 == 0) {
    return "buzz";
  }

  return x;
}

let result = "";

for (let i = 1; i <= max; i++) {
  result += fizzBuzz(i);

  if (i == max) {
    result += " ♥";
  } else {
    result += ", ";
  }
}

console.log(result);
