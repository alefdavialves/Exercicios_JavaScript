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
    e.preventDefault();
    let paragrafo = document.createElement("p");
    espaco.appendChild(paragrafo);
    paragrafo.textContent = campo.value;
    campo.value = "";
    contCaracter.textContent = 0;
  }
};

//Contador de caracteres

let contCaracter = document.getElementById("caracteres");

campo.addEventListener("input", () => {
  let numeroCaracteres = campo.value.length;

  contCaracter.textContent = numeroCaracteres;
});

//Adicionar novo item

let itemOpt = document.getElementById("newItem");
let buttonItem = document.getElementById("addItem");
let campoNovosItens = document.getElementById("newItensBox");

buttonItem.onclick = function () {
  let newItemName = itemOpt.value;
  let newItem = document.createElement(newItemName);

  if (newItemName === "ul" || newItemName === "ol") {
    for (let i = 1; i <= 3; i++) {
      let li = document.createElement("li");
      li.textContent = `Item ${i}`;
      newItem.appendChild(li);
    }
  } else {
    newItem.textContent = "Novo conteúdo";
  }
    campoNovosItens.appendChild(newItem);
};

//Reset

const btnReset = document.getElementById ('reset');


btnReset.onclick = function () {
  contador = 0;
  result.textContent = "";

  espaco.innerHTML = "";

  campo.value = "";

  contCaracter.textContent = "";

  campoNovosItens.innerHTML = "";

  itemOpt.value = "";
};