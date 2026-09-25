let name=document.getElementById("username");
let password=document.getElementById("password");
let phone=document.getElementById("phone");
let menu=document.getElementById("order");
let validMassage=document.getElementsByClassName("valid");
let output=document.getElementById("output");
let nameRegex=/^\S+$/ig;
let passwordRegex=/(?=.*\d).{8,}/ig;
let phoneRegex=/^07\d{8}$/ig; 
let valid=true;
localStorage.setItem("userName",name);

function Validation(){
if (!nameRegex.test(name.value)){
  validMassage[0].innerHTML="Enter name with no spaces";
}
if (!passwordRegex.test(password.value)){
  validMassage[1].innerHTML="your Password must have at least 8 characters and contains at least one number";
}
if (!phoneRegex.test(phone.value)){
  validMassage[2].innerHTML="your phone must have exactly 10 digits and starts with 07";
}

}

if(nameRegex.test(name.value)&&passwordRegex.test(password.value)&&phoneRegex.test(phone.value)){
    
}