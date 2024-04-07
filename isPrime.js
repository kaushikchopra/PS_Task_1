function isPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}


console.log(isPrime(1)) // false
console.log(isPrime(2)) // true
console.log(isPrime(3)) // true
console.log(isPrime(15)) // false
console.log(isPrime(53)) // true
console.log(isPrime(60)) // false
console.log(isPrime(71)) // true
console.log(isPrime(99)) // false