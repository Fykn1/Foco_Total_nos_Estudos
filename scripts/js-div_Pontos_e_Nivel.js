let Pontos_Total = Number(document.querySelector('.js-numero_Pontos').innerHTML);
let Width = 0;

function mudar_div_Pontos_e_Nivel(N) {
  aumenta_Pontos(N);
  aumenta_Nivel();
  atualiza_Barra();
}

function aumenta_Pontos(N) {
  const button_Tarefas = document.querySelector('.js-button_Tarefa' + N)
  const p_MaisPontos = Number(document.querySelector('.js-p_MaisPontos' + N).innerHTML.replace("+", ""));
  let numero_Pontos = document.querySelector('.js-numero_Pontos');

  if (!button_Tarefas.classList[2]) {
    Pontos_Total -= p_MaisPontos;
    Width -= 2 * p_MaisPontos;

  } else {
    Pontos_Total += p_MaisPontos;
    Width += 2 * p_MaisPontos;
  }

  numero_Pontos.innerHTML = Pontos_Total;
}

function aumenta_Nivel() {  
  let Nivel = document.querySelector('.js-numero_Nivel');

  if (Pontos_Total < 50) {
    Nivel.innerHTML = 1;
  
  } else if (Pontos_Total < 100) {
    Nivel.innerHTML = 2;
  
  } else {
    Nivel.innerHTML = 3;
  }
}

function atualiza_Barra() {
  const BarraDeExp = document.querySelector('.js-div_BarraDeExp_Concluido');

  if (Width < 0) {
    BarraDeExp.style.width = 0;
    setTimeout(() => { BarraDeExp.style.width = '100%'; }, 150);
    Width += 100;
    setTimeout(() => { BarraDeExp.style.width = `${Width}%`; }, 350);
  
  } else if (Width < 100) {
    BarraDeExp.style.width = `${Width}%`;
  
  } else if (Width === 100) {
    BarraDeExp.style.width = `${Width}%`;
    setTimeout(() => { BarraDeExp.style.width = 0; }, 100);
    Width = 0;

  } else if (Width > 100) {
    BarraDeExp.style.width = '100%';
    setTimeout(() => { BarraDeExp.style.width = 0; }, 150);
    Width += -100;
    setTimeout(() => { BarraDeExp.style.width = `${Width}%`; }, 350);
  }
}