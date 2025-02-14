let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Crossword Puzzle Code
const puzzleContainer = document.getElementById('puzzle-container');
const crosswordData = [
    { clue: "1. You are my ___", answer: "everything", position: { x: 0, y: 0 }, isHorizontal: true },
    { clue: "2. Our favorite color", answer: "red", position: { x: 0, y: 1 }, isHorizontal: false },
    { clue: "3. The month we met", answer: "february", position: { x: 2, y: 0 }, isHorizontal: true }
];

function createCrossword(crosswordData) {
    const gridSize = 15;
    const table = document.createElement('table');
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('td');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    crosswordData.forEach((word, index) => {
        const { clue, answer, position, isHorizontal } = word;
        const { x, y } = position;
        for (let i = 0; i < answer.length; i++) {
            const cell = isHorizontal ? table.rows[y].cells[x + i] : table.rows[y + i].cells[x];
            cell.textContent = answer[i];
            cell.classList.add('filled');
        }
        const clueElement = document.createElement('div');
        clueElement.textContent = `${index + 1}. ${clue}`;
        puzzleContainer.appendChild(clueElement);
    });
    puzzleContainer.appendChild(table);
}

createCrossword(crosswordData);