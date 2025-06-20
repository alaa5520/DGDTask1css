
// /////////////////////////////////A. Summation time//////////////////////////////////

// function absoluteSummation(arr) {
//     const sum = arr.reduce((acc, val) => acc + val, 0);
//     return Math.abs(sum);
// }
// console.log(absoluteSummation([-1, 2, -3])); // 2

// //////////////////////////B. Searching ////////////////////////
// function searchFirstOccurrence(arr, x) {
//     return arr.indexOf(x);
// }
// console.log(searchFirstOccurrence([3, 0, 1], 0)); // 1
// console.log(searchFirstOccurrence([1, 3, 0, 4, 5], 10)); // -1

// /////////////////////////C. Replacement //////////////////////////
// function replacePosNeg(arr) {
//     return arr.map(num => num > 0 ? 1 : num < 0 ? 2 : 0);
// }
// console.log(replacePosNeg([1, -2, 0, 3, 4])); // [1, 2, 0, 1, 1]

// ///////////////////////////D.Positions in array //////////////////////
// function printPositions(arr) {
//     arr.forEach((val, idx) => {
//         if (val <= 10) {
//             console.log(`A[${idx}] = ${val}`);
//         }
//     });
// }
// printPositions([1, 2, 100, 0, 30]);// A[0] = 1
// // A[1] = 2
// // A[3] = 0
// //////////////////////////////////////////Problem E - Array Editing///////////////////
// function editArray(arr, k) {
//     const filtered = arr.filter(val => val <= 100);
//     return filtered.slice(0, k);
// }
// console.log(editArray([5, 200, 15, 300, 8, 100, 55], 3)); // [5, 15, 8]
// /////////////////////////////////////////////////////Problem F - Filter and Modify/////////////////////
// function filterAndDouble(arr) {
//     return arr.filter(num => num % 2 === 0).map(num => num * 2);
// }
// console.log(filterAndDouble([3, 4, 7, 10, 9, 2])); // [8, 20, 4]