// Event listener for form validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
    // Get form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    // Simple form validation
    if (!name || !email) {
        alert('Please fill out all fields');
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Form submitted successfully');
    }
});

// Event listener to open the modal
const openModalBtn = document.getElementById('openModalBtn');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', function() {
    modal.style.display = 'flex'; // Show modal
});

// Event listener to close the modal
const closeModalBtn = document.getElementById('closeModalBtn');

closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide modal
});

// Close modal if user clicks outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
