//Contador de cliques

let result = document.getElementById("result");
let incrementar = document.getElementById("incrementar");
let decrementar = document.getElementById("decrementar");

let contador = 0;
incrementar.onclick = () => {
  contador++;
  result.textContent = contador.toString();
};

decrementar.onclick = () => {
  if (contador <= 0) {
    window.alert("Não é permitido valores negativos");
    contador = 0;
  } else {
    contador--;
    result.textContent = contador.toString();
  }
};

//Adicionar texto dinâmico
let campo = document.getElementById("campo");
let espaco = document.getElementById("espaco");

campo.onkeydown = (e) => {
  if (e.key == "Enter") {

    e.preventDefault()
    let paragrafo = document.createElement("p");
    espaco.appendChild(paragrafo);
    paragrafo.textContent = campo.value;
    campo.value = ""
  }
};
