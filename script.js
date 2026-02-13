// Intro screen elements
const introScreen = document.getElementById('intro-screen');
const getStartedBtn = document.getElementById('get-started-btn');
const modeSelection = document.getElementById('mode-selection');

// Handle intro screen - show mode selection
getStartedBtn.addEventListener('click', () => {
    introScreen.classList.add('hidden');
    setTimeout(() => {
        modeSelection.style.display = 'block';
    }, 500);
});

// Handle mode selection - navigate to separate HTML pages
document.querySelectorAll('.mode-card').forEach(card => {
    card.addEventListener('click', () => {
        const mode = card.dataset.mode;
        
        if (mode === 'personal') {
            window.location.href = 'personal-tracker.html';
        } else if (mode === 'group') {
            window.location.href = 'group-tracker.html';
        } else if (mode === 'trip') {
            window.location.href = 'trip-tracker.html';
        }
    });
});
