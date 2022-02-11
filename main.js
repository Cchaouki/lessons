/*
//navbar
let css = ["Home", "About", "Services", "Contact"];

let navSection = document.createElement("div");
let logo = document.createElement("a");
let logoText = document.createTextNode("Elzero");
let list = document.createElement("ul");

for (i = 0; i < css.length; i++) {
  let listli = document.createElement("li");
  let linksli = document.createElement("a");
  let textli = document.createTextNode(css[i]);
  listli.style.cssText = "padding:10px;";
  linksli.setAttribute("href", "#");
  linksli.style.cssText = "text-decoration:none;color:#424242;";
  linksli.appendChild(textli);
  listli.appendChild(linksli);

  list.appendChild(listli);
}
//give classes
navSection.className = "nav";
//reset body margin + container
document.body.style.cssText = "box-sizing: border-box;margin: 0; ";

//start navbar
//logo
logo.setAttribute("href", "#");
logo.style.cssText =
  "text-decoration:none;color:green;padding:15px;font-weight:bold;font-size:20px";
logo.appendChild(logoText);
navSection.appendChild(logo);
//ul

navSection.appendChild(list);
//body
document.body.appendChild(navSection);
//styles
//parent
document.querySelector(".nav").style.cssText =
  "display:flex;justify-content:space-between;align-items:center;background-color:white";

//ul && li

list.style.cssText =
  "display:flex;justify-content:space-between;list-style:none;height:30px;";

//product section
let backgroundSecion = document.createElement("div");
let counter = 0;
for (i = 0; i < 15; i++) {
  let product = document.createElement("div");
  let num1 = document.createElement("span");
  let num2 = document.createElement("a");
  let prodNum = document.createTextNode(++counter);
  let prodText = document.createTextNode("Product");

  num1.style.cssText = "font-size:25px;font-weight:bold;";
  num2.style.cssText =
    "color: #c0c0c0;text-decoration: none;font-size: 12px;padding:4px";
  num2.setAttribute("href", "#");
  num1.appendChild(prodNum);
  num2.appendChild(prodText);
  product.appendChild(num1);
  product.appendChild(num2);
  product.style.cssText =
    "background-color:white;display:flex;flex-direction:column;justify-content:center;align-items: center;padding:10px 0;";
  backgroundSecion.appendChild(product);
}
document.body.appendChild(backgroundSecion);
//give classes
backgroundSecion.className = "back";
//styles
backgroundSecion.style.cssText =
  "background-color:#eee;position:relative;display:grid;grid-template-columns:repeat(auto-fill,minmax(calc((90%-10px) /3),1fr));padding:15px;gap:15px";

//footer
let fotDiv = document.createElement("div");
let fotp = document.createElement("p");
let fotText = document.createTextNode("Copyright 2021");
fotp.appendChild(fotText);
fotDiv.appendChild(fotp);
document.body.appendChild(fotDiv);
fotp.style.cssText = "color:white;font-size:20px;";

fotDiv.style.cssText =
  "width:100%;background-color:#23a96e;display:flex;justify-content:center;";
*/

let css = document.getElementById("css");
console.log(css.split(" "))


