function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');
    // Check if the value is a valid number
    if (isNaN(value) || value === '') {
        result.innerHTML = 'Invalid, please enter a number';
    } else {
        // Square the number and display the result
        result.innerHTML = value * value;
    }
}

// Wire up the button click event
document.getElementById('calculate').addEventListener('click', calculateSquare);
