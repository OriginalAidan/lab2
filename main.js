// Footer
document.getElementById("myFooter").innerHTML = `&copy; ${new Date().getFullYear()} Aidan Smith`;

// Alert Button - Bottom of Footer
document.getElementById('btn-alert').onclick = () => {
    alert('Thanks for checking my site :)');
};

// Hover Button - Bottom of Footer
const hoverButton = document.getElementById('btnhover');
hoverButton.addEventListener('mouseover', () => {
    hoverButton.innerText = 'Im gone!'; // Hovered Text
});

hoverButton.addEventListener('mouseleave', () => {
    hoverButton.innerText = 'Hover over me!'; // Shown Text
});

// Incrementing Button
let count = 1;
const counterButton = document.getElementById('btn-counter');
const counterText = document.getElementById('txt-counter');

counterButton.onclick = () => {
    count = count + 1;
    counterText.innerHTML = `Number: ${count}`;
    // Check if the number is even or odd
    if (count % 2 === 0) {
        counterText.classList.remove('odd');
        counterText.classList.add('even');
    } else {
        counterText.classList.remove('even');
        counterText.classList.add('odd');
    }
};

//  Loops
const numbersList = document.getElementById('numbers');

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 === 0 ? 'even' : 'odd';
    numbersList.appendChild(listItem);
}
