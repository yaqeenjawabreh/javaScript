let name=document.getElementById("cusName");
let menu=document.getElementById("menu");
let btn=document.getElementById("btn");
let summary=document.getElementsByTagName("p");
    
    let food=menu.value;
    menu.onclick = function() {
    food = menu.value;
};



btn.onclick=()=>{
  summary[0].innerHTML="Hello "+name.value+"! Your order is "+food;
};
btn.onmouseout=()=>{btn.style.color="black"; btn.style.backgroundColor="aliceblue";}
btn.onmouseover=()=>{btn.style.color="aliceblue"; btn.style.backgroundColor="black";}

