// C'EST ICI QUE TU MODIFIES TES QUESTIONS
const reasons = [
    
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
                <div class="window-content">yes I’m still bored <br>I appreciate you responding to Mrs. President's request.</div>
            </div>`;
        document.querySelector('.controls').style.display = 'none';
        return;
    }
    document.getElementById('reason-text').innerText = reasons[currentIndex];
    document.getElementById('current').innerText = currentIndex + 1;
}

function vote(choice) {
    const currentReason = reasons[currentIndex];

    // Envoi direct à Formspree
    fetch('https://formspree.io/f/mwvqwobb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            reason: currentReason, 
            choice: choice,
            message: `Elle a choisi ${choice} pour la raison : ${currentReason}`
        })
    });

    currentIndex++;
    showCard();
}
