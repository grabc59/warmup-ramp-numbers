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

function isRampNumber(n) {

    if (!isNaN(n) && n >= 0) {
        let stringN = n.toString();
        let last = '0';

        // loop through the digits in the Input
        for (var i = 0; i < stringN.length; i++) {
            // test the current digit against the last digits
            if (stringN[i] >= last) {
                // the current number is greater than the last number. continue the loop
                // set the current number to the last number for the next comparison.
                last = stringN[i];
            } else {
                // the current number is less than the previous number
                // console.log('false');
                return false;
            }
        }
        // when the loop has gone through all the digits and it hasn't returned false, the number must be a ramp
        // console.log('true');
        return true;

    }
    // console.log('Positive numbers only, please');
    return false;
}

isRampNumber(1234); // ramp number - expect true
isRampNumber(10234); // not a ramp - expect false
isRampNumber('a string'); // not a number - expect the function to quit
isRampNumber(-5); // not a positive number - expect the function to quit

module.exports = {
    isRampNumber: isRampNumber
};
