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

//4. 
/*
findRotationCount
Write a function called findRotationCount which accepts an array of distinct numbers sorted in increasing order. 
The array has been rotated counter-clockwise n number of times. Given such an array, find the value of n.

Constraints:
Time Complexity: O(log N)
*/
function findRotationCount(arr){
    let arrayToSort = [];
    let returnValue = 0;
    for(let val of arr){
        arrayToSort.push(val);
    }
    // console.log(arrayToSort);

    // sort the arrayToSort array
    arrayToSort.sort( function( a , b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0;
    });
    // console.log(arrayToSort);
    // get the last value of an argument array
    let lastValue = arr[arr.length - 1];

    // console.log(lastValue);

    for(let i = 0; i< arrayToSort.length; i++){
        if(arrayToSort[i] === lastValue){
            if(arrayToSort[0] === lastValue){
                returnValue = arrayToSort.length - 1;
            }
            else if(arrayToSort[arrayToSort.length - 1] === lastValue){
                returnValue = 0;
            }
            else{
                returnValue = i - 1;
            }
        }
    }
    return returnValue;
}

/*
console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // 0
*/



//5.
/*
findFloor
Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the 
array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the 
floor does not exist, return -1.
*/

/*
findFloor([1,2,8,10,10,12,19], 9) // 8
findFloor([1,2,8,10,10,12,19], 20) // 19
findFloor([1,2,8,10,10,12,19], 0) // -1
*/