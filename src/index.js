export function fizzbuzz(num) {
    if (num % 15 === 0) {
        return "FizzBuzz";
    }
    if (num % 3 === 0) {
        return "Fizz";
    }
    if (num % 5 === 0) {
        return "Buzz";
    }

    return num;
}

(() => {
    for (let i = 1; i < 101; i++) {
        console.log(i + ": " + fizzbuzz(i));
    }
})();
