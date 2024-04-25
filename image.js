// Get the URL parameters
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const imageUrl = urlParams.get('imageUrl');

// Retrieve the image element
const imageElement = document.getElementById('uploadedImage');

// Set the src attribute of the image element to display the image
imageElement.src = decodeURIComponent(imageUrl);