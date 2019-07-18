


/*4. Write a typescript program which contains one function named as ChkPrime. That function should
accept one number and it should return true if the given number is prime and otherwise return false.
Input : 11
Output : It is prime number
*/


function ChkPrime(no:number):boolean{
    var halfno = no/2;
    if(no==0 || no==1){
        return false;
    }else{
        for(var i=2; i<=halfno; i++){
            if(halfno % i == 0){
                return false;
            }
        }
    }
    return true;
}

var flag = ChkPrime(11);
if(flag == true){
    console.log("It is prime number");
}else{
    console.log("It is not prime number");
}