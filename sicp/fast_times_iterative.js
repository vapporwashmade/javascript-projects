// Using Source 1
// Exercise 1.18 SICP
// Iterative implementation of fast_times

function fast_times_iter(a, b) {
    function fast_times_int(x, y, z) {
        return z === 0
        ? y
        : is_even(z)
        ? fast_times_int(double(x), y, halve(z))
        : fast_times_int(x, x + y, z - 1);
    }
    return fast_times_int(a, 0, b);
}

function is_even(n) {
    return n % 2 === 0;
}

function halve(n) {
    return n / 2;
}

function double(n) {
    return n + n;
}
