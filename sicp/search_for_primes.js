// Using Source 1
// Exercise 1.22 SICP

// searches for prime numbers in the consective odd numbers between start and end, inclusive
function search_for_primes(start, end) {
    function sfp_iter(curr) {
        timed_prime_test(curr);
        return curr + 2 > end
        ? true
        : sfp_iter(curr + 2);
    }
    return start % 2 === 0
    ? sfp_iter(start + 1)
    : sfp_iter(start);
}

// necessary functions
function square(x) {
    return x * x;
}

function smallest_divisor(n) {
    return find_divisor(n, 2);
}
function find_divisor(n, test_divisor) {
    return square(test_divisor) > n
           ? n
           : divides(test_divisor, n)
           ? test_divisor
           : find_divisor(n, test_divisor + 1);
}
function divides(a, b) {
    return b % a === 0;
}

function is_prime(n) {
    return n === smallest_divisor(n);
}

function timed_prime_test(n) {
    return start_prime_test(n, get_time());
}

function start_prime_test(n, start_time) {
    return is_prime(n)
           ? report_prime(get_time() - start_time, n)
           : true;
}

function report_prime(elapsed_time, n) {
    display(n);
    display(" *** ");
    display(elapsed_time);
}

search_for_primes(1000, 10000);
