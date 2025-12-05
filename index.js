function calculateSquare(){
    let value = document.getElementById('number').value;
    let result = document.getElementById('result');
    if (isNaN(value) || value === '') {
        result.innerHTML = 'Invalid, please enter a number';
    } else {
        result.innerHTML = value * value;
    }
}
document.getElementById('calculate').addEventListener('click', calculateSquare);
