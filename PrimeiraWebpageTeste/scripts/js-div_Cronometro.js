function cronometrar_div_Cronometro() {
  play_button();
  cronometro_p_Tempo();
}

function reseta() {
  document.querySelector('.js-p_Tempo').innerHTML = '00:00:00'
  localStorage.removeItem('p_Tempo');
}

document.querySelector('.js-p_Tempo').innerHTML = localStorage.getItem('p_Tempo') || '00:00:00';

function Cronometra() {
  let p_Tempo = document.querySelector('.js-p_Tempo');

  let h = Number(p_Tempo.innerHTML.slice(0, 2));
  let m = Number(p_Tempo.innerHTML.slice(3, 5));
  let s = Number(p_Tempo.innerHTML.slice(6));

  if (s < 59) {
  s++;

  } else {
    s = 0;
    m++;

    if (m > 59) {
      m = 0;
      h++;            
    }
  }

  if (h <= 9) {
    h = '0' + String(h);
  } else {
    h = String(h);
  }

  if (m <= 9) {
    m = '0' + String(m);
  } else {
    m = String(m);
  }

  if (s <= 9) {
    s = '0' + String(s);
  } else {
    s = String(s);
  }

  p_Tempo.innerHTML = `${h}:${m}:${s}`;
  localStorage.setItem('p_Tempo', p_Tempo.innerHTML);
} 

function cronometro_p_Tempo() {
  const p_Play = document.querySelector('.js-p_Play').innerHTML;

  if (p_Play === 'Continuar') {
    clearInterval(id);
    return;
  
  } else {
    id = setInterval(Cronometra, 1000);
  }
}

function play_button() {
  const button_Play = document.querySelector('.js-button_Iniciar');
  const img_Play = document.querySelector('.js-img_Play');
  const img_Pause = document.querySelector('.js-img_Pause');
  const p_Play = document.querySelector(".js-p_Play");

  button_Play.classList.toggle('button_Pausar');
  
  if (p_Play.innerHTML === 'Pausar') {
    p_Play.innerHTML = 'Continuar';
    img_Pause.style.opacity = "0";
    img_Play.style.opacity = "1";
    p_Play.style.paddingRight = "142.2px";
    img_Play.style.paddingLeft = "142.2px";

  } else {
    p_Play.innerHTML = 'Pausar';
    p_Play.style.paddingRight = "158.14px";
    img_Pause.style.opacity = "1";
    img_Play.style.opacity = "0"
  }
}

