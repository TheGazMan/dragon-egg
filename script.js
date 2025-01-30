const answers = [
    "Your a king",
    "Your confidence will guide you",
    "I love you"
];

function shakeBall() {
    const dragonEgg = document.querySelector('.eight-ball');
    const answer = document.getElementById('answer');
    
    // Toggle cracking class
    dragonEgg.classList.toggle('cracking');
    
    // Generate new answer only when opening
    if (dragonEgg.classList.contains('cracking')) {
        const selectedAnswer = answers[Math.floor(Math.random() * answers.length)];
        answer.textContent = selectedAnswer;
        
        // If the answer is "Your a king", show the king animation
        if (selectedAnswer === "Your a king") {
            const king = document.createElement('div');
            king.className = 'king-animation';
            document.body.appendChild(king);
            
            // Remove the animation after it completes
            setTimeout(() => {
                king.remove();
            }, 4000);
        }
    }
}

// Force "Your a king" answer for testing
// Uncomment this to test the animation
/*
answers.length = 1;
answers[0] = "Your a king";
*/ 