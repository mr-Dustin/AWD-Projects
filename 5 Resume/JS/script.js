const colorChangerButton = document.getElementById('color-changer');

let originalColors = [];

colorChangerButton.addEventListener('click', () => {
  if (originalColors.length === 0) {
    // Store original colors for grouped elements
    const PrimaryElements = document.querySelectorAll('.header, .title, .subtitle, .year, .date');
    const SecondaryElements = document.querySelectorAll('.description, .headinfo, li,a');
    const SubElements = document.querySelectorAll(' .seperator');
    const LineElements = document.querySelectorAll('hr');
    const BackgroundElements = document.querySelectorAll('.resume, div, li, span, ul, a');

    // Combine elements for efficient storage and restoration
    allElements = [...PrimaryElements, ...SecondaryElements, ...SubElements, ...LineElements, ...BackgroundElements];


    allElements.forEach(element => {
      originalColors.push({
        color: element.style.color,
        backgroundColor: element.style.backgroundColor
      });
    });

    // Apply new colors to grouped elements
    PrimaryElements.forEach(element => element.style.color = '#45A29E');
    SecondaryElements.forEach(element => element.style.color = '#66FCF1');
    SubElements.forEach(element => element.style.color = '#C5C6C7');
    LineElements.forEach(element => element.style.backgroundColor = '#1F2833');
    BackgroundElements.forEach(element => element.style.backgroundColor = '#0B0C10');
  } else {
    // Use the already stored allElements array
    allElements.forEach((element, index) => {
        const originalColor = originalColors[index];
        element.style.color = originalColor.color;
        element.style.backgroundColor = originalColor.backgroundColor;
      });
      originalColors = [];
    }
});

