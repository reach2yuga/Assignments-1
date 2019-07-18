/*1. Write a typescript program which contains one function named as Maximum. That function accepts
three parameters and it should returns largest value from three input parameters.
Input :23 89 6
Output :Maximum number is 89
*/
function Maximum(no1, no2, no3) {
    var maxnum;
    if (no1 > no2) {
        if (no1 > no3) {
            maxnum = no1;
        }
        else {
            maxnum = no3;
        }
    }
    else {
        if (no2 > no3) {
            maxnum = no2;
        }
        else {
            maxnum = no3;
        }
    }
    return maxnum;
}
console.log("Maximum number is " + Maximum(23, 89, 6));
