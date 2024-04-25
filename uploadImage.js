const firebaseConfig = {
    apiKey: "AIzaSyDGpBA5BOsWmOzGpkBp-tn9cTjzYZyXy_o",
    authDomain: "labnosticimages.firebaseapp.com",
    projectId: "labnosticimages",
    storageBucket: "labnosticimages.appspot.com",
    messagingSenderId: "459372180104",
    appId: "1:459372180104:web:8ae7050e15a2e4714c653d",
    measurementId: "G-LZRJKT61GE"
  };

  firebase.initializeApp(firebaseConfig);

  const fileInput = document.getElementById("fileInput");
  const chosenImage = document.getElementById("chosenImage");
  let uploadedFile; // Store the uploaded file object
  
  // upload image only
  document.getElementById("fileInput").addEventListener("change", function() {
      const file = this.files[0];
      if (file) {
          const fileType = file.type;
          if (!fileType.startsWith("image/")) {
              alert("Please select an image file.");
              this.value = ""; // Clear the file input
          }
      }
  });
  
  // Event listener for file selection
  fileInput.addEventListener("change", function(event) {
      uploadedFile = event.target.files[0]; // Store the uploaded file object
      
      // Check if a file is selected
      if (!uploadedFile) {
          return;
      }
    
      // Check if it's an image file
      if (!uploadedFile.type.startsWith("image/")) {
          alert("Please select an image file.");
          return;
      }
    
      // Update chosen image text with filename
      chosenImage.textContent = uploadedFile.name;
  });
    
  // Event listener for Analyze button
    document.getElementById("analyze").addEventListener("click", function() {
    // Check if a file is uploaded
    if (!uploadedFile) {
        alert("Please select an image file.");
        return;
    }
    
    // Convert file object to data URL
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;
        
        // Encode the image data as a URL parameter
        const encodedImageUrl = encodeURIComponent(imageUrl);
        
        // Redirect to image.html with the encoded image URL as a parameter
        window.location.href = `image.html?imageUrl=${encodedImageUrl}`;
    };
    reader.readAsDataURL(uploadedFile);
});