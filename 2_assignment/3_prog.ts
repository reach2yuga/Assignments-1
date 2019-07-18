


/*3. Write a typescript program which contains one function named as Maximum. That function accepts
array of numbers and returns the second largest number from array.
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
Second Maximum number is 77
*/

function Maximum(arr:number[]):number{
    var max:number = arr[0];
    var secondmax:number = arr[0];  
    for(var i=0; i<arr.length; i++){
        if (arr[i] > max) {
            secondmax = max;
            max = arr[i];

        } else if (arr[i] > secondmax) {
            secondmax = arr[i];
        }        
    }
    return secondmax;
}

//var arr1:number[] = new Array(3);
//arr1= [23,89,20];
var arr1:number[] = [23,89,6,29,56,45,77,32];

console.log("Second Maximum number is "+Maximum(arr1));