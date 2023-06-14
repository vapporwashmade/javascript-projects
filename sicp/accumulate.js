// Using Source 1
// Exercise 1.32 SICP

function accumulate_recur(combiner, null_value, term, a, next, b) {
    return a > b
    ? null_value
    : combiner(term(a), accumulate_recur(combiner, null_value, term, next(a), next, b));
}

function accumulate_iter(combiner, null_value, term, a, next, b) {
    function acc(curr, total) {
        return curr > b
        ? total
        : acc(next(curr), combiner(total, term(curr)));
    }
    return acc(a, null_value);
}

function product(term, a, next, b) {
    return accumulate_iter((x, y) => x * y, 1, term, a, next, b);
}

function sum(term, a, next, b) {
    return accumulate_iter((x, y) => x + y, 0, term, a, next, b);
}
