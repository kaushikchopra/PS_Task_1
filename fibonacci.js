function fibonacci(n) {
    if (n <= 0) {
        return undefined; // Return undefined for non-positive inputs
    } else if (n === 1 || n === 2) {
        return 1; // Return 1 for the first and second Fibonacci numbers
    }

    let fibPrev = 1;
    let fibCurr = 1;

    for (let i = 3; i <= n; i++) {
        let fibNext = fibPrev + fibCurr;
        fibPrev = fibCurr;
        fibCurr = fibNext;
    }

    return fibCurr;
}

// Time Complexity: O(n); Space Complexity: O(1)

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8
console.log(fibonacci(7)); // 13 