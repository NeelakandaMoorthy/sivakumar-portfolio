// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Toggle the navigation menu on click
    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Toggle the navigation menu on click
    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Toggle the navigation menu on click
    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Toggle the navigation menu on click
    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    // Toggle the navigation menu on click
    menuToggle.addEventListener("click", function() {
        nav.classList.toggle("open");
    });

    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar div');
    progressBars.forEach(bar => {
        bar.style.width = bar.getAttribute('data-progress') + '%';
    });
});
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    // JavaScript code for the footer (if any) can be placed here
    // For example, you could add some interaction with social media links
    const socialLinks = document.querySelectorAll('.social-links a');

    socialLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ff6347';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});





// Wait for the DOM to load







document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Simple form validation (this can be expanded as needed)
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Here you would typically handle the form submission, e.g., via an AJAX request
        // For demonstration purposes, we'll just log the form data
        console.log("Form submitted with the following data:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Reset the form
        form.reset();

        // Show a confirmation message
        alert("Thank you for your message. We will get back to you soon.");
    });
});
