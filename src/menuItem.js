class MenuItem {
    constructor(name, imgPath, priceUSD, calories){
        this.name = name;
        this.imgPath = imgPath;
        this.priceUSD = priceUSD; // number
        this.calories = calories; // number
    }

    get menuListItem(){
        const listItem = document.createElement("li");
        
        const imgElement = document.createElement("img")
        imgElement.src = this.imgPath;
        imgElement.width = 640;
        imgElement.alt = "Image of " + this.name;

        const nameP = document.createElement("p");
        nameP.textContent = this.name;
        nameP.style = "font-weight: bold";
        
        const priceP = document.createElement("p");
        priceP.textContent = "Price (USD): $" + this.priceUSD;

        const caloriesP = document.createElement("p");
        caloriesP.textContent = "Calories: " + this.calories;

        const allElements = [imgElement, nameP, priceP, caloriesP];
        for (const element of allElements){
            listItem.appendChild(element);
        }

        return listItem;
    }
}

import homeImagePath from "./img/food.jpg"
const sushi = new MenuItem("sushi", homeImagePath, 30, 200);
console.log(sushi.menuListItem);


export {MenuItem};