const tracker = document.getElementById('tracker');

// Initialize or load data
const today = new Date().toDateString();
const checkIns = JSON.parse(localStorage.getItem('checkIns')) || {};

function createTracker() {
    for (let i = 0; i < 365; i++) { // Create cells for 365 days as an example
        const day = document.createElement('div');
        day.classList.add('day');
        tracker.appendChild(day);
    }
    updateTracker();
}

function updateTracker() {
    const days = tracker.getElementsByClassName('day');
    Object.keys(checkIns).forEach(date => {
        const dayIndex = Math.floor((new Date(date) - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        if (days[dayIndex]) {
            days[dayIndex].classList.add('checked');
        }
    });
}

function checkIn() {
    checkIns[today] = true;
    localStorage.setItem('checkIns', JSON.stringify(checkIns));
    updateTracker();
}

createTracker();