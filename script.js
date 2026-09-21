document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    hamburger.addEventListener('click', () => {
        // Toggle Nav
        navLinks.classList.toggle('nav-active');

        // Burger Animation
        hamburger.classList.toggle('toggle');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                hamburger.classList.remove('toggle');
            }
        });
    });

    // Scroll Animations with Intersection Observer
    // Query all elements that have the fade-in class
    const fadeElements = document.querySelectorAll('.fade-in, .section-header, .glass-card, .hotel-card, .glass-panel, .contact-card');
    
    // Add fade-in class if not already there
    fadeElements.forEach(el => {
        if (!el.classList.contains('fade-in')) {
            el.classList.add('fade-in');
        }
    });

    const observerOptions = {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 20, 17, 0.95)';
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(5, 20, 17, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Parallax Effect for Hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        let offset = window.pageYOffset;
        hero.style.backgroundPositionY = offset * 0.5 + 'px';
    });

    // Typing Effect
    const words = ["Discover the True Himalayas", "Trek to Triund & Kareri", "Premium Hotel Stays", "Your Ultimate Adventure"];
    let i = 0;
    let timer;
    const typingElement = document.getElementById('typewriter');

    function typingEffect() {
        let word = words[i].split("");
        var loopTyping = function() {
            if (word.length > 0) {
                typingElement.innerHTML += word.shift();
            } else {
                setTimeout(deletingEffect, 2000);
                return false;
            }
            timer = setTimeout(loopTyping, 100);
        };
        loopTyping();
    }

    function deletingEffect() {
        let word = words[i].split("");
        var loopDeleting = function() {
            if (word.length > 0) {
                word.pop();
                typingElement.innerHTML = word.join("");
            } else {
                if (words.length > (i + 1)) {
                    i++;
                } else {
                    i = 0;
                }
                setTimeout(typingEffect, 500);
                return false;
            }
            timer = setTimeout(loopDeleting, 50);
        };
        loopDeleting();
    }
    
    if (typingElement) {
        typingEffect();
    }

    // WhatsApp Form Submission
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const pkg = document.getElementById('package').value;
            const people = document.getElementById('people').value;
            
            const message = `Hello Moon Peak Adventures!%0A%0AMy name is ${name}. I am interested in booking the *${pkg}* for ${people} people.%0ACan you provide more details?`;
            
            // Rohit's Indian number
            const whatsappNumber = "917807444308";
            window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
        });
    }

    // Custom Luxury Cursor
    const cursor = document.querySelector('.cursor');
    
    if (cursor) {
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        // Add hover effect to links and buttons
        const interactiveElements = document.querySelectorAll('a, button, .gallery-img, .hamburger');
        
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
            });
        });
    }

    // Magnetic Buttons
    const magnetButtons = document.querySelectorAll('.cta-button, .book-btn, .contact-link');

    magnetButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            // Apply slight magnetic pull
            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0px, 0px) scale(1)';
        });
    });
});
