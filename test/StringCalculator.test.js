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
    expect(add("//*\n1*2\n3\n4*5")).toBe(15);
});

test('\"+\" as a delimiter: \"//+\n1+2\n3\n4+5\"-> 15', () => {
    expect(add("//+\n1+2\n3\n4+5")).toBe(15);
});


test('\"+?\" as a delimiter: \"//+\n1+2\n3\n4+5\"-> 15', () => {
    expect(add("//+?\n1+?2\n3\n4+?5")).toBe(15);
});


test('\"*?\" as a delimiter: \"//+?\n1+?2\n3\n4+?5\"-> 15', () => {
    expect(add("//*?\n1*?2\n3\n4*?5")).toBe(15);
});