function concluir_Tarefas(N) {
  const button_Tarefas = document.querySelector('.js-button_Tarefa' + N);
  const img_Checkbutton = document.querySelector('.js-img_Checkbutton' + N);
  const p_Tarefas = document.querySelector('.js-p_Tarefas' + N);
  const p_MaisPontos = document.querySelector('.js-p_MaisPontos' + N);

  button_Tarefas.classList.toggle('Concluida');

  console.log(button_Tarefas);

  if (!button_Tarefas.classList[2]) {
    button_Tarefas.style.backgroundColor = "rgb(55, 65, 81)";
    img_Checkbutton.style.opacity = "0";
    p_Tarefas.style.color = "white";
    p_Tarefas.style.textDecoration = "none";
    p_MaisPontos.style.opacity = "1";
  
  } else {
    button_Tarefas.style.backgroundColor = "rgb(4, 81, 50)";
    img_Checkbutton.style.opacity = "1";
    p_Tarefas.style.color = "rgb(151, 158, 171)";
    p_Tarefas.style.textDecoration = "line-through";
    p_Tarefas.style.textDecorationThickness = "1.5px";
    p_MaisPontos.style.opacity = "0";
  }
}

function Hover(N) {
  const button_Tarefas = document.querySelector('.js-button_Tarefa' + N);

  if (!button_Tarefas.classList[2]) {
    button_Tarefas.style.backgroundColor = "rgb(151, 158, 171, 0.5)";
  } else {
    button_Tarefas.style.backgroundColor = "rgb(15, 151, 97, 0.62)"
  }
}

function desHover(N) {
  const button_Tarefas = document.querySelector('.js-button_Tarefa' + N);

  if (!button_Tarefas.classList[2]) {
    button_Tarefas.style.backgroundColor = "rgb(55, 65, 81)";
  } else {
    button_Tarefas.style.backgroundColor = "rgb(4, 81, 50)"
  }
}

function add() {
  let adiciona = document.querySelector('.js-add');
  console.log(adiciona);
  adiciona.innerHTML += 
    `<button class="button_Tarefas js-button_Tarefas" onclick="concluir_Tarefas()">
      <img class="img_Checkbutton_Borda" src="Imagens/Checkbutton_Borda.png">
      <img class="img_Checkbutton js-img_Checkbutton" src="Imagens/Checkbutton.png">
      <p class="p_Tarefas js-p_Tarefas">${undefined}</p>
      <p class="p_MaisPontos js-p_MaisPontos">${undefined}</p>
    </button>`;
}
