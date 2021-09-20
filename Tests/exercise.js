let number = 12;

function countDigitsInNumber(num) {
    return num.toString().length;
}

function isPerfectNumber(num) {
    let counter = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            counter += i;
        }
    }
    return (counter === num) ? true : false;
}

function perfectArray(num) {
    let arr = [];
    for (let i = 2; i < num; i++) {
        if (isPerfectNumber(i)) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(countDigitsInNumber(number));
console.log(perfectArray(32));

module.exports = {countDigitsInNumber, number, isPerfectNumber, perfectArray};
