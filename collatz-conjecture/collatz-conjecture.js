export function steps(n) {
    if (n <= 0) throw new Error('Only positive numbers are allowed');
    for (var steps = 0; true; steps++) {
        if (n == 1) return steps;
        n = (n % 2 == 0) ? (n / 2) : (3 * n + 1);
    }
}