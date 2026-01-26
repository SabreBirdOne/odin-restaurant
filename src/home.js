function load(){
    let contentDiv = document.querySelector("div#content");

    // remove all children in content div
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }

    // load home page
    let bigHeader = document.createElement("h1");
    bigHeader.textContent = "Welcome to the Odin Restaurant!"

    contentDiv.appendChild(bigHeader);
}

export {load}