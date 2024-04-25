// Function to change styles
function changeStyles() {
    var changeStyleLink = document.getElementById('changeStyleLink');
    var defaultStyleLink = document.getElementById('defaultStyle');
    var alternateStyleLink = document.getElementById('alternateStyle');
    var currentStyle = localStorage.getItem('selectedStyle') || 'style.css';
    var body = document.body;

    // Apply the stored style
    if (currentStyle === 'style.css') {
        defaultStyleLink.disabled = false;
        alternateStyleLink.disabled = true;
    } else {
        defaultStyleLink.disabled = true;
        alternateStyleLink.disabled = false;
    }

    changeStyleLink.addEventListener('click', function() {
        var newStyle = currentStyle === 'style.css' ? 'newStyle.css' : 'style.css';
        localStorage.setItem('selectedStyle', newStyle);
        currentStyle = newStyle;

        // Toggle between default and alternate styles
        if (currentStyle === 'style.css') {
            defaultStyleLink.disabled = false;
            alternateStyleLink.disabled = true;
        } else {
            defaultStyleLink.disabled = true;
            alternateStyleLink.disabled = false;
        }
    });
}

// Call the function to change styles
changeStyles();

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('blogForm').addEventListener('submit', function(event) {
        console.log('Form submitted');
        if (event.target.id === 'blogForm') {
            event.preventDefault();
            console.log('Form with ID blogForm submitted');
            var username = document.getElementById('username').value;
            var blogTitle = document.getElementById('blogTitle').value;
            var blogContent = document.getElementById('blogContent').value;

            if (username.trim() === '' || blogTitle.trim() === '' || blogContent.trim() === '') {
                alert('Please fill out all fields.');
                return;
            }

            // Retrieve existing blog data from local storage or initialize an empty array
            var blogData = JSON.parse(localStorage.getItem('blogData')) || [];

            // Add the new blog entry to the array
            var newBlogEntry = {
                username: username,
                title: blogTitle,
                content: blogContent
            };
            blogData.push(newBlogEntry);

            // Store the updated blog data array back to local storage
            localStorage.setItem('blogData', JSON.stringify(blogData));

            console.log(blogData);
            
            // Redirect to blog.html
            window.location.href = 'blog.html';
        }
    });
});
