/*5. Write a typescript program which contains one function named as ChkString. That function accept
one string and check whether that string contains “Marvellous” word or not.
Input :
“Pune Kothrud Marvellous Infosystems”
Output :
String contains Marvellous in it.
*/
function ChkString(str) {
    var str2 = "Marvellous";
    var strlen = str.length;
    var str2len = str2.length;
    // console.log(str2len);
    for (var i = 0; i <= strlen - str2len; i++) {
        var j;
        for (j = 0; j < str2len; j++)
            if (str[i + j] != str2[j])
                break;
        if (j == str2len) {
            // return j; 
            console.log("String contains Marvellous in it.");
        }
    }
}
var str1 = "Pune Kothrud Marvellous Infosystems";
ChkString(str1);
