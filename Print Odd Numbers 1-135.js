//Pseudocode:
//1- Define a variable i.
//2- For loop that starts from 1 and ends at 135 included.
//3- If statement that check the numbers not divided by 2.
//4- Print the result.

//Code:
var i;
for(i=1; i<=135; i++){
    if(i%2===1){
    console.log(i)
    }
}

//Diagram:
//i=1 ... result=1
//i=2 ... result=1 because 2%2=0
//i=3 ... result=1,3
//.
//.
//.
//i=135 ... result=1,3,...,135