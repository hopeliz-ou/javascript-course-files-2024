let thumbnailsPerPage = 4;
let currentStart = 0;

function updateThumbnails(startID) {
    currentStart += startID;
    document.getElementById("carousel").innerHTML = "";

    if ((currentStart + thumbnailsPerPage - 1) < Photos.length){
        for (let i = currentStart; i < thumbnailsPerPage + currentStart; i++) {
            let divID = "thumb-" + Photos[i].id;
            // Adds photo code to HTML
            document.getElementById("carousel").innerHTML += `
                <div id="${divID}" class="thumb" onclick="updatePhotoHighlight(${Photos[i].id})"></div>
                `;
        
            // Adds background to element to create a thumbnail
            document.getElementById(divID).style.backgroundImage = `url("images/${Photos[i].images.thumbnail}")`;
        }
    }

    if (currentStart > 0) {
        document.getElementById("lt-arrow").style.visibility = "visible";
    }
    else {
        document.getElementById("lt-arrow").style.visibility = "hidden";
    }

    if ((currentStart + thumbnailsPerPage) > Photos.length - 1) {
        document.getElementById("rt-arrow").style.visibility = "hidden";
    }
    else {
        document.getElementById("rt-arrow").style.visibility = "visible";
    }
}

function updatePhotoHighlight(id) {
    for (let x in Photos) {
        if (Photos[x].id == id) {
            document.getElementById("photo-highlight").innerHTML =`
                <img src="images/${Photos[x].images.large}" alt="">
            `;

            document.getElementById("title").innerHTML = `
                <h2>${Photos[x].title}</h2>
            `;

            document.getElementById("caption").innerHTML = `
                ${Photos[x].caption}
            `;
        }
    }
}

updatePhotoHighlight(0);

updateThumbnails(0);
