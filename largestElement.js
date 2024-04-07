function largestElementInArray(arr) {
    if (arr.length === 0) {
        return undefined; // Return undefined for empty arrays
    }

    let maxNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) maxNum = arr[i]; // Assign the arr[i] as the new maxNum.
    };

    return maxNum;
}

// Time Complexity: O(n); Space Complexity: O(1)

console.log(largestElementInArray([1, 3, 4, 45, 90, 11, 23])) // 90
console.log(largestElementInArray([1, 3, 4, 45, 11, 23])) // 45