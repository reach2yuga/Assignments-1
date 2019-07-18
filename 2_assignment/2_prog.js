/*2. Write a typescript program which contains one function named as Summation. That function
accepts array of numbers and returns the summation of each number from array.
Input :
23
6
7
4
5
7
Output :
Addition is 52
*/
function Summation(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
//var arr1:number[] = new Array(3);
//arr1= [23,89,20];
var arr1 = [23, 6, 7, 4, 5, 7];
console.log("Addition is " + Summation(arr1));
