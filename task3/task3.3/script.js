let img =document.getElementById("img");
let btns=document.getElementsByClassName("btn");
btns[0].onclick= Circle ;
function Circle() {
    img.style.borderRadius="100px";
}
btns[1].onclick=squer;
function squer(){
    img.style.borderRadius="0px";
}
