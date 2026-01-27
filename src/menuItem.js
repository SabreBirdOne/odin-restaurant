class MenuItem {
    constructor(name, imgPath, priceUSD, calories){
        this.name = name;
        this.imgPath = imgPath;
        this.priceUSD = priceUSD; // number
        this.calories = calories; // number

        this.imgWidth = 240;
    }

    get menuListItem(){
        const listItem = document.createElement("li");
        
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

        const allElements = [imgElement, nameP, priceP, caloriesP];
        for (const element of allElements){
            listItem.appendChild(element);
        }

        return listItem;
    }
}

export {MenuItem};