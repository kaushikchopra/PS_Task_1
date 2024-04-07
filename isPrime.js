function isPrime(num) {
    if (num < 2) return false; // Return false for 0 and 1

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Return false if Num is divisible by i
    }

    return true;
}

// Time Complexity: O(sqrt(n)); Space Complexity: O(1)

console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(15)) // false
console.log(isPrime(53)) // true
console.log(isPrime(60)) // false
console.log(isPrime(71)) // true
console.log(isPrime(99)) // false