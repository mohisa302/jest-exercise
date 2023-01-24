const {
  stringLength,
  reverseString,
  calculator,
  capitalize,
} = require('./index');
//Task one
test('length of hello equal 5', () => {
  const newsString = 'hello';
  expect(stringLength(newsString)).toBe(5);
});

test('length is smaller than 10 and bigger than 1', () => {
  const shortString = '';
  const longString = '12345678910';
  expect(() => stringLength(shortString)).toThrow(/^your data is wrong!$/); // Test fails
  expect(() => stringLength(longString)).toThrow(/^your data is wrong!$/); // Test fails
});

//Task two
test('reverse of hello equal to olleh', () => {
  const newsString = 'hello';
  expect(reverseString(newsString)).toBe('olleh');
});

//Task three
describe('calculator behavior', () => {
  test('multiply of 3 and 5 equal 15', () => {
    const newCal = new calculator(3, 5);
    const newMulti = newCal.multiply();
    expect(newMulti).toBe(15);
  });

  test('add of 3 and 5 equal 8', () => {
    const newCal = new calculator(3, 5);
    const newAdd = newCal.add();
    expect(newAdd).toBe(8);
  });

  test('subtrack of 5 and 3 equal 2', () => {
    const newCal = new calculator(5, 3);
    const newSub = newCal.subtract();
    expect(newSub).toBe(2);
  });
});

//Task four
test('first letter uppercase', () => {
  const newCap = capitalize('hello')[0];
  expect(newCap).toBe('H');
});
