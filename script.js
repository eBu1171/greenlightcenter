// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to feature cards with better performance
    const featureCards = document.querySelectorAll('.bg-white.p-8.rounded-xl');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });

    // Improved scroll-based animations with better performance
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                // Stop observing after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation with better selectors
    const animatedElements = document.querySelectorAll(
        '.bg-white.p-8.rounded-xl, .text-center, section'
    );

    animatedElements.forEach(el => {
        // Add initial state classes
        el.classList.add('opacity-0', 'translate-y-8');
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        // Add animation class
        el.classList.add('animate-in');

        observer.observe(el);
    });

    // Add CSS for smooth animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        /* Smooth transitions for all interactive elements */
        * {
            transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
        
        /* Disable transitions during scroll for better performance */
        .scrolling * {
            transition: none !important;
        }
    `;
    document.head.appendChild(style);

    // Optimize scroll performance
    let ticking = false;
    let scrollTimeout;

    function updateScrollClasses() {
        document.body.classList.add('scrolling');
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            document.body.classList.remove('scrolling');
        }, 150);

        ticking = false;
    }

    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(updateScrollClasses);
            ticking = true;
        }
    });

    // Remove problematic parallax effect
    // The parallax effect was causing performance issues and visual glitches
});

// Add some additional interactive features with better performance
function addSmoothHoverEffects() {
    // Add hover effects to grid items in Hero Section 2
    const gridItems = document.querySelectorAll('.grid.grid-cols-3 > div');
    gridItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
        });
    });
}

// Initialize smooth hover effects
document.addEventListener('DOMContentLoaded', function () {
    addSmoothHoverEffects();

    // Read More/Less functionality for company history
    const readMoreBtn = document.getElementById('read-more-btn');
    const historyPreview = document.getElementById('history-preview');
    const historyFull = document.getElementById('history-full');
    const btnText = document.getElementById('btn-text');
    const btnIcon = document.getElementById('btn-icon');

    if (readMoreBtn && historyPreview && historyFull) {
        readMoreBtn.addEventListener('click', function () {
            if (historyFull.classList.contains('hidden')) {
                // Show full text
                historyPreview.classList.add('hidden');
                historyFull.classList.remove('hidden');
                btnText.textContent = 'Бага унших';
                btnIcon.classList.remove('fa-chevron-down');
                btnIcon.classList.add('fa-chevron-up');
            } else {
                // Show preview text
                historyPreview.classList.remove('hidden');
                historyFull.classList.add('hidden');
                btnText.textContent = 'Дэлгэрэнгүй унших';
                btnIcon.classList.remove('fa-chevron-up');
                btnIcon.classList.add('fa-chevron-down');
            }
        });
    }
});

// Add typing effect to hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Optional: Add typing effect to hero title
// Uncomment the following lines if you want a typing effect
/*
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.text-4xl.md\\:text-6xl.font-bold.mb-6');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});
*/ 