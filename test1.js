const _isCard = (number) => {
  const regIdCard = /(^\d{18}$)|(^\d{17}[x|X]$)|(^\d{15}$)/;

  return regIdCard.test(number);
};

console.log(_isCard("21062319980907888X"));
console.log(_isCard("21062319980907888x"));
console.log(_isCard("210623199809078882"));
console.log(_isCard("210623199809078"));
console.log(_isCard("21062319980907888"));
console.log(_isCard("21062319980907888r"));
console.log(_isCard("130922199011146038"));
console.log(_isCard("13092219901114603V"));
console.log(_isCard("Y1062319980907888X"));
