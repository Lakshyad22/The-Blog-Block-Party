// script.js

// Function to save the blog post data to local storage
function saveBlogPost(title, content) {
    var posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    posts.push({ title: title, content: content });
    localStorage.setItem('blogPosts', JSON.stringify(posts));
}

// Function to display the saved blog posts
function displayBlogPosts() {
    var posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    var postsContainer = document.getElementById('blogPosts');

    postsContainer.innerHTML = ''; // Clear previous posts

    posts.forEach(function(post) {
        var postElement = document.createElement('div');
        postElement.classList.add('blogPost');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        postsContainer.appendChild(postElement);
    });
}

// Event listener for preview button
document.getElementById('previewBtn').addEventListener('click', function() {
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    document.getElementById('previewTitle').innerText = title;
    document.getElementById('previewContent').innerText = content;

    document.getElementById('preview').classList.remove('hidden');
});

// Event listener for form submission
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;

    saveBlogPost(title, content); // Save blog post to local storage
    displayBlogPosts(); // Display saved blog posts

    alert('Blog submitted successfully!');
});

// Display existing blog posts when the page loads
displayBlogPosts();
