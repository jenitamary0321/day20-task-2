document.getElementById('changeDogButton').addEventListener('click', function() {
    const dogImage = document.getElementById('dogImage');
    const currentSrc = dogImage.src;
    
    // Array of HTTP.dog image URLs
    const dogImages = [
        "https://http.dog/100.jpg",
        "https://http.dog/200.jpg",
        "https://http.dog/300.jpg",
        "https://http.dog/400.jpg",
        "https://http.dog/500.jpg",
        "https://http.dog/600.jpg"
    ];

    // Get the index of the current image
    let currentIndex = dogImages.indexOf(currentSrc);
    
    // Calculate the next index
    let nextIndex = (currentIndex + 1) % dogImages.length;
    
    // Set the next image
    dogImage.src = dogImages[nextIndex];
});
