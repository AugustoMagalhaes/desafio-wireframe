const boxSection = document.querySelector('.box');
const inputColuna = document.querySelector('#colunas');
const inputLinha = document.querySelector('#linhas');
const sendBtn = document.querySelector('.btn');

function onInputChange() {
  const allValues = [Number(inputLinha.value), Number(inputColuna.value)];
  const checkDisabled = allValues.some((el) => !Number(el) || Number(el) !== parseInt(el));
  sendBtn.disabled = checkDisabled;
  if (checkDisabled) {
    sendBtn.className.includes('disabled') === false && sendBtn.classList.add('disabled');
  } else {
    sendBtn.classList.remove('disabled');
  }
}

function generateBox() {
  const colunaValue = Number(inputColuna.value) || 1;
  const linhaValue = Number(inputLinha.value) || 1;
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
  inputColuna.value = '';
  inputLinha.value = '';
}

function generateBoxKeyboard({key}) {
  if (key === 'Enter' && sendBtn.disabled === false) {
    generateBox();
  }
}

window.onload = function() {
  sendBtn.addEventListener('click', generateBox);
  inputColuna.addEventListener('change', onInputChange);
  inputColuna.addEventListener('keyup', onInputChange);
  inputColuna.addEventListener('keypress', generateBoxKeyboard)
  inputLinha.addEventListener('change', onInputChange);
  inputLinha.addEventListener('keyup', onInputChange);
  inputLinha.addEventListener('keypress', generateBoxKeyboard);
  generateBox();
}