import * as MenuItem from "./menuItem.js";

function load(){
    const contentDiv = document.querySelector("div#content");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Odin Restaurant Menu:";

    const menuUL = document.createElement("ul#menuDiv");

    const menuObj = [

    ];

    for (const item of menuObj){

    }

    const allElements = [menuHeader, menuUL];
    for (const element of allElements){
        contentDiv.appendChild(element);
    }
    
}

export {load}