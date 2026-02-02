// C'EST ICI QUE TU MODIFIES TES QUESTIONS
const reasons = [
    reasons = [
    "Your eyes (obviously).",
    "Your smile that makes me forget everything.",
    "Your laugh, especially when it gets out of control.",
    "The way you look at me when you think I'm not looking.",
    "How your hand automatically finds mine when we walk.",
    "The fact that you actually understand my bad jokes.",
    "Your smell, even when you just woke up.",
    "Your hair, even when it's a total mess.",
    "The way you pout (it's annoying but way too cute).",
    "Your stubborn side (you never give up).",
    "How you steal my hoodies and they look better on you than me.",
    "Your tiny voice when you're tired.",
    "Your goodnight texts (I can't sleep well without them).",
    "The calm I feel the second you're with me.",
    "The way you tell stories with way too many details.",
    "Your absolutely terrible sense of direction.",
    "The fact that you're the first person I want to call for anything.",
    "That feeling of being 'home' wherever we are, as long as you're there.",
    "Your passion for sometimes weird random things.",
    "How protective you are over me.",
    "The way you bite your lip when you're concentrating.",
    "The fact that you remember things about me that I forgot myself.",
    "Your natural beauty, no filter, just you in the morning.",
    "Your super serious face when you're working on something important.",
    "Your little happy dance when you're eating something you love.",
    "Your honesty, even when it stings a little.",
    "How you push me to be better every single day.",
    "Your hugs that instantly recharge my battery.",
    "The fact that we can sit in silence without it being awkward.",
    "Your forehead kisses.",
    "Your style (you honestly have too much flow).",
    "Your mental strength.",
    "Your kindness to people you don't even know.",
    "Our inside jokes that no one else would understand.",
    "The way you say my name.",
    "The fact that you're my best friend before anything else.",
    "Your hands that are always cold (but I'll warm them up).",
    "Your curiosity about everything.",
    "How you defend me in front of others.",
    "Your 'drama queen' moments sometimes.",
    "Your patience with me (and God knows you need it).",
    "The way you play with your hair.",
    "Your intelligence that impresses me all the time.",
    "The fact that you believe in me more than I believe in myself.",
    "Your generosity.",
    "Your touch of madness.",
    "Your music taste (even the embarrassing songs).",
    "The way you fall asleep on me during movies.",
    "Your little thoughtful gestures that change everything.",
    "Your loyalty.",
    "Your courage.",
    "The fact that you never fake it.",
    "Your random deep thoughts that come out of nowhere.",
    "The way you reassure me without saying a word.",
    "How your eyes sparkle when you have an idea.",
    "Your clumsy side.",
    "The confidence you give me.",
    "Our nights doing nothing but talking.",
    "Your skin is just so soft.",
    "Your 'I love you's' at the perfect moments.",
    "The way you handle my stressful moments.",
    "Your adventurous spirit.",
    "The fact that you are truly unique.",
    "Your favorite snacks that I always end up sharing.",
    "Your style, even in pajamas.",
    "The way you frown when you disagree.",
    "Your vulnerability that touches my heart.",
    "Your optimism.",
    "The fact that you've become essential to my life.",
    "Your neck kisses.",
    "Your determination to succeed in whatever you do.",
    "Our plans for the future, even the unrealistic ones.",
    "How you make me laugh when I just want to be grumpy.",
    "Your empathy.",
    "The fact that you are 'my' person.",
    "The way you walk.",
    "Your childish side sometimes.",
    "Your hands in my hair.",
    "How lucky I am to be with you.",
    "Your support in all my projects.",
    "Your ability to forgive my mistakes.",
    "Your voice on the phone.",
    "The fact that you know me by heart.",
    "Your jealous side (just the right amount).",
    "The intense way you stare at me sometimes.",
    "Your general knowledge.",
    "Your sense of aesthetics.",
    "The way you take care of the people you love.",
    "Your feet looking for mine under the blanket.",
    "Your boldness.",
    "The fact that you're so photogenic (even when you don't want to be).",
    "Your humility.",
    "Your energy.",
    "Our effortless chemistry.",
    "Your mysterious side sometimes.",
    "Your resilience.",
    "The fact that you make everything around you more beautiful.",
    "Just your presence, simply.",
    "The fact that you chose me.",
    "Because it's you, and that's enough for me to love you."
]
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('total').innerText = reasons.length;
    showCard();
});

function showCard() {
    if (currentIndex >= reasons.length) {
        document.querySelector('.card-area').innerHTML = `
            <div class="retro-window">
                <div class="window-bar">Fin.exe</div>
                <div class="window-content">Merci mon cœur ! 💖<br>J'ai tout reçu.</div>
            </div>`;
        document.querySelector('.controls').style.display = 'none';
        return;
    }
    document.getElementById('reason-text').innerText = reasons[currentIndex];
    document.getElementById('current').innerText = currentIndex + 1;
}

function vote(choice) {
    const currentReason = reasons[currentIndex];

    // Envoi au serveur (sans attendre la réponse pour aller vite)
    fetch('/api/vote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reason: currentReason, choice: choice })
    });

    currentIndex++;
    showCard();
}