// 'use strict';

// // URLify a string
// // A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// function urlify(str){
//   let result = '';

//   for (let x = 0; x < str.length; x++){
//     if (str[x] === ' ') {
//       result += '%20';
//     } else result += str[x];
//   }
//   return result;
// }

// console.log(urlify('fdlkdsvfdkl lfks vjs sdlkjewl 3 ewfl3 123 wd ql'));


// // Input: tauhida parveen

// // Output: tauhida%20parveen

// // Input: www.thinkful.com /tauh ida parv een

// // Output: www.thinkful.com%20/tauh%20ida%20parv%20een

// // 6. Filtering an array
// // Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

// function filter5(arr){
//   const result = [];
//   for (let x = 0; x < arr.length; x++ ){
//     if( arr[x] > 5) result.push(arr[x]);
//   }
//   return result;
// }

// console.log(filter5([1,2,3,4,5,6,7,8,9]));





// // 7. Max sum in the array
// // You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// function maxSum(arr){
//   let counter = 0;
//   let maxNum = arr[0];

//   for (let x = 0; x < arr.length; x++){
//     counter += arr[x];
//     if (maxNum < counter) maxNum = counter;
//   }
//   return maxNum;
// }

// console.log(maxSum([4, 6, -3, 5, -2, 1]));

// // Output: 12
// // 8. Merge arrays
// // Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// // Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// // Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// function mergeArr(arr1, arr2){
//   return [...arr1, ...arr2].sort((a,b) => a - b);

// }

// console.log(mergeArr([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));



// // 9. Remove characters
// // Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// function remover(str, bad){
//   let newStr = '';

//   for (let x = 0; x < str.length; x++){
//     if (bad.includes(str[x])) continue;
//     newStr += str[x];
//   }
//   return newStr;
// }

// console.log(remover('hello world', ['a', 'e', 'o']));


// // Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// // Output: 'Bttl f th Vwls: Hw vs. Grzny' 
// // 10. Products
// // Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// // Input:[1, 3, 9, 4]
// // Output:[108, 36, 12, 27]

// function productor(arr){
//   const length = arr.length;
//   return arr.map(( item, index) => {
//     let product = 1;
//     for (let x = 0; x < length; x++){ 
//       if (x !== index){
//         product *= arr[x];
//       }
//     }
//     return product;
//   });
// }
    
// console.log(productor([1, 2, 3, 4]));

// // 11. 2D array
// // Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
'use strict';

function zeroify(array2D){
  const cols = [];
  const rows = [];


  for(let i = 0; i < array2D.length; i++){
    for (let j = 0; j < array2D[0].length; j++){

      if (array2D[i][j] === 0){
        cols[j] = true;
        rows[i] = true;
      }
    }
  }

  for( let i = 0; i < array2D.length; i++){
    let row = array2D[i];
    for( let j = 0; j < row.length; j++){  
      let col = row[j];
      if (cols[j] || rows[i]){
        col = 0;
      }
    }
  }
  return array2D;
}



// Input:
let input = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1],
  [1,1,1,0,1]
];

console.log('below');
console.log(zeroify(input));
// Output:
// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];


// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

function matcher(str1, str2){
  const newStr = str2 + str2;
  return newStr.includes(str1);
}

console.log(matcher('amazon', 'azonam'));