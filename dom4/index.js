// points for using Form
//1.warp every input inside the Form
//2.instead of using button use input with type
//3.add event listener to  form tag
//4.event name should be submit
//5.whenever you use form, it will try to send data to server,in this process the page reloaded to avoid it we will be use
//event.preventDefault();

document.querySelector("form").addEventListener("submit",todoList);
function todoList(){
    event.preventDefault();
let itemName = document.querySelector("#name").Value;
let itemQty = document.querySelector("#qty").value;
let itemPriority = document.querySelector("#prt").value;

let tr=document.createElement("tr");
let td1 = document.createElement("td");
td1.innerText = itemName;
let td2 = document.createElement("td");
td2.innerText = itemQty;
let td3 = document.createElement("td");
td3.innerText = itemPriority;
tr.append(td1,td2,td3);
document.querySelector("tbody").append(tr);
document.querySelector("#name").value=" ";
document.querySelector("#qty").value=" ";
}
