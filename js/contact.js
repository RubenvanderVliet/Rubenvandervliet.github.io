document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var message = document.getElementById('message').value;
        
        // Here you can add code to send the form data to a server for processing
        
        // For demonstration purposes, just showing a success message
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('name').value = '';
        document.getElementById('message').value = '';
    });
});
