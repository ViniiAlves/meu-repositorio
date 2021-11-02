const cabecalho = document.getElementById("header-container");
cabecalho.style.backgroundColor = "rgb(0, 176, 105)";

const divUrgente = document.getElementsByClassName("emergency-tasks")[0];
divUrgente.style.backgroundColor = "rgb(255, 159, 132)";

const urgenteCabecalho = document.querySelectorAll(".emergency-tasks h3");
       for (let i = 0; i < urgenteCabecalho.length; i += 1) {
              urgenteCabecalho[i].style.backgroundColor = "rgb(165, 0, 243)";
       }
 
const divNaoUrgente = document.getElementsByClassName("no-emergency-tasks")[0];
divNaoUrgente.style.backgroundColor = "rgb(249, 219, 94)";

const naoUrgenteCabecalho = document.querySelectorAll(".no-emergency-tasks h3");
       for (let i = 0; i < urgenteCabecalho.length; i += 1) {
              naoUrgenteCabecalho[i].style.backgroundColor = "rgb(35, 37, 37)";
       }
const rodape = document.getElementById("footer-container");
rodape.style.backgroundColor = "rgb(0, 53, 51)";