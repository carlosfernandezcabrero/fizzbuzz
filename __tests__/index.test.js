import { fizzbuzz } from "../src";

describe("Fizzbuzz", () => {
    test("Should print num when num is not multiple of 3 or 5", () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(expected).toBe(result);
    });

    test("Should print Fizz if num is multiple of 3", () => {
        const expected = "Fizz";
        const result = fizzbuzz(21);
        expect(expected).toBe(result);
    });

    test("Should print Buzz if num is multiple of 5", () => {
        const expected = "Buzz";
        const result = fizzbuzz(20);
        expect(expected).toBe(result);
    });

    test("Should print FizzBuzz if num is multiple of 3 and 5", () => {
        const expected = "FizzBuzz";
        const result = fizzbuzz(30);
        expect(expected).toBe(result);
    });
});
