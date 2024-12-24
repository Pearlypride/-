const cardImages = [
    "https://i.imgur.com/ArUfbvp.png",
    "https://i.imgur.com/NfZPLNb.png",
    "https://i.imgur.com/4TdAnf6.png",
    "https://i.imgur.com/4wMmucL.png",
    "https://i.imgur.com/NMRx3W9.png",
    "https://i.imgur.com/RTnmAA5.png",
    "https://i.imgur.com/kMSlQPG.png"
];

const spinner = document.getElementById('spinner');
const openCaseButton = document.getElementById('openCase');
const resultDiv = document.getElementById('result');
let isSpinning = false;

// Создаем изображения внутри спиннера
for (let i = 0; i < 50; i++) { // Увеличил количество для более длинной прокрутки
    cardImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = `Card ${i* cardImages.length + cardImages.indexOf(image) + 1}`;
        spinner.appendChild(img);
    });
}

openCaseButton.addEventListener('click', () => {
    if (isSpinning) return; // Предотвращаем повторные клики во время анимации

    isSpinning = true;
    resultDiv.textContent = '';
    spinner.style.transition = 'transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Добавил easing для плавности
    const numImages = spinner.children.length;
    const randomStop = Math.floor(Math.random() * numImages);
    const stopPosition = -randomStop * 300; // 300 - ширина изображения
    spinner.style.transform = `translateX(${stopPosition}px)`;

    setTimeout(() => {
        const selectedCard = spinner.children[randomStop].alt;
        resultDiv.textContent = `Вы получили: ${selectedCard}`;
        spinner.style.transition = 'none'; // Убираем transition после остановки
        isSpinning = false;
    }, 5000); // 5000ms = 5s (время анимации)
});