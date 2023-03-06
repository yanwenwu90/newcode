/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  //   var binA = parseInt(a, 2);
  //   var binB = parseInt(b, 2);
  //   var res = binA + binB;
  //   return res.toString(2);

  return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));
