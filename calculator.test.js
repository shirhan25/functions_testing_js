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

  test('can get remainder when dividing two positive numbers', () => {
    expected = 1;
    actual = modulus(11, 5);
    expect(actual).toBe(expected);
  });

  test('can get remainder when dividing two positive large numbers', () => {
    expected = 3;
    actual = modulus(134888, 5);
    expect(actual).toBe(expected);
  });

  test('can get remainder when dividing two negative large numbers', () => {
    expected = -2087;
    actual = modulus(-1539372, -11735);
    expect(actual).toBe(expected);
  });


});

describe('even', () => {
  test('can check if even number is even', () => {
    expected = true;
    actual = even(4);
    expect(actual).toBe(expected);
  });

  test('can check if odd number returns false', () => {
    expected = false;
    actual = even(7);
    expect(actual).toBe(expected);
  });
  
});

describe('odd', () => {

  test('can check if odd number is odd', () => {
    expected = true;
    actual = odd(7);
    expect(actual).toBe(expected);
  });

  test('can check if even number returns false', () => {
    expected = false;
    actual = odd(4);
    expect(actual).toBe(expected);
  });



});
