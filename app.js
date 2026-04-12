/* JS: For basic scrolling interaction */

// 1. Navbar shrink effect on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    
    // Add 'shrink' class when page is scrolled more than 50px
    if (window.scrollY > 50) {
        header.classList.add('shrink');
        // Visually make the background solid white if it was transparent
        header.style.backgroundColor = '#ffffff'; 
    } else {
        header.classList.remove('shrink');
        header.style.backgroundColor = '#ffffff'; // Ensure it's white near top
    }
});

// 2. Ensuring active links are highlighted (simple implementation)
const navLinks = document.querySelectorAll('.nav-links a:not(.btn-cta)');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Check if current scroll position is within the section
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Ye function 1.5 seconds baad lazmi chalega
    function hideLoader() {
        const preloader = document.getElementById("preloader");
        const content = document.getElementById("page-content");

        if (preloader) {
            preloader.style.opacity = "0"; // Parda halka hoga
            
            setTimeout(() => {
                preloader.style.display = "none"; // Parda hat jayega
                if (content) {
                    content.classList.remove("content-hidden"); // Web fade-in hogi
                }
            }, 600); // Fade out ka time
        }
    }

    // Forcefully hide after 1.5 seconds (1500ms)
    window.addEventListener("load", () => {
        setTimeout(hideLoader, 1500);
    });

    // Backup: Agar load event late ho jaye, tab bhi 3 seconds baad khul jaye
    setTimeout(hideLoader, 3000);
 