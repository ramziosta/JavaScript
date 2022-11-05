function ThreeSum(arr) { 

    for (let i = 1; i< arr.length; i++){
      for (let j = 2; j< arr.length; j++){
        for(let k = 3; k < arr.length; k++){
          if (arr[0] == arr[i] + arr[j] + arr[k]){
            return true;
          }
          else{
            return false;
          }
        }
      }
    }

return arr;

}

 let arr = [8, 2, 1, 4, 10, 5, -1, -1];

console.log(ThreeSum(arr));


/*
Have the function ThreeSum(arr) take the array of integers stored in arr, and determine if any three distinct numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the first element, otherwise your program should return the string false. The input array will always contain at least 4 elements.

1. For input [8, 2, 1, 4, 10, 5, -1, -1] the output was incorrect. The correct output is true

2. For input [10, 2, 3, 1, 5, 3, 1, 4, -4, -3, -2] the output was incorrect. The correct output is true

3. For input [64, 3, 50, 45, 32, 14, 50, 45, 31, 66, 22, 15, 16, 20] the output was incorrect. The correct output is true

4. For input [12, 2, 2, 3, 4, 5, 6, 7, 10, 11] the output was incorrect. The correct output is true

5. For input [10, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 5, 5, 8, -2, -2, -2, -2, -1, 7] the output was incorrect. The correct output is true

6. For input [5, -6, 4, -5, -3, -2, 7, 1, 2, 12, 8, 14] the output was incorrect. The correct output is true
*/