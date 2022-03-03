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
  test('can multiply two small positive numbers', () => {
    expected = 50;
    actual = multiply(10, 5);
    expect(actual).toBe(expected);
  });

  test('can multiply  two large positive numbers', () => { 
   expected = 200000000; 
   actual = multiply(20000,10000);
   expect(actual).toBe(expected);
  });

  test('can multiply two negative numbers', () => {
    expected = 100000000; 
   actual = multiply(-10000,-10000);
   expect(actual).toBe(expected);
  });

  test('can multiply zero', () => {
    expected = 0; 
    actual = multiply(10000,0);
    expect(actual).toBe(expected); 
  });




});

describe('divide', () => {

  test('can divide two small positive numbers', () => {
    expected = 2;
    actual = divide(10, 5);
    expect(actual).toBe(expected);
  });

  test('can divide  two large positive numbers', () => { 
   expected = 2; 
   actual = divide(20000,10000);
   expect(actual).toBe(expected);
  });

  test('can divide two negative numbers', () => {
    expected = 1; 
   actual = divide(-10000,-10000);
   expect(actual).toBe(expected);
  });

  test('can divide by zero', () => {
    expected = Infinity; // Dividing by 0 in JS yields Infinity
    actual = divide(10000,0);
    expect(actual).toBe(expected); 
  });

});

describe('modulus', () => {

});

describe('even', () => {

});

describe('odd', () => {

});
