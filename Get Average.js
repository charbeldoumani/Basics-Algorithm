//Pseudocode:
//1- Define the variable x
//2- Define the variable sum equal to 0.
//3- Define the variable average equal to 0.
//4- For loop to let the variable i read the length of the variable x.
//5- Calculate the sum of the variable x.
//6- Make the average length for the variable x.
//7- Print the result.

//Code:
var x=[2,1,3]
var sum=0
var avg=0
for(var i=0;i<x.length;i++){
  sum+=x[i];
  avg=sum/x.length;
}
console.log(avg)

//Diagram:
//i=0 ... sum=2 ==>avg=0.666666
//i=1 ... sum=3 ==>avg=1
//i=2 ... sum=6 ==>avg=2