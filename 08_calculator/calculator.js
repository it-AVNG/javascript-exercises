const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  let total = 0;
  for (let i=0;i<a.length;i++){
  total = add(total,a[i])}

  return total;
};

const multiply = function(a) {
  let product = 1;
  for (let i=0;i<a.length;i++){
  product = product * a[i]}

  return product;
  
};

const power = function(a,b) {
	let power =1;
  for (let i = 1; i<=3; i++){
  power = power * a;}
  return power;
};

const factorial = function(a) {
	let pound = 1;
  for (let i=1; i<=a;i++){
    pound = pound *i;
  }
  return pound
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
