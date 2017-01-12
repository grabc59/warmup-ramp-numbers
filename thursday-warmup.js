// Ramp Numbers
//
// A ramp number is a number whose digits from left to right either only rise or stay the same. 1234 is a ramp number as is 1124. 1032 is not.
//
// **Input**
//
// A positive integer, n.
//
// **Output**
//
// true if the input is a ramp number, false if it is not
'use strict';
function isRampNumber(n){
let stringN = n.toString();
let last = '0';
// loop through the digits in the Input
for (var i = 0; i < stringN.length; i++) {
  // test the current digit against the last digits
  if (stringN[i] >= last) {
    last = stringN[i];
    // continue the loop
  } else {
    console.log('false');
    return false;
  }
}
console.log('true');
return true;
}
isRampNumber(1234);
