function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercicio 1

let dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function inserindoDias() {
  let dias = document.querySelector("#days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dia = dezDaysList[i];
    let itemDia = document.createElement("li");

    if ((dia === 24) | (dia === 31)) {
      itemDia.className = "day holiday";
      itemDia.innerText = dia;
      dias.appendChild(itemDia);
    } else if (dia === 25) {
      itemDia.className = "day holiday friday";
      itemDia.innerText = dia;
      dias.appendChild(itemDia);
    } else if ((dia === 4) | (dia === 11) | (dia === 18)) {
      itemDia.className = "day friday";
      itemDia.innerText = dia;
      dias.appendChild(itemDia);
    } else {
      itemDia.className = "day";
      itemDia.innerText = dia;
      dias.appendChild(itemDia);
    }
  }
}
inserindoDias();

// Exercicio 2
function criandoBotao(nomeDoBotao) {
  let divFeriados = document.querySelector(".buttons-container");
  let criaBotao = document.createElement("button");
  criaBotao.id = "btn-holiday";
  criaBotao.innerHTML = nomeDoBotao;
  divFeriados.appendChild(criaBotao);
}
criandoBotao("Feriados");

// Exercicio 3
function showFeriados() {
  let botao = document.querySelector("#btn-holiday");
  let feriados = document.querySelectorAll(".holiday");
  let corAntiga = "rgb(238,238,238)";
  let newBackground = "white";

  botao.addEventListener("click", function () {
    for (let i = 0; i < feriados.length; i += 1) {
      if (feriados[i].style.backgroundColor === newBackground) {
        feriados[i].style.backgroundColor = corAntiga;
      } else {
        feriados[i].style.backgroundColor = newBackground;
      }
    }
  });
}
showFeriados();

// Exercicio 4
function criandoOutroBotao(nomeDoBotao) {
  let divSexta = document.querySelector(".buttons-container");
  let criaBotao = document.createElement("button");
  criaBotao.id = "btn-friday";
  criaBotao.innerHTML = nomeDoBotao;
  divSexta.appendChild(criaBotao);
}
criandoOutroBotao("Sexta-Feira");

// Exercicio 5

function showSexta(event) {
  let botao = document.querySelector("#btn-friday");
  let sextas = document.querySelectorAll(".friday");
  let newText = "Sextei com Denguinho!";
  let corNova = "green";

  botao.addEventListener("click", function () {
    for (let i = 0; i < sextas.length; i += 1) {
      if (sextas[i].innerText !== newText) {
        sextas[i].innerText = newText;
      } else {
        sextas[i].innerText = event[i];
      }
    }
  });
}

let sextasDez = [4, 11, 18, 25];
showSexta(sextasDez);

// Exercicio 6
function passandoMouse() {
  let diasMouse = document.querySelector("#days");

  diasMouse.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "750";
  });
}

function tirandoMouse() {
  let diasMouse = document.querySelector("#days");

  diasMouse.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}
passandoMouse();
tirandoMouse();

// Exercicio 7

function tarefaPersonalizada(event) {
  let tarefa = document.createElement("span");
  let divTarefa = document.querySelector(".my-tasks");

  tarefa.innerHTML = event;
  divTarefa.appendChild(tarefa);
}
tarefaPersonalizada("Cozinhar");

// Exercicio 8

function adicionaLegenda(cor) {
  let divTarefa = document.querySelector(".my-tasks");
  let legenda = document.createElement("div");
  

  legenda.className = "task";
  legenda.style.backgroundColor = cor;
  divTarefa.appendChild(legenda);
}
adicionaLegenda("red");

// Exercicio 9

function setTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');
  
    myTasks.addEventListener('click', function(event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };
  
  setTaskClass();

  function setDayColor() {
    let selectedTask = document.getElementsByClassName('task selected');
    let days = document.querySelector('#days');
    let taskDiv = document.querySelector('.task');
    let taskColor = taskDiv.style.backgroundColor;
    
    days.addEventListener('click', function(event){
      let eventTargetColor = event.target.style.color;
      if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
        let color = selectedTask[0].style.backgroundColor;
        event.target.style.color = color;
      } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
        event.target.style.color = 'rgb(119,119,119)';
      }
    });
  };
  
  setDayColor();