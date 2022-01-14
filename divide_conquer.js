// for divide and conquer exercise
/* 
1.
countZeroes
Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which 
returns the number of zeroes in the array.

Constraints:
Time Complexity: O(log N) // this means binary search or divide and conquer
*/
function countZeroes(arr){
    let count = [];
    for(let val of arr ){  // not in, in is for object
        if (val === 0){
            count.push(val);
        }
    }
    return (count.length);
}
/*
console.log(countZeroes([1,1,1,1,0,0])); // 2
console.log(countZeroes([1,0,0,0,0])); // 4
console.log(countZeroes([0,0,0])); // 3
console.log(countZeroes([1,1,1,1])); // 0
*/

//2.
/*
Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number 
in the array

Constraints:
Time Complexity: O(log N)
*/
function sortedFrequency(arr, num){
    let count = -1;
    for(let val of arr){
        if(val === num){
            count += 1
        }
    }
    return count;
}
/*
console.log(sortedFrequency([1,1,2,2,2,2,3],2)); // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3)); // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)); // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)); // -1
*/

//3.
/*
findRotatedIndex
Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer. The function 
should return the index of num in the array. If the value is not found, return -1.

Constraints:
Time Complexity: O(log N)
*/
function findRotatedIndex(rotatedArr, integer){
    let index = -1;
    for(let i = 0; i< rotatedArr.length; i++){
        if(rotatedArr[i] === integer){
            index = i;
        }
    }
    return index;
}
/*
console.log(findRotatedIndex([3,4,1,2],4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
*/