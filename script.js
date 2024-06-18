document.getElementById('generateBtn').addEventListener('click', function() {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    // Update the result display
    const resultElement = document.querySelector('.result');
    resultElement.textContent = randomNumber;
});
