//create a floating icon near every post
let overlayVisible = false; // State to track overlay visibility
function createFloatingIcon(postElement) {
    const icon = document.createElement('div');
    icon.id = 'floating-icon';
    icon.style.position = 'absolute'; // Change to absolute for positioning relative to the post
    icon.style.left = '-20px'; // Space from the left of the post
    icon.style.top = '10px'; // Space from the top of the post
    icon.style.width = '70px';
    icon.style.height = '70px';
    icon.style.backgroundImage = 'src("icons/icon16.png")'; // Use the image icon
    icon.style.backgroundSize = 'cover'; // Cover the entire icon
    icon.style.cursor = 'pointer';
    icon.style.zIndex = '1000'; // Keep it above other elements
    icon.innerHTML = '🧠';

    // Show options when clicked
    icon.onclick = function() {
        if (!overlayVisible) {
            if (!document.getElementById('overlay')) {
                createOverlay(); // Create the overlay if it doesn't exist
            }
            openOverlay(); // Open the overlay
        } else {
            closeOverlay(); // Close the overlay
        }
        overlayVisible = !overlayVisible;
    };

    // Append icon to the post element
    postElement.appendChild(icon);
}
function addIconToPosts() {
    // Select all the post containers
    const posts = document.querySelectorAll('.feed-shared-update-v2'); // Adjust the selector as needed
    posts.forEach(post => {
        // Check if the icon already exists to avoid duplicates
        if (!post.querySelector('#floating-icon')) {
            createFloatingIcon(post); // Create the floating icon for each post
        }
    });
}

// Observe DOM changes to detect new posts
const postObserver = new MutationObserver(addIconToPosts);
postObserver.observe(document.body, {
    childList: true,
    subtree: true // Observe changes in posts and their children
});

// Initial add of floating icons to existing posts
addIconToPosts();


// Create a drawer that contains options for the user
function createOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'absolute';
    overlay.style.right = '60px'; // Position to the right of the icon
    overlay.style.top = '0px'; // Align with the top of the post
    overlay.style.width = '200px'; // Width of the overlay
    overlay.style.backgroundColor = '#ffffff'; // Background color
    overlay.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)'; // Shadow for depth
    overlay.style.padding = '10px'; // Padding inside the box
    overlay.style.borderRadius = '8px'; // Rounded corners
    overlay.style.zIndex = '1001'; // Make sure it stays on top
    overlay.style.display = 'none'; // Initially hidden

    // Add content to the overlay
    overlay.innerHTML = `
        <h4>Choose an Action</h4>
        <button onclick="handleUserAction('comment')">Write a Comment</button>
        <button onclick="handleUserAction('summarize')">Summarize the Post</button>
        <button onclick="handleUserAction('ideas')">Generate Post Ideas</button>
        <button onclick="handleUserAction('message')">Send Personal Message</button>
        <button onclick="closeOverlay()">Close</button>
    `;

    document.body.appendChild(overlay); // Append overlay to the body
    return overlay; // Return the overlay for reference
}

// Function to open the overlay
function openOverlay() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'block'; // Show the overlay
    }
}

// Function to close the overlay
function closeOverlay() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.style.display = 'none'; // Hide the overlay
    }
}
