const colors = [
    '#000',
    '#25282d', 
    '#1e2327'
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
