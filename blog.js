document.addEventListener('DOMContentLoaded', function() {
    // Retrieve blog data from local storage
    var blogData = JSON.parse(localStorage.getItem('blogData')) || [];
    
    // Get the blog container element
    var blogContainer = document.getElementById('blogContainer');
    
    // Iterate over each blog entry and generate Bootstrap card
    blogData.forEach(function(entry) {
        // Create Bootstrap card element
        var card = document.createElement('div');
        card.classList.add('col-md-8', 'mx-auto', 'mb-4'); // Adjust column size and margin as needed
        
        var cardContent = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${entry.title}</h5>
                    <p class="card-text">${entry.content}</p>
                    <p class="card-text"><small class="text-muted">Author: ${entry.username}</small></p>
                </div>
            </div>
        `;
        
        card.innerHTML = cardContent;
        
        // Append card to blog container
        blogContainer.appendChild(card);
    });
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
});