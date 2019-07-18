


/*5. Write a typescript program which contains one function named as Fibonacci. That function accept
one number from user and print Fibonacci series till that number.
Input :
21
Output :
1
1
2
3
5
8
13
21
*/

function Fibonacci(no:number){
    var a:number = 0;
    var b:number = 1;
    var c:number = 1;
    for(var i=1; a<no; i++){
        a=b;
        b=c;
        c=a+b;
        console.log(a);
    }
}

Fibonacci(21);