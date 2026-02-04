document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const heroSection = document.getElementById('hero');
    const mainContent = document.getElementById('main-content');
    const giftBox = document.getElementById('gift-box');
    const giftMessage = document.getElementById('gift-message');
    const musicToggle = document.getElementById('music-toggle');
    
    let isMusicPlaying = false;
    // Note: Audio requires user interaction to play in most browsers
    // You can add an <audio> tag in HTML with an id="bg-music" to make this work real
    
    startBtn.addEventListener('click', () => {
        // Trigger Confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        // Spiral Confetti effect
        var duration = 3000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff9a9e', '#fecfef']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff9a9e', '#fecfef']
            });
        
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

        // Smooth scroll to main content
        setTimeout(() => {
            mainContent.classList.remove('hidden');
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.classList.add('fade-in');
                mainContent.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }, 1000);
    });

    // Gift Box Interaction
    giftBox.addEventListener('click', () => {
        if (!giftBox.classList.contains('open')) {
            giftBox.classList.add('open');
            confetti({
                particleCount: 50,
                spread: 60,
                origin: { y: 0.8 } // origin near the gift box ideally
            });
            setTimeout(() => {
                giftMessage.classList.remove('hidden');
                giftMessage.style.display = 'block';
            }, 500);
        }
    });

    // Music Toggle (Placeholder logic)
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            musicToggle.textContent = '►';
            // audio.pause();
        } else {
            musicToggle.textContent = '❚❚';
            // audio.play();
        }
        isMusicPlaying = !isMusicPlaying;
    });
});
