document.getElementById('vehicle-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the vehicle number
    const vehicleNumber = document.getElementById('vehicle-number').value;
    
    // Get the current date and time
    const arrivalTime = new Date().toLocaleString();
    
    // Create a new row for the log
    const logBody = document.getElementById('vehicle-log-body');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${vehicleNumber}</td>
        <td>${arrivalTime}</td>
        <td>N/A</td>
    `;
    
    // Append the new row to the log
    logBody.appendChild(newRow);
    
    // Clear the input field
    document.getElementById('vehicle-number').value = '';
});
