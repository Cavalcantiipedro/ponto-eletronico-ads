const diaSemana = document.getElementById("dia-semana");
const diaMesAno = document.getElementById("dia-mes-ano");
const horaMinSeg = document.getElementById("hora-min-seg");
const arrayDiaSemana = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"]


const dialogo = document.getElementById("Dialogo");

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position);
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);

});
let proxPonto = {"entrada":"intervalo", "intervalo":"volta-intervalo","volta-intervalo":"saida","saida":"entrada"};
const baterPonto = document.getElementById("btn-abre");
baterPonto.addEventListener("click", function () {

  let dialogSelect = document.getElementById("select-tipos-ponto");


    let ultimoPonto = localStorage.getItem("tipoUltimoPonto");
    console.log(ultimoPonto);
    dialogSelect.value = proxPonto[ultimoPonto];
    dialogo.showModal();
  });


  const fechar = document.getElementById("btn-fecha");
  fechar.addEventListener("click", function () {
    dialogo.close();
  });    

    function recuperaPontosLocalStorage(){
      let todososPontos = localStorage.getItem("registro");

      if(todososPontos) {
        return{};
      }

      return JSON.parse(todososPontos);
    }



    function salvarRegistroLocalStorage(ponto) {
      let pontos = recuperaPontosLocalStorage
    }

    localStorage.setItem("chave-teste","valor-teste");

    

  const btnDialogoRegistrarPonto = document.getElementById("btn-dialog-registrar-ponto");
  btnDialogoRegistrarPonto.addEventListener("click",() => {

  


    let data = dataCompleta();
    let hora = horaCompleta();
    let tipoPonto = document.getElementById("select-tipos-ponto").value;

    let ponto = {
        "data": data,
        "hora": hora,
        "tipo": tipoPonto,
        "id": 1
    }

    localStorage.setItem("registro", JSON.stringify(ponto));
    localStorage.setItem("tipoUltimoPonto", tipoPonto);

    console.log(ponto);
    dialogo.close();

  });

    function salvarRegisroLocalStorage(registro) {

    }

function diadaSemana(){
    const date = new Date();
    return arrayDiaSemana[date.getDay()]
}

function dataCompleta() {
    const date = new Date();
    return String(date.getDate()).padStart(2,'0') + "/" + String((date.getMonth() + 1 )).padStart(2,'0')+ "/" + date.getFullYear();
}

function horaCompleta(){
    const date = new Date();
    return String(date.getHours()).padStart(2,'0') + ":" + String(date.getMinutes()).padStart(2,'0') + ":" + String(date.getSeconds()).padStart(2,'0');
}

function atualizahora(){
    horaMinSeg.textContent = horaCompleta();
}

setInterval(atualizahora, 1000);


diaSemana.textContent = diadaSemana();
diaMesAno.textContent = dataCompleta();



