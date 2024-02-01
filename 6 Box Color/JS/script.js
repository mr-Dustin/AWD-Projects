const dayButtons = document.querySelectorAll('.day-buttons button');
const animationBoxBefore = document.querySelector('.animation-box-before');
const animationBoxAfter = document.querySelector('.animation-box-after');
const pageBackground = document.querySelector('*');

let isBeforeActive = true;

dayButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonBackgroundColor = getComputedStyle(button).backgroundColor;
    const buttonBorderColor = getComputedStyle(button).borderColor;

    if (isBeforeActive) {
      animationBoxBefore.style.animation = 'up 1s ease-out forwards';

      animationBoxAfter.style.animation = 'drop 1s ease-in forwards,fadeOut 1s ease-in forwards';
      animationBoxAfter.style.backgroundColor = buttonBackgroundColor;
      animationBoxAfter.style.borderColor = buttonBackgroundColor;
    } else {
      animationBoxAfter.style.animation = 'up 1s ease-out forwards';

      animationBoxBefore.style.animation = 'drop 1s ease-in forwards,fadeOut 1s ease-in forwards';
      animationBoxBefore.style.backgroundColor = buttonBackgroundColor;
      animationBoxBefore.style.borderColor = buttonBackgroundColor;
    }

    isBeforeActive = !isBeforeActive; // Toggle the active state
  });
});