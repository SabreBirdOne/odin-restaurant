import homeImagePath from "./img/food.jpg"

function load (){

    let contentDiv = document.querySelector("div#content");

    const aboutUsHeader = document.createElement("h1");
    aboutUsHeader.textContent = "About Us"

    const aboutUsP = document.createElement("p");
    aboutUsP.textContent = "We are the Odin Restaurant, we serve budget friendly food with open recipes packed with nutrients." 
        + " Every dish is a story of people across various cultures and history."
        + " We also believe in sustainable consumption of food.";

    const historyHeader = document.createElement("h2");
    historyHeader.textContent = "History";

    const historyP = document.createElement("p");
    historyP.textContent = "We started as a bunch of visionary gastronomists from all walks of life:"
    + " from the fast food worker and tired moms, to the most scathing of critics and talented of chefs."
    + " We founded this franchise in 2049 amidst a disasterous gastronomical world (and everything else really),"
    + " with a goal to simply cook things right and unite the people of the world through our common passion in good food."
    + " The downtrodden and elites alike came to know us as the Cookers."
    + ' So, like the main character in that neo-western series back in the 2010s, "We are the one who Cook."';

    const contactUsHeader = document.createElement("h2");
    contactUsHeader.textContent = "Contact Us";

    const contactUsUL = document.createElement("ul");
    const contactList = [
        "Heisenberg, CEC (Chief Executive Chef): heisenberg@odinfoods.net",
        "Odilia, CGO (Chief Gastronomical Officer): theonewhocooks@odinfoods.net",
        "Hank, CNS (Chief Nutrition Specialist): hankthenourisher@odinfoods.net"
    ];
    for (const contact of contactList){
        const contactLI = document.createElement("li");
        contactLI.textContent = contact;
        contactUsUL.appendChild(contactLI)
    }

    
    const homeImage = document.createElement("img");
    homeImage.src = homeImagePath;
    homeImage.width = 640;
    homeImage.alt = "Picture of food variety";

    const allElements = [aboutUsHeader, homeImage, aboutUsP, historyHeader, historyP, contactUsHeader, contactUsUL];
    for (const element of allElements){
        contentDiv.appendChild(element);
    }
}

export {load}