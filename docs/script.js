document.addEventListener('DOMContentLoaded', function() {
    const daysGrid = document.getElementById('days-grid');
    const daysInMonth = 31; // for simplicity, let's assume 31 days in a month

    // Load or initialize check-ins
    const checkIns = JSON.parse(localStorage.getItem('checkIns')) || {};

    function createDaysGrid() {
        for (let i = 0; i < daysInMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.setAttribute('data-day', i + 1);

            // Event listener for check-ins
            day.addEventListener('click', function() {
                const dayIndex = this.getAttribute('data-day');
                checkIn(dayIndex);
            });

            daysGrid.appendChild(day);
        }
        updateDaysGrid();
    }

    function checkIn(dayIndex) {
        checkIns[dayIndex] = (checkIns[dayIndex] || 0) + 1; // Increment the count of check-ins
        localStorage.setItem('checkIns', JSON.stringify(checkIns));
        updateDaysGrid();
    }

    function updateDaysGrid() {
        for (let i = 0; i < daysInMonth; i++) {
            const day = daysGrid.children[i];
            const checkInCount = checkIns[i + 1] || 0;
            // Update the color based on the number of check-ins
            if (checkInCount > 2) {
                day.classList.add('dark');
                day.classList.remove('medium', 'light');
            } else if (checkInCount > 1) {
                day.classList.add('medium');
                day.classList.remove('light', 'dark');
            } else if (checkInCount > 0) {
                day.classList.add('light');
                day.classList.remove('medium', 'dark');
            } else {
                day.classList.remove('light', 'medium', 'dark');
            }
        }
    }

    createDaysGrid();
});
