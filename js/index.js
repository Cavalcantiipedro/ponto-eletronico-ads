const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
const arrayDiaSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]


const dialogo = document.getElementById("Dialogo");

const baterPonto = document.getElementById("btn-abre");
baterPonto.addEventListener("click", function () {
    dialogo.showModal();
  });
  const fechar = document.getElementById("btn-fecha");
  fechar.addEventListener("click", function () {
    dialogo.close();
  });    


function diadaSemana(){
    const date = new Date();
    return arrayDiaSemana[date.getDay()]
}

function dataCompleta() {
    const date = new Date();
    return date.getDate() + "/" + (date.getMonth() + 1 )+ "/" + date.getFullYear();
}

function horaCompleta(){
    const date = new Date();
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

function atualizahora(){
    horaMinSeg.textContent = horaCompleta();
}

setInterval(atualizahora, 1000);


diaSemana.textContent = diadaSemana();
diaMesAno.textContent = dataCompleta();



