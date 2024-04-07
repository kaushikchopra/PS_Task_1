function secondLargestElement(arr) {
    if (arr.length < 2) return undefined;

    let maxNum = arr[0];
    let secondMaxNum = -Infinity;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            secondMaxNum = maxNum; // Update the secondMaxNum if new maximum is found
            maxNum = arr[i];
        } else if (arr[i] > secondMaxNum && arr[i] < maxNum) {
            secondMaxNum = arr[i]; // Update secondMaxNum if a new second maximum is found
        }
    }

    // If secondMaxNum remains negative infinity, no distinct second maximum was found
    if (secondMaxNum === -Infinity) {
        return undefined;
    }

    return secondMaxNum;
}

// Time Complexity: O(n); Space Complexity: O(1)

console.log(secondLargestElement([3, 7, 2, 9, 4])); // 7
console.log(secondLargestElement([1, 2, 3, 4, 5])); // 4
console.log(secondLargestElement([5, 4, 3, 2, 1])); // 4
console.log(secondLargestElement([2, 2, 2, 2, 2])); // undefined (No distinct second largest element)
console.log(secondLargestElement([9, 9, 9, 9, 9])); // undefined (No distinct second largest element)
console.log(secondLargestElement([5])); // undefined (Array with less than two elements)
console.log(secondLargestElement([])); // undefined (Empty array)