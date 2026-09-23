let menu=[
    {name:"Falafel Sandwich",price:0.75,category:"Breakfast",available:"Available"},
    {name:"Knafeh",price:2.00,category:"Desserts",available:"NotAvailable"},
    {name:"Fries",price:0.75,category:"Fast Food",available:"NotAvailable"},
    {name:"Mansaf",price:8.50,category:"Main Dishes",available:"Available"},
    {name:"Burger",price:6.25,category:"Fast Food",available:"Available"}
];
function showMenu(menu) {
    for(let item in menu){
      console.log("name: "+menu[item].name+" price: "+menu[item].price+"JD"+" category: "+menu[item].category+" available: "+menu[item].available);
    }
}
showMenu(menu);



let food=prompt("Enter the food name you want");
let isAvailable=true;
let selectedFood;
while (isAvailable) {
    
    for(let item in menu){
        if(menu[item].name==food){
            if(menu[item].available=="Available"){
            isAvailable=false;
            selectedFood=menu[item];
            break;
        }
        
        }
    }
    if(isAvailable==false){
        console.log("food available");
        break;
       }
       else{
        console.log("food is not available");
        food=prompt("please enter available food");

       }
    

}

for(let x in selectedFood){
    console.log(x+" : " +selectedFood[x]);
}

let quantity = parseInt(prompt("Enter the quantity"));

document.write("Order Summary <br><br>"+"Food item : "+selectedFood.name+"<br><br>"+"Quantity : "+quantity+"<br><br>"+"Total price :"+selectedFood.price*quantity+"JD");