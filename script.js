const answers = [
    "The stars align in your favor",
    "Your destiny lies beyond the stars",
    "Trust in the cosmic energy",
    "A new galaxy awaits you",
    "The universe conspires for you"
];

function shakeBall() {
    const spaceOrb = document.querySelector('.eight-ball');
    const answer = document.getElementById('answer');
    
    // Toggle activation class
    spaceOrb.classList.toggle('cracking');
    
    // Generate new answer only when opening
    if (spaceOrb.classList.contains('cracking')) {
        const selectedAnswer = answers[Math.floor(Math.random() * answers.length)];
        answer.textContent = selectedAnswer;
        
        // Show shooting star animation for special message
        if (selectedAnswer === "The stars align in your favor") {
            const shootingStar = document.createElement('div');
            shootingStar.className = 'shooting-star-animation';
            document.body.appendChild(shootingStar);
            
            // Remove the animation after it completes
            setTimeout(() => {
                shootingStar.remove();
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