const ftoc = function(t1) {
  let celsius = (t1 - 32) * 5/9;

  return Number(Math.round(celsius+'e1')+'e-1');
};

const ctof = function(t2) {
  let Fahrenheit = (t2 * 9 /5) + 32;
  
  return Number(Math.round(Fahrenheit+'e1')+'e-1'); 

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
