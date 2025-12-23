// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
  

  // Implement the function to change background color


// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  
  document.body.style.backgroundColor = '';


  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {const keyPressDisplay = document.getElementById('keyPressDisplay');
  if (keyPressDisplay) {
    keyPressDisplay.textContent = `Key pressed: ${event.key}`;
  }
}
  
  // Implement the function to display key pressed


// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const textInput = document.getElementById('textInput');
  const textInputDisplay = document.getElementById('textInputDisplay');
  if (!textInput || !textInputDisplay) return;

  // If called via event, use event.target.value; otherwise, read input's value
  const value = event ? event.target.value : textInput.value;
  textInputDisplay.textContent = `You typed: ${value}`;
}

    
    // Update stats if function exists
    if (typeof updateCombinedStats === 'function') {
        inputChangeCount++;
        updateCombinedStats();
    }
  

  
  // Implement the function to display user input


// Attach Event Listeners
function setupEventListeners() {
  const changeButton = document.getElementById('changeColorButton');
  if (changeButton) changeButton.addEventListener('click', changeBackgroundColor);

  const resetButton = document.getElementById('resetColorButton');
  if (resetButton) resetButton.addEventListener('dblclick', resetBackgroundColor);

  // Keyboard input
  document.addEventListener('keydown', displayKeyPress);
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}

