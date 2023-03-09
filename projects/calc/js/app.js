// Select the calculator display elements
const displayTop = document.querySelector('.calc__display-top');
const displayBottom = document.querySelector('.calc__display-bottom');

// Select the calculator button elements
const buttons = document.querySelectorAll('.calc__buttons input');

// Add event listeners to the calculator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button value and the current top display value
    let value ;
    if (button.value == '×') {
      value = '*'
    } else {
      value = button.value
    }
    let topValue = displayTop.textContent;
    
    // Handle the different calculator button inputs
    switch(value) {
      case 'C':
        // Clear the display
        topValue = '0';
        displayBottom.textContent = '0';
        break;
        
      case '√':
        // Calculate the square root of the top display value
        topValue = Math.sqrt(Number(topValue)).toFixed(4).toString();
        displayBottom.textContent = topValue;
        break;
        
      case '%':
        // Calculate the percentage of the top display value
        topValue = (Number(topValue) / 100).toString();
        displayBottom.textContent = topValue;
        break;
        
      case '/':
      case '*':
      case '-':
      case '+':
        // Add the operator to the top display value
        topValue += value;
        break;
        
      case ',':
        // Add the decimal point to the top display value
        if (!topValue.includes('.')) {
          topValue += '.';
        }
        break;
        
      case '00':
        // Add two zeros to the top display value
        topValue += '00';
        break;
        
      case '=':
        // Evaluate the expression and display the result
        try {
         //  topValue = eval(topValue).toString();
          displayBottom.textContent = eval(topValue).toString()
        } catch(error) {
          // Handle the error and display the previous result
          topValue = displayBottom.textContent;
        }
        break;
        
      default:
        // Add the digit to the top display value
        if (topValue === '0') {
          topValue = value;
        } else {
          topValue += value;
          displayBottom.textContent = eval(topValue).toString()
        }
    }
    
    // Update the top display value
    displayTop.textContent = topValue;
  });
});