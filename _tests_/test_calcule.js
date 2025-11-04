import { add, subtract, multiply, power } from 'calculator.html';

describe('Calculs Utility Functions', () => {
    test('should correctly add two numbers', () => {
        expect(add(2, 3)).toBe(5);
        expect(add(-1, 5)).toBe(4);
        expect(add(0, 0)).toBe(0);
    });

    test('should correctly subtract two numbers', () => {
        expect(subtract(10, 5)).toBe(5);
        expect(subtract(5, 10)).toBe(-5);
    });

    test('should correctly multiply two numbers', () => {
        expect(multiply(4, 5)).toBe(20);
        expect(multiply(-2, 5)).toBe(-10);
    });

    test('should correctly calculate power', () => {
        expect(power(2, 3)).toBe(8);
        expect(power(5, 2)).toBe(25);
        expect(power(10, 0)).toBe(1);
    });
});