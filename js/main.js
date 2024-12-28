const colors = [
    '#5c6bc0',
    '#000' // Черный цвет
];

// 2. Функция для случайного выбора цвета
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}


function setHeaderBackgroundColor() {
    const header = document.querySelector('header');
    const randomColor = getRandomColor();
    header.style.backgroundColor = randomColor;
}


setHeaderBackgroundColor();
