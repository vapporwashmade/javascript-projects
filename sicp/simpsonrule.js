// Using Source 1
// Exercise 1.29 SICP

// applies simpson's rule to the function f
// finds the integral of f from a to b with n intervals
function simpson(f, a, b, n) {
    const h = (b - a) / n;
    function getnext(c) {
        return c === 0 || c === n
        ? f(a + c * h)
        : c % 2 === 1
        ? 4 * f(a + c * h)
        : 2 * f(a + c * h);
    }
    return (h / 3) * sum(getnext, 0, x => x + 1, n);
}

function sum(term, a, next, b) {
    return a > b
           ? 0
           : term(a) + sum(term, next(a), next, b);
}

function cube(n) {
    return n * n * n;
}

simpson(cube, 0, 1, 1000);
