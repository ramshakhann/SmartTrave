   // Initialize Swiper
        const swiper = new Swiper('.swiper', {
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
        
        // Add active class to clicked nav item
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
        
        // Countdown timer
        function updateCountdown() {
            const days = document.getElementById('days');
            const hours = document.getElementById('hours');
            const minutes = document.getElementById('minutes');
            const seconds = document.getElementById('seconds');
            
            let daysVal = parseInt(days.textContent);
            let hoursVal = parseInt(hours.textContent);
            let minutesVal = parseInt(minutes.textContent);
            let secondsVal = parseInt(seconds.textContent);
            
            secondsVal--;
            
            if (secondsVal < 0) {
                secondsVal = 59;
                minutesVal--;
                
                if (minutesVal < 0) {
                    minutesVal = 59;
                    hoursVal--;
                    
                    if (hoursVal < 0) {
                        hoursVal = 23;
                        daysVal--;
                        
                        if (daysVal < 0) {
                            daysVal = 0;
                            hoursVal = 0;
                            minutesVal = 0;
                            secondsVal = 0;
                        }
                    }
                }
            }
            
            days.textContent = daysVal.toString().padStart(2, '0');
            hours.textContent = hoursVal.toString().padStart(2, '0');
            minutes.textContent = minutesVal.toString().padStart(2, '0');
            seconds.textContent = secondsVal.toString().padStart(2, '0');
        }
        
        setInterval(updateCountdown, 1000);