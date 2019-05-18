var Benchmark = require('benchmark');
var suite = new Benchmark.Suite('nCr test');
// this function finds the number of r-subsets of an n-set; remember, it only finds the number of r-subsets
// @param n: the number of elements in the set
// @param r: the number of elements to be selected at once
function ncr(n, r) {
    if (r === 0 || r === n) {
        return 1;
    }
    return ncr(n - 1, r - 1) + ncr(n - 1, r);
}
let values = {};
// this function finds the number of combinations of a set using memoization
// stores(caches) the values of some calculations in a hash table
// @param n: the number of elements in the set
// @param r: the number of elements to be selected
function ncrmemo(n, r) {
    if (r === 0 || r === n) {
        return 1;
    }
    if (n-r < r) {
        r = n-r;
    }
    // ncr(n, r) = ncr(n-1, r-1) + ncr(n-1,r)
    let value = values[n+"c"+r];
    if (value === undefined) {
        var value1 = ncrmemo(n - 1, r - 1);
        var value2 = ncrmemo(n - 1, r);
        value = value1+value2;
        values[n+"c"+r] = value;
    }
    return value;
}
function ncrdirect(n, r) {
    if (n-r < r) {
        r = n-r;
    }
    var value = 1;
    for (var i = r; i > 0; i--) {
        value *= n-i+1;
        value /= r-i+1;
    }
    return value;
}
const n = 1000;
const r = 996;

console.time('ncrdirect');
console.log(ncrdirect(n, r));
console.timeEnd('ncrdirect');
console.time('ncrmemo');
console.log(ncrmemo(n, r));
console.timeEnd('ncrmemo');
// console.time('ncr');
// console.log(ncr(n, r));
// console.timeEnd('ncr');
// suite.add('nCr', ncr(10, 5))
//     .add('nCr memo', ncrmemo(10, 5))
//     .on('cycle', function (event) {
//         console.log(String(event.target));
//     })
//     .on('complete', function() {
//     console.log('Fastest is ' + this.filter('fastest').map('name'));})
//     .run();