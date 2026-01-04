// Access Code Protection
const CORRECT_CODE = '0606';
const ACCESS_KEY = 'weddingAccessGranted';

function checkAccess() {
    const accessGranted = sessionStorage.getItem(ACCESS_KEY);
    if (!accessGranted) {
        document.getElementById('accessModal').classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function validateCode() {
    const inputCode = document.getElementById('accessCode').value;
    const errorElement = document.getElementById('accessError');

    if (inputCode === CORRECT_CODE) {
        sessionStorage.setItem(ACCESS_KEY, 'true');
        document.getElementById('accessModal').classList.remove('show');
        document.body.style.overflow = 'auto';
    } else {
        errorElement.textContent = 'Incorrect code. Please try again.';
        document.getElementById('accessCode').value = '';
        document.getElementById('accessCode').focus();
    }
}

// Set up access code modal
document.addEventListener('DOMContentLoaded', () => {
    checkAccess();

    const submitButton = document.getElementById('submitCode');
    const codeInput = document.getElementById('accessCode');

    if (submitButton) {
        submitButton.addEventListener('click', validateCode);
    }

    if (codeInput) {
        codeInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                validateCode();
            }
        });
        codeInput.focus();
    }
});

// Hero slideshow with pause on hover and progress bar
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideInterval = 5000; // 5 seconds per image
const progressBar = document.querySelector('.progress-bar');
const hero = document.querySelector('.hero');
let slideshowTimer;
let progressTimer;
let isPaused = false;
let progressWidth = 0;

function showSlide(index) {
    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add active class to current slide
    slides[index].classList.add('active');
}

function resetProgress() {
    progressWidth = 0;
    if (progressBar) {
        progressBar.style.width = '0%';
    }
}

function updateProgress() {
    if (!isPaused && progressBar) {
        progressWidth += 0.5; // Increment by 0.5% every 25ms (5000ms / 200 steps = 25ms)
        progressBar.style.width = progressWidth + '%';

        if (progressWidth >= 100) {
            nextSlide();
        } else {
            progressTimer = setTimeout(updateProgress, 25);
        }
    }
}

function nextSlide() {
    clearTimeout(progressTimer);
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    resetProgress();
    if (!isPaused) {
        updateProgress();
    }
}

function pauseSlideshow() {
    isPaused = true;
    clearTimeout(progressTimer);
}

function resumeSlideshow() {
    isPaused = false;
    updateProgress();
}

// Start slideshow if slides exist
if (slides.length > 0) {
    showSlide(0);
    updateProgress();

    // Pause on hover
    if (hero) {
        hero.addEventListener('mouseenter', pauseSlideshow);
        hero.addEventListener('mouseleave', resumeSlideshow);
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optional: Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for fade-in effect
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Initialize first section
const firstSection = document.querySelector('.section');
if (firstSection) {
    firstSection.style.opacity = '1';
    firstSection.style.transform = 'translateY(0)';
}
