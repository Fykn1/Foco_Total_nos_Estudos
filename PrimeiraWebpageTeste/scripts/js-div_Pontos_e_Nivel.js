function mudar_div_Pontos_e_Nivel(N) {
  aumenta_Pontos(N);
  aumenta_Nivel();
  atualiza_Barra_Pontos_e_Nivel();
}

document.querySelector('.js-numero_Pontos').innerHTML = localStorage.getItem('Pontos_Total') || 0;
document.querySelector('.js-numero_Nivel').innerHTML = localStorage.getItem('Nivel') || 1;
document.querySelector('.js-div_BarraDeExp_Concluido').style.width = `${localStorage.getItem('Width')}%` || '0px';

let Pontos_Total = Number(document.querySelector('.js-numero_Pontos').innerHTML);
let Nivel = document.querySelector('.js-numero_Nivel');
let Width = Number(localStorage.getItem('Width')) || 0;

function aumenta_Pontos(N) {
  const button_Tarefas = document.querySelector('.js-button_Tarefa' + N)
  const p_MaisPontos = Number(document.querySelector('.js-p_MaisPontos' + N).innerHTML.replace("+", ""));
  let numero_Pontos = document.querySelector('.js-numero_Pontos');

  if (!button_Tarefas.classList[2]) {
    Pontos_Total -= p_MaisPontos;

    if (Nivel.innerHTML < 5) {
      Width -= 4 * p_MaisPontos;

    } else if (Nivel.innerHTML == 5) {
      let QtdsDe5Total, QtdsDe5DepoisDe100, QtdsDe5AntesDe100 = 0;
      QtdsDe5Total = p_MaisPontos / 5;

      if (Pontos_Total < 100) {
        QtdsDe5AntesDe100 = (100 - Pontos_Total) / 5;
      }
      QtdsDe5DepoisDe100 = QtdsDe5Total - QtdsDe5AntesDe100;

      Width -= (QtdsDe5AntesDe100 * 20 + QtdsDe5DepoisDe100 * 10);
    
    } else if (Nivel.innerHTML < 15) {
      Width -= 2 * p_MaisPontos;
    
    } else if (Nivel.innerHTML < 30) {
      Width -= p_MaisPontos;
    }

  } else {
    Pontos_Total += p_MaisPontos;

    if (Nivel.innerHTML < 4) {
      Width += 4 * p_MaisPontos;

    } else if (Nivel.innerHTML == 4) {
      let QtdsDe5Total, QtdsDe5AntesDe100, QtdsDe5DepoisDe100 = 0;
      QtdsDe5Total = p_MaisPontos / 5;

      if (Pontos_Total > 100) {
        QtdsDe5DepoisDe100 = (Pontos_Total - 100) / 5;
      }
      QtdsDe5AntesDe100 = QtdsDe5Total - QtdsDe5DepoisDe100;

      Width += QtdsDe5AntesDe100 * 20 + QtdsDe5DepoisDe100 * 10;

    } else if (Nivel.innerHTML < 15) {
      Width += 2 * p_MaisPontos;

    } else if (Nivel.innerHTML < 30) {
      Width += p_MaisPontos;
    }
  }

  numero_Pontos.innerHTML = Pontos_Total;
  localStorage.setItem('Pontos_Total', Pontos_Total);
}

function aumenta_Nivel() {
  if (Pontos_Total < 25) {
    Nivel.innerHTML = 1;
  
  } else if (Pontos_Total <= 100) {
    for (let i = 1; i < 5; i++){  
      if (Pontos_Total >= 25 * i && Pontos_Total < 25 * (i + 1)) {
        Nivel.innerHTML = `${i + 1}`;
      }
    }
  
  } else if (Pontos_Total <= 600) {
    for (let i = 2; i < 13; i++){  
      if (Pontos_Total >= 50 * i && Pontos_Total < 50 * (i + 1)) {
        Nivel.innerHTML = `${i + 3}`;
      }
    }
  
  } else if (Pontos_Total <= 2100) {
    for (let i = 7; i < 22; i++){  
      if (Pontos_Total >= 100 * i && Pontos_Total < 100 * (i + 1)) {
        Nivel.innerHTML = `${i + 9}`;
      }
    }
  }
  localStorage.setItem('Nivel', Nivel.innerHTML);
}

function atualiza_Barra_Pontos_e_Nivel() {
  const BarraDeExp = document.querySelector('.js-div_BarraDeExp_Concluido');

  BarraDeExp.style.width = `${Width}%`;

  if (Width < -100) {
    BarraDeExp.style.width = 0;
    setTimeout(() => { BarraDeExp.style.width = '100%'; }, 150);
    Width += 200;
    setTimeout(() => { BarraDeExp.style.width = `${Width}%`; }, 350);
  
  } else if (Width < 0) {
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
  
  } else if (Width <= 200) {
    BarraDeExp.style.width = '100%';
    setTimeout(() => { BarraDeExp.style.width = 0; }, 150);
    Width -= 100;
    setTimeout(() => { BarraDeExp.style.width = `${Width}%`; }, 350);
  
  } else if (Width > 200) {
    BarraDeExp.style.width = '100%';
    setTimeout(() => { BarraDeExp.style.width = 0; }, 150);
    Width -= 200;
    setTimeout(() => { BarraDeExp.style.width = `${Width}%`; }, 350);
  }
  localStorage.setItem('Width', Width);
}

function reset() {
  localStorage.removeItem('Pontos_Total');
  localStorage.removeItem('Nivel');
  localStorage.removeItem('Width');

  Pontos_Total = 0;
  Nivel = 0;
  Width = 0;
}