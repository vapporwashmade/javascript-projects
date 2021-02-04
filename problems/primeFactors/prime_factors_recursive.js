function generatePrimes(maximum) {
    var max_sqrt = Math.sqrt(maximum);
    var range = [];
    for (var i = 2; i < maximum; i++) {
        range.push(i);
    }
    for (i = 0; i < max_sqrt; i++) {
        range = range.filter(function (n) {
            return (n === range[i] || n % range[i] !== 0);
        });
    }
    return range;
}
var primeNumbers = generatePrimes(1234567892);
console.log('generated primes');
function primeFactorizeRecursive(num) {
    for (var i = 0; i < primeNumbers.length; i++) {
        if (num % primeNumbers[i] === 0) {
            break;
        }
    }
    if (num / primeNumbers[i] === 1) {
        return [num];
    } else {
        var primeFactors = [primeNumbers[i]];
        return primeFactors.concat(primeFactorizeRecursive(num / primeNumbers[i]));
    }
}
console.log(primeFactorizeRecursive(12345678910));