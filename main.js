function main() {
  // pega o display do html
  const display = document.querySelector('.display');

  // pega as colunas da calculadora
  const rows = document.querySelectorAll('.row');

  // faz o loop por todas as colunas
  rows.forEach(r => {
    // faz o loop por todos os elementos da coluna
    r.childNodes.forEach(cn => {
      // se for a coluna 'C' reseta o display
      if(cn.innerText === 'C') {
        cn.addEventListener('click', () => {
          display.innerText = '';
        })
      } 
      // se for a coluna '=' faz a equação no display
      else if(cn.innerText === '=') {
        cn.addEventListener('click', () => {
          display.innerText = roundOff(eval(display.innerText), 2);
        })
      } 
      // se for qualquer outra coluna, adiciona o caracter ao display
      else {
        cn.addEventListener('click', () => {
          display.innerText += cn.innerText;
        });
      }
    })
  })
}

// função pra colocar casas decimais em um numero
function roundOff(num, places) {
  const x = Math.pow(10,places);
  return Math.round(num * x) / x;
}

main();
