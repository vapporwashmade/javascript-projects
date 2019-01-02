// a caret matches the beginning of input
var regex1 = /^A/;
// this does not match 'an A' but it does match 'An E'
console.log(regex1.test('NOT ACTUALLY')); // returns false
console.log(regex1.test('ACTUALLY')); // returns true

// a dollar sign matches end of input
regex1 = /t$/;
// this does not match 'tab' but it does match 'bat'
console.log(regex1.test('pass test')); // returns true
console.log(regex1.test('test failed')); // returns false

// h