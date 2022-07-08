let header = document.createElement("header");
let logo = document.createElement("div");
let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let li4 = document.createElement("li");
logo.textContent = "Elzero";
li1.textContent = "Home";
li2.textContent = "About";
li3.textContent = "Service";
li4.textContent = "Contact";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);
header.appendChild(logo);
header.appendChild(ul);
header.style.cssText = "display:flex; justify-content:space-between;margin:0; ";
document.body.appendChild(header);
let lis = document.querySelectorAll("li");
for (let i = 0; i < lis.length; i++) {
  lis[i].style.cssText = "list-style-type: none ;margin: 0 10px ; padding:10px";
}

ul.style.cssText = "display:flex;";
logo.style.cssText =
  "color:darkcyan; font-weight:bold ; font-size:20px ; font-family: sans-serif ;margin: 10px; padding:10px";
let main = document.createElement("div");
document.body.appendChild(main);
for (let i = 1; i < 16; i++) {
  main.appendChild(document.createElement("div"));
}
main.style.cssText =
  "display:grid ; grid-template-columns: 1fr 1fr 1fr; grid-template-rows:repeat(5 , 1fr) ; background-color:#00ffff ; margin:0";
let divs = main.querySelectorAll("div");

for (let i = 0; i < 15; i++) {
  divs[i].appendChild(document.createElement("span"));
  divs[i].querySelector("span").className = "number";
  divs[i].appendChild(document.createElement("span"));
  divs[i].querySelectorAll("span")[1].className = "text";
  divs[i].style.cssText =
    "display:flex; flex-direction: column ; justify-content: center; align-items:center ; margin:10px ;padding:10px; background-color:white";
}
let numbers = document.querySelectorAll(".number");
let texts = document.querySelectorAll(".text");

for (let i = 0; i < 15; i++) {
  numbers[i].textContent = `${i + 1}`;
  numbers[i].style.cssText = "font-size:60px";
  texts[i].textContent = "product";
}
let footer = document.createElement("footer");
footer.textContent = "Copyright 2021";
document.body.appendChild(footer);
footer.style.cssText =
  "padding:20px ; background-color:aqua ; font-weight:bold ; font-size: 20px ; font-family:sans-serif; display:flex ; justify-content : center ; align-items: center";
