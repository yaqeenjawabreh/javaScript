
let Name=prompt("Enter your name:");
let Age=prompt("Enter your age:");
let Gender=prompt("Enter your gender:");
let orderIsValid;
let Order;
if(Gender=="male"||Gender=="Male"){
 document.write("Welcome Mr."+Name);
 document.write("<br>");
}else if(Gender=="female"||Gender=="Female"){
  document.write("Welcome Ms."+Name);
  document.write("<br>");
}
else{
document.write('Welcome '+Name);
document.write("<br>");
}


//-----part2-------
if(Age<16){
alert("You are not eligible to place an order");
}
else if(Age>=16){
//-----part3---------

Order=prompt("Choose your order (Burger ,Shawarma,Zinger) ");
switch (Order) {
    case 'Burger':
       console.log("Your order is being prepared"); 
       orderIsValid=true;
        break;
   case 'Shawarma':
     console.log("Your order is being prepared");
     orderIsValid=true;
     break; 
    case 'Zinger':
         console.log("Your order is being prepared");
         orderIsValid=true;
           break; 
    default:
        console.log("Invalid order. Please try again");
        orderIsValid=false;
        break;
}
//------part4-------
if(Age>=18 && orderIsValid){
    console.log("Order confirmed");
}
else if(Age<18 ||(orderIsValid==false)){
    alert("Order requires verification");
}

//-------part5--------
//------
document.write("Customer Name :"+Name);
document.write("<br>");
document.write("Age:"+Age);
document.write("<br>");
document.write("Gender:"+Gender)
document.write("<br>");
document.write("Order :"+Order);
document.write("<br>");
document.write("isAvailable:"+orderIsValid);
document.write("<br>");
document.write("<br>");}