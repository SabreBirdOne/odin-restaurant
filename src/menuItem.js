class MenuItem {
    constructor(name, imgPath, priceUSD, calories){
        this.name = name;
        this.imgPath = imgPath;
        this.priceUSD = priceUSD; // number
        this.calories = calories; // number

        this.imgWidth = 240;
    }

    get menuItemDiv(){
        const menuItemDiv = document.createElement("div");
        menuItemDiv.id = "menuItem";
        
        const imgElement = document.createElement("img")
        imgElement.src = this.imgPath;
        imgElement.width = this.imgWidth;
        imgElement.alt = "Image of " + this.name;

        const nameP = document.createElement("p");
        nameP.textContent = this.name;
        nameP.style = "font-weight: bold";
        
        const priceP = document.createElement("p");
        priceP.textContent = "Price (USD): $" + this.priceUSD;

        const caloriesP = document.createElement("p");
        caloriesP.textContent = "Calories: " + this.calories;

        const menuItemInfoDiv = document.createElement("div");
        menuItemInfoDiv.id = "menuItemInfo";

        for (const paras of [nameP, priceP, caloriesP]){
            menuItemInfoDiv.appendChild(paras);
        }

        for (const element of [imgElement, menuItemInfoDiv]){
            menuItemDiv.appendChild(element);
        }

        return menuItemDiv;
    }
}

export {MenuItem};