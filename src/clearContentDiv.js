function clear(){
    let contentDiv = document.querySelector("div#content");
    
    // remove all children in content div
    while(contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.firstChild);
    }
}

export {clear}