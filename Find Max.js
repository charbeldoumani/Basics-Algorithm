//Pseudocode:
//1- Define the Array X and the variable max.
//2- Find the Maximum value in a For Loop with an i variable where i is less or equal to the variable X lenght.
//3- If X is greater than the max then max equal X.
//4- Print the result.

//Code:
var X=[2,-3,-1];
var max= 0;
for(var i=0; i<=X.length; i++){
  if(X[i] > max){
    max= X[i]
  }
  console.log('max is: ', max)
}

//Diagram:
//i=0 ... X=2 ===> max=2
//i=1 ... X=-3 ===> max=2
//i=2 ... X=-1 ===> max=2