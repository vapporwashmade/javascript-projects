// Exercise 1.11 SICP
// f(n) = n if n < 3
// f(n) = f(n-1) + 2f(n-2) + 3f(n-3) if n >= 3

// Recursive implementation of function f(n)
function f(n) {
    return n < 3
    ? n
    : f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3));
}

// Iterative implemenation of function f(n)
function f_iter(n) {
    return 
}