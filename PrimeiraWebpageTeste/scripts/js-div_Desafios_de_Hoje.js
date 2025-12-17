function atualizar_div_Desafios(N) {
  calcular_Porcentagem(N);
  atualizar_Barra_Desafios();
  atualizar_p_Progresso();
}

let Pontos_Diario = 0;
let Porcentagem;

function calcular_Porcentagem(N) {
  const button_Tarefas = document.querySelector('.js-button_Tarefa' + N);
  const p_MaisPontos = Number(document.querySelector('.js-p_MaisPontos' + N).innerHTML.replace("+", ""));
  let Maximo = 0;
  
  if (!button_Tarefas.classList[2]) {
    Pontos_Diario -= p_MaisPontos;

  } else {
    Pontos_Diario += p_MaisPontos;
  }

  for (let i = 1; i <= 6; i++) {
    Maximo += Number(document.querySelector('.js-p_MaisPontos' + i).innerHTML);
  }

  Porcentagem = Math.round(100 * Pontos_Diario / Maximo);
}

function atualizar_Barra_Desafios() {
  const BarraDeProgresso = document.querySelector('.js-div_BarraDeProgresso_Concluido');
  
  BarraDeProgresso.style.width = `${Porcentagem}%`

  if (Porcentagem < 10) {
    BarraDeProgresso.style.backgroundColor = '#f1a110ff';
  
  } else if (Porcentagem < 20) {
    BarraDeProgresso.style.backgroundColor = '#b0b32eff';
  
  } else if (Porcentagem < 30) {
    BarraDeProgresso.style.backgroundColor = '#9ab939ff';
  
  } else if (Porcentagem < 40) {
    BarraDeProgresso.style.backgroundColor = '#8cbd3fff';
  
  } else if (Porcentagem < 50) {
    BarraDeProgresso.style.backgroundColor = '#74C44A';
  
  } else if (Porcentagem < 60) {
    BarraDeProgresso.style.backgroundColor = '#56CC58';
  
  } else if (Porcentagem < 70) {
    BarraDeProgresso.style.backgroundColor = '#4CBC52';
  
  } else if (Porcentagem < 80) {
    BarraDeProgresso.style.backgroundColor = '#40A84B';
  
  } else if (Porcentagem < 90) {
    BarraDeProgresso.style.backgroundColor = '#318F43';
  
  } else if (Porcentagem < 100) {
    BarraDeProgresso.style.backgroundColor = '#2A853F';
  
  } else {
    BarraDeProgresso.style.backgroundColor = '#166534';
  }
}

function atualizar_p_Progresso() {
  const p_Progresso = document.querySelector('.js-p_Progresso');

  p_Progresso.innerHTML = `${Porcentagem}% Concluído`;
}