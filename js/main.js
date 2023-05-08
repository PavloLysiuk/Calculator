const buttonsElements = document.querySelectorAll('button');
const inputFieldElement = document.getElementById('result');

for (let i = 0; i < buttonsElements.length; i += 1) {
  buttonsElements[i].addEventListener('click', () => {
    const buttonValue = buttonsElements[i].textContent;
    if (buttonValue === 'C') {
      clearResult();
    } else if (buttonValue === '=') {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldElement.value = '';
}

function calculateResult() {
  inputFieldElement.value = eval(inputFieldElement.value);
}

function appendValue(buttonValue) {
  inputFieldElement.value += buttonValue;
}
