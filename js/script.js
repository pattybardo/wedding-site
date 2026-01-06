// Access Code Protection
const CORRECT_CODE = '0606';
const ACCESS_KEY = 'weddingAccessGranted';

function checkAccess() {
    const accessGranted = localStorage.getItem(ACCESS_KEY);
    if (!accessGranted) {
        const modal = document.getElementById('accessModal');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Set focus to input when modal opens
        setTimeout(() => {
            document.getElementById('accessCode')?.focus();
        }, 100);
    }
}

function validateCode() {
    const inputCode = document.getElementById('accessCode').value;
    const errorElement = document.getElementById('accessError');

    if (inputCode === CORRECT_CODE) {
        localStorage.setItem(ACCESS_KEY, 'true');
        document.getElementById('accessModal').classList.remove('show');
        document.body.style.overflow = 'auto';
        errorElement.textContent = '';
    } else {
        errorElement.textContent = 'Incorrect code. Please try again or contact us for help.';
        document.getElementById('accessCode').value = '';
        document.getElementById('accessCode').focus();
    }
}

function handleModalEscape(e) {
    const modal = document.getElementById('accessModal');
    if (e.key === 'Escape' && modal?.classList.contains('show')) {
        const shouldClose = confirm(
            'The access code is required to view this website.\n\n' +
            'If you don\'t have the code, please contact us at:\n' +
            'dr.p.bardo+wedding@gmail.com\n\n' +
            'Close the access code prompt anyway?'
        );
        if (shouldClose) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
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
    }

    // Add ESC key handler for modal
    document.addEventListener('keydown', handleModalEscape);
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

function toggleSlideshow() {
    const controlButton = document.getElementById('slideshowControl');
    const icon = controlButton.querySelector('.material-icons');

    if (isPaused) {
        resumeSlideshow();
        icon.textContent = 'pause';
        controlButton.setAttribute('aria-label', 'Pause slideshow');
    } else {
        pauseSlideshow();
        icon.textContent = 'play_arrow';
        controlButton.setAttribute('aria-label', 'Play slideshow');
    }
}

// Start slideshow if slides exist
if (slides.length > 0) {
    showSlide(0);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
        updateProgress();
    } else {
        // If user prefers reduced motion, pause slideshow by default
        isPaused = true;
        const controlButton = document.getElementById('slideshowControl');
        if (controlButton) {
            const icon = controlButton.querySelector('.material-icons');
            icon.textContent = 'play_arrow';
            controlButton.setAttribute('aria-label', 'Play slideshow');
        }
    }

    // Add click handler for control button
    const controlButton = document.getElementById('slideshowControl');
    if (controlButton) {
        controlButton.addEventListener('click', toggleSlideshow);
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
