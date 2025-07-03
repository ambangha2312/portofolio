const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.querySelector('i').classList.toggle('fa-bars');
            menuToggle.querySelector('i').classList.toggle('fa-times');
        });

        // Active Nav Link highlighting on scroll
        const sections = document.querySelectorAll('section[id], header[id]');
        const navLi = document.querySelectorAll('nav .nav-links li a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });

            navLi.forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href').includes(current)) {
                    a.classList.add('active');
                }
            });
             // Hide mobile menu on link click
            if (navLinks.classList.contains('active')) {
                 // Optional: Close menu when a link is clicked on mobile
                // navLinks.classList.remove('active');
                // menuToggle.querySelector('i').classList.remove('fa-times');
                // menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
        
        // Set current year in footer
        document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Simple scroll animation for sections
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 }); // Trigger when 10% of the section is visible

        document.querySelectorAll('.section').forEach(section => {
            observer.observe(section);
        });
