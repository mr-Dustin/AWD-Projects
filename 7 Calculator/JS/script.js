const buttons = document.querySelectorAll('.btn');
const numDisplay = document.getElementById('numDisplay');
let selectedButton = null;
let firstOperand = '';
let secondOperand = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('mouseover', () => {
    button.style.borderRadius = '50%';
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
  });

  button.addEventListener('mouseout', () => {
    button.style.borderRadius = '10%';
    button.style.backgroundColor = '#cdddd5';
    button.style.color = '#696b77';
  });

  button.addEventListener('click', () => {
    if (selectedButton) {
      selectedButton.style.borderColor = '#696b77';
    }

    button.style.borderColor = 'yellow';
    selectedButton = button;

    const randomDeg = Math.floor(Math.random() * 360); // Generate random degree between 0 and 359
    document.body.style.backgroundImage = `linear-gradient(${randomDeg}deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 43%, rgba(0,212,255,1) 100%)`;

    // Handle calculator functionality based on button value
    const buttonValue = button.textContent;
    switch (buttonValue) {
        case 'C':
          firstOperand = '';
          secondOperand = '';
          operator = '';
          updateDisplay('0');
          break;
        case '<':
          if (firstOperand.length > 0) {
            firstOperand = firstOperand.slice(0, -1);
            updateDisplay(firstOperand);
          }
          break;
        case '/':
        case '*':
        case '-':
        case '+':
          firstOperand = numDisplay.textContent;
          operator = buttonValue;
          secondOperand = '';
          updateDisplay(firstOperand + operator);
          break;
        case '=':
          if (operator !== '') {
            const result = eval(firstOperand + operator + secondOperand);
            updateDisplay(result);
            firstOperand = result;
            operator = '';
            secondOperand = '';
          }
          break;
        default:
          if (operator === '') {
            firstOperand += buttonValue;
          } else {
            secondOperand += buttonValue;
          }
          updateDisplay(firstOperand + operator + secondOperand);
      }
    updateDisplay(newNum); // Update the numDisplay with the new number
    
  });
});

function updateDisplay(newNum) {
  numDisplay.textContent = newNum;
}
