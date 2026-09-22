//--------Q1----------
function reverses(num){
  console.log(num.split('').reverse().join(''));
}

let num=prompt("Enter number");
reverses(num);

// //------------Q2-----------
 function isOddEven(){
   for(let i=0;i<=15;i++){

    if(i%2==0){
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
 }}
 isOddEven();

//---------Q3----------------
function insertsDashes(num){
   let num2="";
   for(let i=0;i<num.length;i++){
      if(num[i]%2==0 && num[i+1]%2==0){
         num2+=num[i]+"-";
      }
      else{
         num2+=num[i];
      }
   }
   console.log(num2);
}

let num=prompt("Enter number");
insertsDashes(num);

//---------Q4----------
function Agechecker(Age){
    if(Age>=18){
        console.log("The user is Adult");
    }
    else{
         console.log("The user is Minor");
    }
}
let age=prompt("enter your Age");
Agechecker(age);
