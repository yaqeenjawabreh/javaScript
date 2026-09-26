let name=document.getElementById("username");
let password=document.getElementById("password");
let phone=document.getElementById("phone");
let menu=document.getElementById("order");
let validMassage=document.getElementsByClassName("valid");
let output=document.getElementById("output");
let nameRegex=/^\S+$/i;
let passwordRegex=/(?=.*\d).{8,}/i;
let phoneRegex=/^07\d{8}$/i; 

function Validation(){
  for(let i=0;i<validMassage.length;i++){
    validMassage[i].innerHTML = "";
  }
  let isNameValid = nameRegex.test(name.value);
  let isPasswordValid = passwordRegex.test(password.value);
  let isPhoneValid = phoneRegex.test(phone.value);
if (!isNameValid) {
    validMassage[0].innerHTML = "Enter name with no spaces";
  } 
  if (!isPasswordValid) {
    validMassage[1].innerHTML = "Your password must have at least 8 characters and contain at least one number";
  }
  if (!isPhoneValid) {
    validMassage[2].innerHTML = "Your phone must have exactly 10 digits and start with 07";
  }
if (isNameValid && isPasswordValid && isPhoneValid) {
    sessionStorage.setItem("userName", name.value);
    localStorage.setItem("Order", menu.value);
    
    output.innerHTML = "Welcome, " + sessionStorage.getItem("userName") +
      "<br><br>Saved Order: " + localStorage.getItem("Order") +
      "<br><br>Saved Username: " + sessionStorage.getItem("userName");
  }
}

