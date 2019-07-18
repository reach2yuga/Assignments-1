


/*4. Write a typescript program which contains one arrow function named as ChkArmstrong. That
function accepts one numbers and check whether number is Armstrong number or not.
Input :
153
Output :
It is Armstrong number
*/


function ChkArmstrong(num:number){
    var arm:number=0,a:number,temp:number;    
    temp=num;

    while(temp>0){
        a=temp%10;
        // temp=parseInt(temp/10); // convert float into Integer
        temp=Math.floor(temp/10);
        arm=arm+a*a*a;
    }

    if(arm==num){
        console.log("It is Armstrong number");
    }
    else{
        console.log("It is Not Armstrong number");
    }    
}

ChkArmstrong(153);