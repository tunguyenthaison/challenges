document.addEventListener('DOMContentLoaded', function() {
    // Sample static data for the contributions.
    // In a real application, this could be fetched from a server or user input.
    const contributions = [
      { date: '2024-01-01', count: 0 },
      { date: '2024-01-02', count: 1 },
      // ... more data
    ];
  
    const gridContainer = document.querySelector('.grid-container');
  
    contributions.forEach(contribution => {
      const element = document.createElement('div');
      element.classList.add('grid-item');
      // Assign the color based on the contribution count
      element.classList.add(`contribution-${contribution.count}`);
      gridContainer.appendChild(element);
    });
  });
  