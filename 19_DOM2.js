const div = document.createElement('div');
div.className = "header";
div.setAttribute("id", "main");
div.setAttribute("title", "generated title")
div.style.backgroundColor = "green";
//so either use setAttribute method or directly use attribute names
const addText = document.createTextNode("Chai aur Samosa");
//createTextNode is optimized way than document.innerText
//attach the created element to its parent
div.appendChild(addText);

div.style.padding = "10px";

//attach div to body
document.body.appendChild(div);
document.body.style.margin = "0px";