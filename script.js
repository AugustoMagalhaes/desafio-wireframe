const boxSection = document.querySelector('.box');
const inputColumn = document.querySelector('#colunas');
const inputRow = document.querySelector('#linhas');
const sendBtn = document.querySelector('.btn');

function onInputChange() {
  const allValues = [Number(inputRow.value), Number(inputColumn.value)];
  const checkDisabled = allValues.some((el) => !Number(el) || Number(el) !== parseInt(el));
  sendBtn.disabled = checkDisabled;
  if (checkDisabled) {
    sendBtn.className.includes('disabled') === false && sendBtn.classList.add('disabled');
  } else {
    sendBtn.classList.remove('disabled');
  }
}

function generateBox() {
  const colunaValue = Number(inputColumn.value) || 1;
  const linhaValue = Number(inputRow.value) || 1;
  boxSection.innerHTML = '';

  for (let row = 0; row < linhaValue; row += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let col = 0; col < colunaValue; col += 1 ) {
      const newCol = document.createElement('div');
      newCol.classList.add('column');
      newRow.appendChild(newCol);
    }
    boxSection.appendChild(newRow)
  }
  inputColumn.value = '';
  inputRow.value = '';
}

function generateBoxKeyboard({key}) {
  if (key === 'Enter' && sendBtn.disabled === false) {
    generateBox();
  }
}

window.onload = function() {
  sendBtn.addEventListener('click', generateBox);
  inputColumn.addEventListener('change', onInputChange);
  inputColumn.addEventListener('keyup', onInputChange);
  inputColumn.addEventListener('keypress', generateBoxKeyboard)
  inputRow.addEventListener('change', onInputChange);
  inputRow.addEventListener('keyup', onInputChange);
  inputRow.addEventListener('keypress', generateBoxKeyboard);
  generateBox();
}