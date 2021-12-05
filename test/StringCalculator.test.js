const add = require('../src/StringCalculator');

test('\"\"-> 0', () => {
    expect(add("")).toBe(0);
});

test('\"1\"-> 1', () => {
    expect(add("1")).toBe(1);
});

test('\"1,2\"-> 3', () => {
    expect(add("1,2")).toBe(3);
});