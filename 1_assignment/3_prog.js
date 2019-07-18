/*3. Write a typescript program which contains one function named as DisplayFactors. That function
should accept one number and display factors of that number.
Input : 20
Output :
1
2
4
5
10
*/
function DisplayFactors(no) {
    //var str:string = "";
    for (var i = 1; i < no; i++) {
        if (no % i == 0) {
            console.log(i);
            //str += i+" ";
        }
    }
    //console.log(str);
}
DisplayFactors(20);
