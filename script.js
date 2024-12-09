// Array Problems

// 1. Find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([5, 12, 18, 9])); // Output: 18

// 2. Remove duplicates from an array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([5, 5, 8, 12, 8, 18])); // Output: [5, 8, 12, 18]

// 3. Reverse an array
function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray([5, 12, 18, 9])); // Output: [9, 18, 12, 5]

// 4. Find the second largest element
function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted[1] || null;
}
console.log(findSecondLargest([45, 28, 18, 45, 35])); // Output: 35

// 5. Check if an array is a subset of another
function isSubset(arr1, arr2) {
    return arr2.every(elem => arr1.includes(elem));
}
console.log(isSubset([10, 20, 30, 40, 50], [30, 50])); // Output: true

// String Problems

// 6. Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("world")); // Output: "dlrow"

// 7. Check if a string is a palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("radar")); // Output: true

// 8. Count vowels in a string
function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length;
}
console.log(countVowels("javascript")); // Output: 3

// 9. Find the longest word in a string
function findLongestWord(sentence) {
    return sentence.split(' ').reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
console.log(findLongestWord("Learning JavaScript is fun")); // Output: "JavaScript"

// 10. Check if two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // Output: true

// Data Type Problems

// 11. Check if a variable is an array
function isArray(variable) {
    return Array.isArray(variable);
}
console.log(isArray([1, 2, 3])); // Output: true

// 12. Convert a string to a number
function stringToNumber(str) {
    return Number(str);
}
console.log(stringToNumber("123")); // Output: 123

// 13. Check if a number is an integer
function isInteger(num) {
    return Number.isInteger(num);
}
console.log(isInteger(45.0)); // Output: true

// 14. Get the data type of a variable
function getDataType(variable) {
    return typeof variable;
}
console.log(getDataType(true)); // Output: "boolean"

// 15. Check if a value is null or undefined
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
console.log(isNullOrUndefined(undefined)); // Output: true

// Operator Problems

// 16. Swap two numbers without using a third variable
function swapNumbers(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swapNumbers(5, 8)); // Output: [8, 5]

// 17. Check if a number is even or odd
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(22)); // Output: true

// 18. Find the square of a number
function square(num) {
    return num * num;
}
console.log(square(7)); // Output: 49

// 19. Use the ternary operator for conditions
function checkAge(age) {
    return age >= 18 ? "Adult" : "Minor";
}
console.log(checkAge(16)); // Output: "Minor"

// 20. Check if a number is divisible by another
function isDivisible(num, divisor) {
    return num % divisor === 0;
}
console.log(isDivisible(15, 5)); // Output: true

// Mixed Problems

// 21. Find the sum of an array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([10, 20, 30, 40])); // Output: 100

// 22. Flatten a nested array
function flattenArray(nestedArr) {
    return nestedArr.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4]]]])); // Output: [1, 2, 3, 4]

// 23. Find the frequency of elements in an array
function elementFrequency(arr) {
    return arr.reduce((freq, item) => {
        freq[item] = (freq[item] || 0) + 1;
        return freq;
    }, {});
}
console.log(elementFrequency([1, 2, 2, 3, 1, 4])); // Output: {1: 2, 2: 2, 3: 1, 4: 1}

// 24. Check if a string contains only digits
function isOnlyDigits(str) {
    return /^\d+$/.test(str);
}
console.log(isOnlyDigits("12345")); // Output: true
console.log(isOnlyDigits("12a45")); // Output: false

// 25. Capitalize the first letter of each word in a string
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("hello world")); // Output: "Hello World"

// Additional Problems

// 26. Find the intersection of two arrays
function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
console.log(intersection([1, 2, 3], [2, 3, 4])); // Output: [2, 3]

// 27. Sort an array of strings by length
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}
console.log(sortByLength(["apple", "fig", "banana", "cherry"])); // Output: ["fig", "apple", "banana", "cherry"]

// 28. Find the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}
console.log(factorial(5)); // Output: 120

// 29. Merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]

// 30. Remove falsy values from an array
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3, null, undefined])); // Output: [1, 2, 3]

