import homeImagePath from "./food.jpg"

function load(){
    let contentDiv = document.querySelector("div#content");

    // remove all children in content div
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }

    // load home page
    const bigHeader = document.createElement("h1");
    bigHeader.textContent = "Welcome to the Odin Restaurant!"

    const homeIntro = document.createElement("h2");
    homeIntro.textContent = "It's like Olive Garden, but healthier for your stomach and brain!"

    const homeImage = document.createElement("img");
    homeImage.src = homeImagePath;
    homeImage.width = 640;
    homeImage.alt = "Picture of food variety";

    const whyDineHere = document.createElement("h2");
    whyDineHere.textContent = "Why dine here?";

    const reasonsToDineHere = document.createElement("ul");
    const reasons = [
        "Tasty and nutritional food~",
        "Download our free app (No ads, only food) for discounts, home delivery and diet tracking!",
        "Recipes are budget friendly, free and open sourced. Share with your friends!",
        "Experience historical dishes from different cultures~",
        "Awesome unionized staff~"
    ]   
    for (const reason of reasons){
        const reasonListItem = document.createElement("li");
        reasonListItem.textContent = reason;
        reasonsToDineHere.appendChild(reasonListItem);
    }

    const allElements = [bigHeader, homeIntro, homeImage, whyDineHere, reasonsToDineHere];
    for (const element of allElements){
        contentDiv.appendChild(element);
    }
}

export {load}