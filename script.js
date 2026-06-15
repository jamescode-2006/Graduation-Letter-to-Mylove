// The romantic graduation message
const messageText = `My Dearest Love,

Today is more than just a graduation day—it's the celebration of all your hard work, sacrifices, sleepless nights, and determination. I have witnessed how much effort you poured into reaching this moment, and seeing you achieve this milestone fills my heart with so much pride and happiness.

There were days when you felt tired, stressed, and unsure of yourself, yet you never gave up. You continued moving forward with courage and strength, and now all those challenges have led you to this beautiful achievement. You truly deserve every success and recognition that comes your way.

As you wear your graduation attire and step into a new chapter of your life, always remember how amazing, capable, and strong you are. This diploma is not just a piece of paper—it is proof of your perseverance, dedication, and dreams coming true.

Thank you for inspiring me every day with your passion and determination. No matter where life takes us, I will always be your biggest supporter, cheering for your victories and standing beside you through every challenge.

Congratulations, my beautiful graduate. I am beyond proud of you, and I can't wait to see all the wonderful things you will accomplish in the future. May this achievement be the beginning of even greater blessings, opportunities, and happiness.

I love you more than words can ever express, and today, my heart celebrates not only your graduation but also the incredible person you have become.

Forever proud of you. Forever grateful for you. Forever yours. 💖🎓✨`;

// Typing animation variables
let index = 0;
const typedTextElement = document.getElementById('typedText');
const typingSpeed = 40;
let typingStarted = false;

// Navigation buttons
const messageBtn = document.getElementById('messageBtn');
const albumBtn = document.getElementById('albumBtn');
const homeBtn1 = document.getElementById('homeBtn1');
const homeBtn2 = document.getElementById('homeBtn2');
const heroSection = document.getElementById('hero');
const messageSection = document.getElementById('message');
const albumSection = document.getElementById('album');
const footerSection = document.querySelector('.footer');
const gallery = document.getElementById('gallery');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Music control
let musicStarted = false;

function startMusic() {
    if (!musicStarted && bgMusic) {
        bgMusic.play().catch(err => {
            console.log('Music autoplay prevented or file not found. User interaction required.');
        });
        musicStarted = true;
        musicToggle.textContent = '🔊';
        musicToggle.classList.add('playing');
    }
}

// Music Toggle Button Handler
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play().catch(err => {
            console.log('Cannot play music:', err);
        });
        musicToggle.textContent = '🔊';
        musicToggle.classList.add('playing');
        musicStarted = true;
    } else {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
        musicToggle.classList.remove('playing');
    }
});

// Typing function
function typeText() {
    if (index < messageText.length) {
        typedTextElement.textContent += messageText.charAt(index);
        index++;
        setTimeout(typeText, typingSpeed);
    } else {
        // Hide cursor after typing is complete
        document.querySelector('.cursor').style.display = 'none';

        // Enable scrolling within the message section
        setTimeout(() => {
            // Keep the fullscreen letter view scrollable so the full message can be read.
        }, 1000); // Wait 1 second after typing completes
    }
}

// Message Button Click Handler
messageBtn.addEventListener('click', () => {
    // Start background music
    startMusic();

    // Hide hero, album, and footer sections
    heroSection.classList.add('hidden');
    albumSection.classList.add('hidden');
    footerSection.classList.add('hidden');

    // Make message section fullscreen and allow reading the full letter
    messageSection.classList.add('fullscreen');

    // Reset typing if needed
    if (typingStarted) {
        index = 0;
        typedTextElement.textContent = '';
        document.querySelector('.cursor').style.display = 'inline';
    }

    // Start typing animation
    setTimeout(() => {
        if (!typingStarted || index === 0) {
            typingStarted = true;
            typeText();
        }
    }, 300);
});

// Album Button Click Handler
albumBtn.addEventListener('click', () => {
    // Start background music
    startMusic();

    // Hide hero, message, and footer sections
    heroSection.classList.add('hidden');
    messageSection.classList.add('hidden');
    footerSection.classList.add('hidden');

    // Make album section fullscreen and disable scroll
    albumSection.classList.add('fullscreen');
    document.body.classList.add('no-scroll');

    // Show gallery with fade-in animation
    setTimeout(() => {
        gallery.classList.add('show');
    }, 300);
});

// Home Button Click Handlers
homeBtn1.addEventListener('click', () => {
    // Show all sections again
    heroSection.classList.remove('hidden');
    albumSection.classList.remove('hidden');
    footerSection.classList.remove('hidden');

    // Remove fullscreen mode
    messageSection.classList.remove('fullscreen');
    document.body.classList.remove('no-scroll');

    // Scroll to hero
    heroSection.scrollIntoView({ behavior: 'smooth' });
});

homeBtn2.addEventListener('click', () => {
    // Show all sections again
    heroSection.classList.remove('hidden');
    messageSection.classList.remove('hidden');
    footerSection.classList.remove('hidden');

    // Remove fullscreen mode
    albumSection.classList.remove('fullscreen');
    document.body.classList.remove('no-scroll');

    // Scroll to hero
    heroSection.scrollIntoView({ behavior: 'smooth' });
});

// Intersection Observer for album section (alternative trigger)
const observerOptions = {
    threshold: 0.2
};

const albumObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gallery.classList.add('show');
        }
    });
}, observerOptions);

albumObserver.observe(albumSection);

// Create additional floating hearts dynamically
function createFloatingHeart() {
    const symbols = ['💖', '💕', '✨', '🎓', '⭐'];
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];

    const element = document.createElement('div');
    element.textContent = randomSymbol;
    element.style.position = 'fixed';
    element.style.left = Math.random() * 100 + '%';
    element.style.bottom = '-50px';
    element.style.fontSize = '2rem';
    element.style.pointerEvents = 'none';
    element.style.zIndex = '1';
    element.style.opacity = '0';
    element.style.animation = `floatUp ${10 + Math.random() * 5}s linear forwards`;

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 15000);
}

// Create floating hearts periodically
setInterval(createFloatingHeart, 3000);

// Add CSS animation for floating symbols
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            bottom: -50px;
            opacity: 0;
            transform: translateX(0) rotate(0deg);
        }
        25% {
            opacity: 0.7;
        }
        50% {
            transform: translateX(50px) rotate(180deg);
        }
        75% {
            opacity: 0.4;
        }
        100% {
            bottom: 110%;
            opacity: 0;
            transform: translateX(-30px) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Console Easter Egg
console.log('%c💖 Congratulations, Graduate! 💖', 'font-size: 24px; color: #d946a6; font-weight: bold;');
console.log('%cMade with love 💕', 'font-size: 16px; color: #8b5cf6;');
