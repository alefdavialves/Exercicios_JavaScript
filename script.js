//Ex01

function ex01 () {

var numeroAleatorio = Math.floor(Math.random() * 20) + 1;
var numeroDigitado;

window.alert("Bem vindo ao jogo! Acerte o numero de 0 a 20: ");
numeroDigitado = Number(prompt (" \n Digite seu chute"));

while (numeroAleatorio != numeroDigitado) {

    if (numeroAleatorio < numeroDigitado) {

        alert("O numero é menor");
    }

    else {

        alert("O numero é maior");

    }

    numeroDigitado = Number(prompt (" \n Digite outro numero"));

}

    alert("Parabéns! Você acertou 🎉");

}

//Ex02

function ex02() {

  let opcoes = ["pedra", "papel", "tesoura"];

  let jogadaAleatoria = Math.floor(Math.random() * 3);
  let jogadaComputador = opcoes[jogadaAleatoria];

  window.alert("Bem vindo ao jogo Pedra, Papel, Tesoura!");
  let jogadaUsuario = prompt(" \n Digite sua jogada").toLowerCase();

  if (jogadaUsuario === jogadaComputador) {
    alert("Partida empatada");
  } 
  
  else if (
    (jogadaUsuario === "pedra" && jogadaComputador === "tesoura") ||
    (jogadaUsuario === "tesoura" && jogadaComputador === "papel") ||
    (jogadaUsuario === "papel" && jogadaComputador === "pedra")
  ) 
  
  {
    alert(`Parabéns! Você venceu. O computador escolheu ${jogadaComputador} e você ${jogadaUsuario}`);
  } 
  
  else {
    alert(`Você perdeu! O computador escolheu ${jogadaComputador} e você ${jogadaUsuario}`);
  }
}

//Ex03

function ex03() {

  let numeroDigitado = prompt("Digite um número");
  let tabuada = "";

  for (let i = 1; i <= 10; i++) {
    let resultado = numeroDigitado * i;
    tabuada += `${numeroDigitado} * ${i} = ${resultado}\n`;
  }

  alert(tabuada);
}

//Ex04

function ex04() {

  let pontos;
  let linhas = prompt("Digite o numero de linhas");
  let desenho = "";

  for (pontos = 1; pontos <= linhas; pontos++) {
    
    let linha = "";

    for (let j = 0; j < pontos; j++) {
      linha += "*";
    }

    desenho += `${linha}\n`;
  }

  alert(desenho);
}

//Ex05

function ex05() {

  let numero1 = "";
  let expressao = "";
  let numeroDigitado = prompt("Digite um numero");
  let soma = 0;

  for (let i = 1; i <= numeroDigitado; i++) {
    numero1 += "1";
    soma += Number(numero1);

    if (i == 1) {
      expressao += numero1;
    } 
    
    else {
      expressao += " + " + numero1;
    }
    
  }

  alert(`${expressao}\nA soma é: ${soma}`);
}
