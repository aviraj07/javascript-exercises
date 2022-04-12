const add = function(num1, num2) {
	 return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce(function(total,  current){
    return total+current;
  },0)
};

const multiply = function(arr) {
  return arr.length ? arr.reduce((result, item)=>result*item) : 0;

};

const power = function(a,b) {
  return Math.pow(a,b);
	
};

const factorial = function(n) {
  if (n === 0) return 1;
  let result = 1;
  for(let i = n; i > 0; --i)
  result *= i;

  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
