 // Calculator program
const display = document.getElementById("display");

// Append input to the display
function appendTODISPLAY(input) {
  if (display.value === "Error") {
    display.value = ""; // Clear the display if it shows "Error"
  }
  display.value += input;
}

// Clear the display
function cleardisplay() {
  display.value = "";
}

// Calculate the result of the expression
function calculate() {
  try {
    // Safely evaluate the expression
    display.value = eval(display.value) || 0;
  } catch (error) {
    display.value = "Error"; // Display an error for invalid input
  }
}

// Calculate the square root
function calculateSquareRoot() {
  try {
    // Parse the current display value as a number
    const currentValue = parseFloat(display.value);

    if (isNaN(currentValue)) {
      display.value = "Error"; // Handle invalid input
    } else if (currentValue < 0) {
      display.value = "Error"; // No square root for negative numbers
    } else {
      display.value = Math.sqrt(currentValue).toFixed(10).replace(/\.?0+$/, ""); // Calculate square root
    }
  } catch (error) {
    display.value = "Error"; // Handle unexpected errors
  }
}

