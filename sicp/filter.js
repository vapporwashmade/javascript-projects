// Using Source 1
// Exercise 1.33 SICP

function filtered_accumulate(combiner, null_value, term, a, next, b, filter) {
    return a > b
    ? null_value
    : filter(a)
    ? combiner(term(a), filtered_accumulate(combiner, null_value, term, next(a), next, b, filter))
    : filtered_accumulate(combiner, null_value, term, next(a), next, b, filter);
}

function filtered_accumulate_iter(combiner, null_value, term, a, next, b, filter) {
    function filter_iter(curr, total) {
        return curr > b
        ? total
        : filter(curr)
        ? filter_iter(next(curr), combiner(total, term(curr)))
        : filter_iter(next(curr), total);
    }
    return filter_iter(a, null_value);
}

// calculates the sum of the squares of prime numbers between a and b, inclusive
function primes_square_sum(a, b) {
    return filtered_accumulate_iter(
        (x, y) => (x + y),
        0,
        x => square(x),
        a,
        x => x + 1,
        b,
        is_prime);
}

// calculates the product of all the positive integers less than n
// that are relatively prime to n
function coprime_product(n) {
    function is_coprime(i) {
        return gcd(n, i) === 1;
    }
    return filtered_accumulate_iter(
        (x, y) => x * y,
        1,
        x => x,
        1,
        x => x + 1,
        n,
        is_coprime);
}

// necessary functions
function square(n) {
    return n * n;
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

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
