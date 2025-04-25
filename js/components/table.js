document.addEventListener('DOMContentLoaded', function() {
  // Function to handle table row hover effect
  const tableRows = document.querySelectorAll('table.table tbody tr');
  if (tableRows.length) {
    tableRows.forEach(row => {
      row.addEventListener('mouseover', function() {
        this.classList.add('hover:bg-base-200');
      });
      row.addEventListener('mouseout', function() {
        this.classList.remove('hover:bg-base-200');
      });
      // Make rows clickable for details view
      row.style.cursor = 'pointer';
      row.addEventListener('click', function() {
        const orderId = this.querySelector('td:first-child').textContent;
        console.log(`Order ${orderId} clicked`);
        // In a real app, you would redirect to order details or show a modal
      });
    });
  }

  // Handle table sorting (if needed)
  const tableHeaders = document.querySelectorAll('table.table thead th');
  if (tableHeaders.length) {
    tableHeaders.forEach(header => {
      header.style.cursor = 'pointer';
      header.addEventListener('click', function() {
        const column = this.cellIndex;
        console.log(`Sort by column ${column}`);
        // In a real app, you would implement sorting logic here
      });
    });
  }
}); 