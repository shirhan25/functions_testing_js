const sum = function(a, b){
    return a + b;
};

const subtract = function(number1,number2){
    return number1 - number2
};

const multiply = function(number1,number2) {
    return number1 * number2
};

const divide = function(number1,number2){
    return number1/number2
};

const modulus = function(number1, number2) {
    return number1 % number2
};

const even = function(number){
    isEven= false;
    //divides by 2 with no remainder 
    if(number % 2 == 0){
     isEven=true;
     return isEven
    }
    else {return isEven};
};

const odd = function(number){
    isOdd= false;
    //If there is a remainder when dividing, then num is odd
    if(number % 2 != 0){
        isOdd=true;
        return isOdd
    }
    else {return isOdd};
};



module.exports = { 
    sum, 
    subtract, 
    multiply, 
    divide, 
    modulus, 
    even, 
    odd 
};
