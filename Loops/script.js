//LOOPS

//1.Write a for loop to print numbers from 1 to 50

// for (let i = 1; i <= 50; i++) {
//     console.log(i);
//   }

//use a while loop to sum the sum the number from 1 to 10

// let a = 1;
// let sum = 0;
//  while (a <=11) {
//     sum = sum + a;
//     a++;
//  }

//  console.log(sum);

// create  a for...of loop to log each character of the string "javascript "

// let str = "javascript";

// for (let chacha of str){
//     console.log(chacha)
// }

//write a for loop that skips even numbers between 1 and 20

// for(var i =1;i+<21; i++){
//     if(i%2 === 0){

//     } else{
//         console.log(i)
//     }
// }

//use a dd...while loop to log numbers from 5 to 10

// var aa == 5;

// do{
//     console.log(aa);
//     aa--;
// }
// while(aa>0);

//Create a for  loop that calculates the factorial of 5;

// let fact = 5;
// for(var i =5;i>0;i--){
//     fact = fact * i;
// }
// console.log(fact);

//Write a nested loop to print a 3x3 grid of numbers'

var hold = 1;
for (var i =1; i<4; i++){
    var str = "";
    for(var j =1;j<4;j++){
        str+= `${hold}`;
    }

}