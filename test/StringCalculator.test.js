const add = require('../src/StringCalculator');


//null string
test('no numbers: \"\"-> 0', () => {
    expect(add("")).toBe(0);
});

//one number
test('one number: \"1\"-> 1', () => {
    expect(add("1")).toBe(1);
});

test('two numbers: \"1,2\"-> 3', () => {
    expect(add("1,2")).toBe(3);
});

test('numbers with new line: \"1,2\n3\"-> 6', () => {
    expect(add("1,2\n3,")).toBe(6);
});

test('numbers with new line and null string: \"1,2\n3,,4\"-> 10', () => {
    expect(add("1,2\n3,,4")).toBe(10);
});

test('3 digits numbers: \"1,2\n3,450\"-> 456', () => {
    expect(add("1,2\n3,450")).toBe(456);
});

test('more than 2 numbers: \"1,2,3,4,5,6,7,12\"-> 40', () => {
    expect(add("1,2,3,4,5,6,7,12")).toBe(40);
});

test('more than 2 numbers: \"1,2,3,4,5,6,7,12,1,2,3,4,4,6,7,12\"-> 79', () => {
    expect(add("1,2,3,4,5,6,7,12,1,2,3,4,4,6,7,12")).toBe(79);
});

test('way more than 2 numbers: \"1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1\"-> 19', () => {
    expect(add("1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1")).toBe(19);
});

test('new line and 2 digits numbers: \"1,2,3,4\n5,6,7\n12\"-> 40', () => {
    expect(add("1,2,3,4\n5,6,7\n12")).toBe(40);
});

test('no delimiter, just new line: \"1\n2\n3\n4\n5\n6\n7\n12\"-> 40', () => {
    expect(add("1\n2\n3\n4\n5\n6\n7\n12")).toBe(40);
});

test('custom delimiter, 2 numbers, no new lines: \"//;\n1;2\"-> 3', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('custom delimiter with more than 1 char, no new lines: \"//ciao\n1ciao2\"-> 3', () => {
    expect(add("//ciao\n1ciao2")).toBe(3);
});

test('custom delimiter, 2 numbers, new lines: \"//;\n1;2\n3\"-> 6', () => {
    expect(add("//;\n1;2\n3")).toBe(6);
});

test('custom delimiter with more than 1 char, new lines: \"//ciao\n1ciao2\n3\"-> 6', () => {
    expect(add("//ciao\n1ciao2\n3")).toBe(6);
});

test('\".\" as a delimiter: \"//.\n1.2\n3\n4.5\"-> 15', () => {
    expect(add("//.\n1.2\n3\n4.5")).toBe(15);
});

test('\"?\" as a delimiter: \"//?\n1?2\n3\n4?5\"-> 15', () => {
    expect(add("//?\n1?2\n3\n4?5")).toBe(15);
});

test('\"*\" as a delimiter: \"//*\n1*2\n3\n4*5\"-> 15', () => {
    expect(add("//*\n1*2\n3\n4*5")).toBe(15);
});

test('\"****\" as a delimiter: \"//****\n1****2\n3\n4****5\"-> 15', () => {
    expect(add("//****\n1****2\n3\n4****5")).toBe(15);
});

test('\"+\" as a delimiter: \"//+\n1+2\n3\n4+5\"-> 15', () => {
    expect(add("//+\n1+2\n3\n4+5")).toBe(15);
});

test('\"+?\" as a delimiter: \"//+\n1+2\n3\n4+5\"-> 15', () => {
    expect(add("//+?\n1+?2\n3\n4+?5")).toBe(15);
});

test('\"*?\" as a delimiter: \"//*?\n1*?2\n3\n4*?5\"-> 15', () => {
    expect(add("//*?\n1*?2\n3\n4*?5")).toBe(15);
});

test('number below 0: \"-1,2\n3\"-> negatives not allowed -1', () => {
    expect(() => { add("-1,2\n3,") }).toThrow('negatives not allowed -1');
});

test('number below 0: \"//;\n1;2\n3\n4;-5\"-> negatives not allowed -5', () => {
    expect(() => { add("//;\n1;2\n3\n4;-5") }).toThrow('negatives not allowed -5');;
});

test('numbers below 0: \"//;\n-11;2\n3\n4;-5\"-> negatives not allowed -11,-5', () => {
    expect(() => { add("//;\n-11;2\n3\n4;-5") }).toThrow('negatives not allowed -11,-5');;
});

test('numbers below 0: \"-1,-2,-3,-4,-5\"-> negatives not allowed -1,-2,-3,-4,-5', () => {
    expect(() => { add("-1,-2,-3,-4,-5") }).toThrow('negatives not allowed -1,-2,-3,-4,-5');;
});

test('number > 1000: \"1,2\n3000\"-> 3', () => {
    expect(add("1,2\n3000,")).toBe(3);
});

test('\"+?\" as a delimiter and number > 1000: \"//+\n1+2\n3\n4+5000\"-> 10', () => {
    expect(add("//+?\n1+?2\n3\n4+?5000")).toBe(10);
});

test('1000+18-> 1018', () => {
    expect(add("1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1000,1,1,1")).toBe(1018);
});