menu_list_array = ["Veg Margherita Pizza","Chiecken bbq pizza","Cheese and gold pizza","Panner tanndori pizza","chieken tanndori pizza"];

function getmenu(){
var menu;
menu_list_array.sort();
for(var i=0;i<menu_list_array;i++){
menu=menu+'<li>' + menu_list_array[1]+ '</li>'
}
menu=menu+"hi"
document.getElementById("display_menu").innerHTML=menu;
}
function add_item(){
var data;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
}

function add_top(){

}