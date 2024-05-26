// Add an event listener to the window object to detect when the window is resized
window.addEventListener('resize', function() {
    // Call the responsive function when the window is resized
    makeResponsive();
});

// Function to make the site responsive
function makeResponsive() {
    // Get the current width of the window
    var screenWidth = window.innerWidth;

    // Check if the screen width is below 799px (for mobile and tablet devices)
    if (screenWidth < 800) {
        // Hide the desktop navigation and show the mobile navigation
        document.getElementById('navbar').style.display = 'none';
        document.getElementById('mobile').style.display = 'flex';
    } else {
        // Show the desktop navigation and hide the mobile navigation
        document.getElementById('navbar').style.display = 'flex';
        document.getElementById('mobile').style.display = 'none';
    }
}

// Call the makeResponsive function initially to set up the site for the current screen size
makeResponsive();