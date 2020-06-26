//Pseudocode:
//1- Define the variable X.
//2- Define the variable i.
//3- For loop over the length of the variable X
//4- If condition when i is less then 0.
//5- Then variable X equal to a string called Turing.
//6- Print the result.

//Code:
var X = [1,-4,0,-1]
for(var i=0;i<X.length;i++){
  if(X[i]<0){
    X[i]=('Turing')
    }
    console.log(X[i])
  }

//Diagram:
//i=0 ... X=1 ==> X=[1]
//i=1 ... X=-4 ==> X=[Turing]
//i=2 ... X=0 ==> X=[0]
//i=3 ... X=-1 ==> X[Turing]
