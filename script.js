const messages = [
    "Hello!",
    "How are you?",
    "Welcome to the website!",
    "Have a great day!",
    "Keep clicking!",
    "You're doing great!",
    "This is fun!",
    "Thanks for visiting!"
];

let currentIndex = 0;

document.getElementById('clickButton').addEventListener('click', function() {
    const displayText = document.getElementById('displayText');
    displayText.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length; // Cycle through the messages
});