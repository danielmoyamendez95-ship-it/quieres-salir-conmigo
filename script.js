const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionScreen = document.getElementById('question-screen');
const successScreen = document.getElementById('success-screen');
const mainContainer = document.getElementById('main-container');

// Frases divertidas que cambian al presionar "No"
const noMessages = [
    "No",
    "¿Estás segura?",
    "Piénsalo bien...",
    "¡Dale que sí!",
    "Me vas a romper el corazón 💔",
    "¡No me hagas esto! 🥺",
    "¡Di que sí por favor!"
];

let clickCount = 0;

// Lógica cuando presionan el botón "No"
noBtn.addEventListener('click', () => {
    clickCount++;
    
    // Cambiar texto de forma rotativa
    const messageIndex = clickCount % noMessages.length;
    noBtn.textContent = noMessages[messageIndex];

    // Hacer que el botón SÍ crezca cada vez más
    const currentSize = window.getComputedStyle(yesBtn).fontSize;
    const newSize = parseFloat(currentSize) * 1.3;
    yesBtn.style.fontSize = `${newSize}px`;
    yesBtn.style.padding = `${12 * (newSize / 18)}px ${30 * (newSize / 18)}px`;
});

// Lógica cuando presionan el botón "¡SÍ!"
yesBtn.addEventListener('click', () => {
    questionScreen.classList.add('hidden');
    successScreen.classList.remove('hidden');

    // Generar corazones flotantes
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.bottom = '0px';
        mainContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1500);
    }, 300);
});
