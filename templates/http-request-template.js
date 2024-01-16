// Add this code snippet where needed

let endpoint = "";

let request = new XMLHttpRequest();

request.open('GET', endpoint);

request.onload = function() {

    let response = request.response;
    
    let parsedData = JSON.parse(response);
    
    // View in Console (optional)
    console.log(parsedData);
    
    // Add code below this line to work with the parsedData object

}

request.send();