const ftoc = function(temp) {
    let cel = (temp - 32) * 5/9;

    cel = Math.round(cel*10)/10;
    return cel;
};

const ctof = function(temp) {
  let farhen = temp * 9/5 + 32;

  farhen = Math.round(farhen*10)/10;
  return farhen;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
 