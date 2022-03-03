const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
   expected = 20000; 
   actual = sum(10000,10000);
   expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -20000; 
   actual = sum(-10000,-10000);
   expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 10000; 
    actual = sum(10000,0);
    expect(actual).toBe(expected); 
  });

});

describe('subtract', () => {
  test('can subtract two small positive numbers', () => {
    expected = 5;
    actual = subtract(10, 5);
    expect(actual).toBe(expected);
  });

  test('can subtract two large positive numbers', () => { 
   expected = 10000; 
   actual = subtract(20000,10000);
   expect(actual).toBe(expected);
  });

  test('can subtract two negative numbers', () => {
    expected = 0; 
   actual = subtract(-10000,-10000);
   expect(actual).toBe(expected);
  });

  test('can subtract zero', () => {
    expected = 10000; 
    actual = subtract(10000,0);
    expect(actual).toBe(expected); 
  });
});

describe('multiply', () => {

});

describe('divide', () => {

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
