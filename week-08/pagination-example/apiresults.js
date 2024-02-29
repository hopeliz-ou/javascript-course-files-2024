/**
 * Uses Pexels API to pull data that fits the criteria provided
 * @param { string } searchWord - Search term
 * @param { string[] } orientation - Array of orientations
 */
function searchPexels(searchWord, orientation) {

    let endpoint = "https://api.pexels.com/v1/";

    // Checks for search term and provides a message if blank
    if (searchWord != "" && searchWord != null) {
        endpoint += "search?query=" + searchWord;
        document.getElementById("search-results").innerHTML = "";
    }
    else {
        document.getElementById("search-results").innerHTML = "Please enter a search term.";
    }

    // Adds an orientation if chosen from drop down
    if (orientation != "any") { 
        endpoint += "&orientation=" + orientation; 
    }

    // Per page set to max for pagination example
    endpoint += "&per_page=80";

    let request = new XMLHttpRequest();

    request.open('GET', endpoint);

    // Below is a request header with the key ("Authorization") and value (your_api_key) provided by the API
    request.setRequestHeader("Authorization", "y03lquRkv90SEk7BKnMvpYYGUporyABfXZQvZfOe2uVvyMX8A1Srqq9v");

    // Begin function to run code when request is made
    request.onload = function() {

        let response = request.response;
        
        let parsedData = JSON.parse(response);

        // Now that we have the data, let's use it:

        for (let x in parsedData.photos) {
            document.getElementById("search-results").innerHTML += `
                <div class="image-container">
                    <a href="${parsedData.photos[x].url}"><img src="${parsedData.photos[x].src.small}" alt="${parsedData.photos[x].alt}"></a><br>
                        <ul class="photo-sizes">
                            <li><a href="${parsedData.photos[x].src.small}">Small</a></li>
                            <li><a href="${parsedData.photos[x].src.medium}">Medium</a></li>
                            <li><a href="${parsedData.photos[x].src.large}">Large</a></li>
                        </ul>
                </div>
            `;
        }
        
        // View in Console (optional)
        console.log(parsedData);
    }

    try {
        request.send();
    } 
    catch(err) {
        console.log("Error: " + err.message);
    }
}

/**
 * Gets data from the form and runs searchPExels()
 */
function updateSearch() {
    let searchFormEntry = document.forms["search-form"].searchTerm.value;
    let imageOrientation = document.forms["search-form"].orientation.value;

    searchPexels(searchFormEntry, imageOrientation);
}