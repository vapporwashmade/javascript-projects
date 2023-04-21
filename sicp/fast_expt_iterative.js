// Using Source 1
// Exercise 1.16 SICP
// Iterative implementation of fast_expt

function fast_expt_iter(b, n) {
    function fast_expt_int(x, y, z) {
        return x === 0
        ? y
        : is_even(x)
        ? fast_expt_int(x / 2, y, square(z))
        : fast_expt_int(x - 1, y * z, z);
    }
    return fast_expt_int(n, 1, b);
}

function is_even(n) {
    return n % 2 === 0;
}

function square(n) {
    return n * n;
}
