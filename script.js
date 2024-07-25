document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    fetch('https://script.google.com/macros/s/AKfycbwxJkF_wATUw5pScHJH2y_nIn7ex7EwLxkC-8-d7Azx7AshS24G4pFoGrzA6-NVJkJt/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.result === 'success') {
            document.getElementById('signup-form').reset();
            document.getElementById('success-message').style.display = 'block';
        } else {
            alert('There was an error. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error. Please try again.');
    });
});
