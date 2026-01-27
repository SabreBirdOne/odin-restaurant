import * as MenuItem from "./menuItem.js"
import sushiPath from "./img/sushi.jpg";
import pizzaPath from "./img/pizza.jpg";
import phoPath from "./img/pho.jpg";

function load(){
    const contentDiv = document.querySelector("div#content");

    const menuHeader = document.createElement("h1");
    menuHeader.textContent = "Odin Restaurant Menu:";

    const menuUL = document.createElement("div");
    menuUL.id = "menu";

    const menuObj = [
        new MenuItem.MenuItem("Sushi", sushiPath, 20, 200),
        new MenuItem.MenuItem("Pizza", pizzaPath, 25, 1300),
        new MenuItem.MenuItem("Pho", phoPath, 30, 500),
    ];

    for (const item of menuObj){
        menuUL.appendChild(item.menuItemDiv);                
    }

    const allElements = [menuHeader, menuUL];
    for (const element of allElements){
        contentDiv.appendChild(element);
    }
    
}

export {load}