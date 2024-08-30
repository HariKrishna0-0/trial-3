// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayghillivijay(); // Display the ghilli-vijay.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the varisu-vijay.gif initially
function displayvarisu-vijay() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the vijay
    var vijayImage = new Image();
    // Set the source (file path) for the vijay image
    varisu-vijay.src = 'varisu-vijay.gif'; // Assuming the vijay image is named "varisu-vijay.gif"
    // Set alternative text for the image (for accessibility)
    varisu-vijay.alt = 'vijay';
    // When the vijay image is fully loaded, add it to the image container
    varisu-vijay.onload = function() {
        imageContainer.appendChild(vijayImage);
    };
}

// Function to display the ghilli-vijay.gif
function displayghilli-vijay() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the vijaay
    var ghilli-vijay = new Image();
    // Set the source (file path) for the vijaay image
    ghilli-vijay.src = 'ghilli-vijay.gif'; // Assuming the vijaay image is named "ghilli-vijay.gif"
    // Set alternative text for the image (for accessibility)
    ghilli-vijay.alt = 'vijaay';
    // When the vijaay image is fully loaded, add it to the image container
    ghilli-vijay.onload = function() {
        imageContainer.appendChild(ghilli-vijay);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
    };
}

// Display the varisu-vijay.gif initially
displayvijay();
