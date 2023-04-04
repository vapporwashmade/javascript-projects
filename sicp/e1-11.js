// Using Source 1
// Exercise 1.11 SICP
// f(n) = n if n < 3
// f(n) = f(n-1) + 2f(n-2) + 3f(n-3) if n >= 3

// Recursive implementation of function f(n)
function f(n) {
    return n < 3
    ? n
    : f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3));
}

// Iterative implementation of function f(n)
function f_iter(n) {
    function f_int(r1, r2, r3, c) {
        return c === n
        ? r1
        : f_int(r1 + 2 * r2 + 3 * r3, r1, r2, c + 1);
    }
    return n < 3
    ? n
    : f_int(2, 1, 0, 2);
}
