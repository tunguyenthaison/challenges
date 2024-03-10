document.addEventListener('DOMContentLoaded', function() {
    const daysGrid = document.getElementById('days-grid');
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Load or initialize check-ins
    const checkIns = JSON.parse(localStorage.getItem('checkIns')) || {};

    function createDaysGrid() {
        // Create empty squares for days of previous month
        for (let i = 0; i < firstDayOfMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            daysGrid.appendChild(day);
        }

        // Create actual squares for current month
        for (let i = 1; i <= lastDateOfMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.setAttribute('data-day', i);

            // Mark the current day
            if (i === today.getDate()) {
                day.classList.add('current');
            }

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
        checkIns[`${currentYear}-${currentMonth + 1}-${dayIndex}`] = true;
        localStorage.setItem('checkIns', JSON.stringify(checkIns));
        updateDaysGrid();
    }

    function updateDaysGrid() {
        const days = daysGrid.getElementsByClassName('day');
        Object.keys(checkIns).forEach(date => {
            const [year, month, day] = date.split('-').map(num => parseInt(num, 10));
            if (year === currentYear && month === currentMonth + 1) {
                const dayElement = days[day + firstDayOfMonth - 1];
                dayElement.classList.add('checked');
            }
        });
    }

    createDaysGrid();
});
