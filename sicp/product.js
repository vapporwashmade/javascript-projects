// Using Source 1
// Exercise 1.31 SICP

function product_recur(term, a, next, b) {
    return a > b
    ? 1
    : term(a) * product_recur(term, next(a), next, b);
}

function product_iter(term, a, next, b) {
    function iter(curr, total) {
        return curr > b
        ? total
        : iter(next(curr), total * term(curr));
    }
    return iter(a, 1);
}

function factorial(n) {
    return product_iter(x => x, 1, x => x + 1, n);
}

function approxpi1(n) {
    return product_iter(
        x => x + 2 + (x % 2),
        0,
        x => x + 1,
    n) / product_iter(
        x => x + 3 - (x % 2),
        0,
        x => x + 1,
        n) * 4;
}

function approxpi2(n) {
    return product_iter(
        x => (x + 2 + (x % 2)) / (x + 3 - (x % 2)),
        0,
        x => x + 1,
        n) * 4;
}
