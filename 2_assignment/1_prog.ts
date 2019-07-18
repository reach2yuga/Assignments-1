


/*1. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the largest number from array.
Input :
23
89
6
29
56
45
77
32
Output :
Maximum number is 89
*/

function Maximum(arr:number[]):number{    
    var max:number = arr[0];
    for(var i=1; i<arr.length; i++){
        if(max < arr[i]){
             max = arr[i];
        }
    }
    return max;
}

//var arr1:number[] = new Array(3);
//arr1= [23,89,20];
var arr1:number[] = [23,89,6,29,56,45,77,32];

console.log("Maximum number is "+Maximum(arr1));