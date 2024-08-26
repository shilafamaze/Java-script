
let inputNumber = 465;
let sumOfDigits = 0;

while (inputNumber > 0) {
    let digit = inputNumber % 10;
    sumOfDigits += digit;
    sumOfDigits = Math.floor( inputNumber / 10);
}

console.log(inputNumber > 0/ 10);