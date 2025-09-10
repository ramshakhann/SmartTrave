  document.addEventListener('DOMContentLoaded', () => {
            const tabButtons = document.querySelectorAll('.tab-btn');
            const destinationContents = document.querySelectorAll('.destination-content');
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Deactivate all buttons and content
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    destinationContents.forEach(content => content.classList.remove('active'));
                    
                    // Activate clicked button and corresponding content
                    const targetId = button.getAttribute('data-target');
                    const targetContent = document.getElementById(targetId);
                    
                    button.classList.add('active');
                    targetContent.classList.add('active');
                });
            });
            
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');
                    // Here you would normally filter the accommodations
                    // For this example, we'll just show a message
                    alert(`Filtering by: ${button.textContent}`);
                });
            });
            
            // Navbar scroll effect
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            });
            
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Newsletter form submission
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    alert('Thank you for subscribing to our newsletter!');
                    newsletterForm.reset();
                });
            }
        });