//Pseudocode:
//1- Define a variable i.
//2- Define a variable sum.
//3- For loop that starts from 1 and ends at 135 included.
//4- Calculate the addition of the new sum.
//5- Print the result as requested: Number is: 1 Sum: 1/Number is: 2 Sum: 3/Number is: 3 Sum: 6/...

//Code:
var i;
var sum=0;
for(i=1; i<=135; i++){
    sum += i
    console.log('Number is ',i,' Sum: ',sum)
}

//Diagram:
//i=1 ... result: Number is: 1 Sum: 1
//i=2 ... result: Number is: 2 Sum: 3
//i=3 ... result: Number is: 3 Sum: 6
//i=4 ... result: Number is: 4 Sum: 10
//i=5 ... result: Number is: 5 Sum: 15
//i=6 ... result: Number is: 6 Sum: 21
//.
//.
//.
//i=135 ... result: Number is: 135 Sum: 9180