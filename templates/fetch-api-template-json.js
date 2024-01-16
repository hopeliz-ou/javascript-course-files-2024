// Add this code snippet where needed

async function getData() {

    // Fetch file
    const response = await fetch("api_endpoint");
    
    // Parse data
    const data = await response.json();
    
    // View in Console (optional)
    console.log(data);
    
    // Add code below this line to work with the data object
}