// Using Source 1
// Exercise 1.17 SICP
// Recursive implementation of fast_times

function fast_times(a, b) {
    return b === 0
    ? 0
    : is_even(b)
    ? double(fast_times(a, halve(b)))
    : a + fast_times(a, b - 1);
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
