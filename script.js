document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('#mainNav ul li a');

    // Toggle menu for mobile
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Toggle icon from bars to times (X)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when a navigation link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                // Reset icon to bars
                const icon = menuToggle.querySelector('i');
                if (icon) { // Check if icon exists
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('#mainNav ul li a');
    const jobTitle = document.querySelector('.hero-section h3');
    const jobTitles = ["UI/UX Desainer", "BackEnd Developer", "Database Engineer"];
    let jobIndex = 0;
    let charIndex = 0;
    let typingDelay = 100; // Kecepatan mengetik (ms)
    let erasingDelay = 50; // Kecepatan menghapus (ms)
    let newTextDelay = 2000; // Jeda sebelum teks baru (ms)

    function type() {
        if (charIndex < jobTitles[jobIndex].length) {
            jobTitle.textContent += jobTitles[jobIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            jobTitle.textContent = jobTitles[jobIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            jobIndex++;
            if (jobIndex >= jobTitles.length) {
                jobIndex = 0;
            }
            setTimeout(type, typingDelay + 500); // Sedikit jeda sebelum mengetik lagi
        }
    }

    if (jobTitle) { // Pastikan elemen ada
        setTimeout(type, typingDelay + 200); // Mulai animasi setelah halaman dimuat
    }

    // Toggle menu for mobile
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            // Toggle icon from bars to times (X)
            const icon = menuToggle.querySelector('i');
            if (mainNav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close menu when a navigation link is clicked (for smooth scrolling)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                // Reset icon to bars
                const icon = menuToggle.querySelector('i');
                if (icon) { // Check if icon exists
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});