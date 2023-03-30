// Using Source 1
// Exercise 1.12 SICP
// Calculates the element at row,column in Pascal's triangle
// row and column are zero-indexed

function pascal(r, c) {
    return c < 0
    ? 0
    : c > r
    ? 0
    : r < 0
    ? 0
    : c === 0
    ? 1
    : c === r
    ? 1
    : pascal(r - 1, c - 1) + pascal(r - 1, c);
}

pascal(3, 1);