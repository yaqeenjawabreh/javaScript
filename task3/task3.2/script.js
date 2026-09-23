let text = document.querySelector("#textarea");
let fontFamilySelect = document.querySelector("#font-family");
let fontSizeSelect = document.querySelector("#font-size");
let fontweight = document.getElementsByClassName("weight");


fontFamilySelect.onclick = ()=> {
    text.style.fontFamily = fontFamilySelect.value;
};

fontSizeSelect.onclick = ()=> {
    text.style.fontSize = fontSizeSelect.value;
};


fontweight[0].onclick=bold;
fontweight[1].onclick=italic;
fontweight[2].onclick=underline;
function bold(){
text.style.fontWeight="bolder";
}
function italic(){
  text.style.fontStyle=" italic";
}
function underline(){
   text.style.textDecoration="underline"
}