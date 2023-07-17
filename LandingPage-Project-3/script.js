document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Fetch form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Validate form
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return;
    }
  
    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  
    // Send form data to server (you can customize this part with your own logic)
    alert('Form submitted successfully');
  });
  