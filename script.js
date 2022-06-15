const boxSection = document.querySelector('.box');
const inputColuna = document.querySelector('#colunas');
const inputLinha = document.querySelector('#linhas');

function generateBox() {
  const colunaValue = Number(inputColuna.value);
  const linhaValue = Number(inputLinha.value);
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
  console.log(typeof colunaValue, colunaValue)
}