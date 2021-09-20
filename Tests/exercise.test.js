const { test, expect } = require('@jest/globals');
const { countDigitsInNumber, number, isPerfectNumber, perfectArray } = require('./exercise');

expect.extend({
    toBeInt(received) {
        if (received - parseInt(received) === 0) {
            return {
                message: () => {
                    return `expected ${received} is the int number.`;
                },
                pass: true
            }
        } else {
            return {
                message: () => {
                    return `expected ${received} is the float number.`;
                },
                pass: false
            }
        }
    }
});

expect.extend({
    toBeNumber(received) {
        if (typeof received === 'number') {
            return {
                message: () => {
                    return `expected ${received} is the number.`;
                },
                pass: true
            }
        } else {
            return {
                message: () => {
                    return `expected ${received} is not the number.`;
                },
                pass: false
            }
        }
    }
});

// natural number
describe('Describe number value', () => {
    test('Check if the value is number', () => {
        expect(number).not.toBeNaN();
        expect(number).toBeNumber();
    });

    test('Check if the number is natural', () => {
        expect(number).toBeGreaterThan(0);
        expect(number).toBeInt();
    });

    test('Check if the number is defined', () => {
        expect(number).toBeDefined();
        expect(number).not.toBeUndefined();
    });
});

// function countDigitsInNumber
describe('Describe countDigitsInNumber function', () => {
    test('Should return an amount of digits in the number', () => {
        expect(countDigitsInNumber(5)).toBe(1);
        expect(countDigitsInNumber(456)).toBe(3);
        expect(countDigitsInNumber(1182)).toBe(4);
    });

    test('Check if the function is defined', () => {
        expect(countDigitsInNumber).toBeDefined();
        expect(countDigitsInNumber).not.toBeUndefined();
    });
});

// function isPerfectNumber
describe('Describe isPerfectNumber function', () => {
    test('Should return the perfect number', () => {
        expect(isPerfectNumber(6)).toBeTruthy();
        expect(isPerfectNumber(28)).toBeTruthy();
    });

    test('Check if the function is defined', () => {
        expect(isPerfectNumber).toBeDefined();
        expect(isPerfectNumber).not.toBeUndefined();
    });
});

// function perfectArray
describe('Describe perfectArray function', () => {
    test('Should return the array of perfect number to current number', () => {
        expect(perfectArray(10)).toEqual([6]);
        expect(perfectArray(31)).toEqual([6, 28]);
    });

    test('Check if the function is defined', () => {
        expect(perfectArray).toBeDefined();
        expect(perfectArray).not.toBeUndefined();
    });
});