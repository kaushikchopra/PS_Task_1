function factorial(n) {
    if (n < 0) {
        return undefined; // Return undefined for negative numbers
    } else if (n === 0) {
        return 1; // Return 1 for the factorial of 0
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply the result by each integer from 1 to n
    }

    return result;
}

// Example usage:
console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
