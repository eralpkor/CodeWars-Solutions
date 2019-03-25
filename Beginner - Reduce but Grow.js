/* Beginner - Reduce but Grow
https://www.codewars.com/kata/beginner-reduce-but-grow/train/javascript
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24 */

var grow = (x) => x.reduce((a, v) => a * v);