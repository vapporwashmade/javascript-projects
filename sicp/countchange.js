// Type your program in here!

function highest_remaining(num) {
    return num === 5
    ? 50
    : num === 4
    ? 25
    : num === 3
    ? 10
    : num === 2
    ? 5
    : 1;
}

function f(n, k) {
    const curr = highest_remaining(k);
    return k < 1
    ? 0
    : n === 0
    ? 1
    : n < curr
    ? f(n, k - 1)
    : f(n - curr, k) + f(n, k - 1);
}

f(100, 5);