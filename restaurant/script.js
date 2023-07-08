// Store contact data
function storeContactData(name, phoneNumber) {
    // Implement your logic to store the contact data
    // (e.g., using a database or localStorage)
    // You can use AJAX or fetch to send the data to the server
  }
  
  // Reservation form submission
  document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
  
    // Get the form values
    var name = document.getElementById('exampleInputName1').value;
    var phoneNumber = document.getElementById('exampleInputphoneNumber1').value;
  
    // Store the contact data
    storeContactData(name, phoneNumber);
  
    // Show the booking details
    var bookingDetails = document.getElementById('booking-details');
    bookingDetails.innerHTML = `
      <p>Thank you for your reservation, ${name}!</p>
      <p>We will contact you at ${phoneNumber} to confirm your booking.</p>
    `;
    bookingDetails.style.display = 'block';
  });
  