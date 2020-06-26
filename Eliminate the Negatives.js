// Pseudocode:
// 1- Define the Array X.
// 2- Define the variable i.
// 3- For loop to let i calculate the length of the Array.
// 4- If condition iless than 0.
// 5- Then change the number to 0.
// 6- Print the SpeechRecognitionResult.

// Code:
var X = [2,-1,4,-3];
for(var i=0; i<X.length;i++){
  if(X[i]<0){
    X[i]=0
  }
  console.log(X[i])
}

// Diagram:
// i=0 ... X[i]=2 ==> X=2
// i=1 ... X[i]=-1 ==> X=0
// i=2 ... X[i]=4 ==> X=4
// i=3 ... X[i]=-3 ==> X=0