const boxSection = document.querySelector('.box');
const inputColumn = document.getElementById('columns');
const inputRow = document.getElementById('rows');
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
  let colunaValue = Number(inputColumn.value) || 1;
  let linhaValue = Number(inputRow.value) || 1;
  boxSection.innerHTML = '';
  if (linhaValue > 100 || colunaValue > 100) {
    window.alert('Favor digitar um número menor ou igual a 100.');
    [inputColumn.value, colunaValue] = [1, 1];
    [inputRow.value, linhaValue] = [1, 1];
  }

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
  sendBtn.disabled = true;
  sendBtn.classList.add('disabled');
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
