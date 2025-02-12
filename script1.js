// Get elements
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const specialButton = document.getElementById('special-button');
const helloKittySlide = document.getElementById('hello-kitty-slide');
const minionGif = document.getElementById('minion-gif');
const mainContainer = document.getElementById('main-container');

// Enlarge the special button on every click
function enlargeButton() {
  const currentSize = parseFloat(window.getComputedStyle(specialButton).fontSize);
  specialButton.style.fontSize = `${currentSize + 10}px`;
  specialButton.style.padding = `${parseFloat(window.getComputedStyle(specialButton).paddingTop) + 2}px ${parseFloat(window.getComputedStyle(specialButton).paddingLeft) + 4}px`;
}

yesButton.addEventListener('click', enlargeButton);
noButton.addEventListener('click', enlargeButton);

// Hide main container and show Hello Kitty slide
specialButton.addEventListener('click', () => {
  mainContainer.style.display = 'none'; // Hide the main container
  helloKittySlide.style.display = 'block'; // Show the Hello Kitty slide
});
