/* <li>Gasolina: R$ 6.68</li>
<li>Etanol: R$ 5.89</li>
<li>Disel: R$ 6.20</li> */

const precoGasolina = 6.68;
const precoEtanol = 5.89;
const precoDisel = 6.2;

const atualizarValor = () => {
  let tipo = document.getElementById("tipo").value;
  let litros = Number(document.getElementById("litros").value);
  let precoPorLitro;

  switch (tipo) {
    case "gasolina":
      precoPorLitro = precoGasolina;
      break;

    case "etanol":
      precoPorLitro = precoEtanol;
      break;

    case "disel":
      precoPorLitro = precoDisel;
      break;

    default:
      alert("Esolha um tipo de combustível");
      return;
  }

  if (!tipo || !litros) {
    document.getElementById("resultado").textContent = "R$ 0,00";
    return;
  }

  calcularAbastecimento(precoPorLitro, litros);
};

let tipo = document.getElementById("tipo");

tipo.addEventListener("change", atualizarValor);

const calcularAbastecimento = (precoCombustivel, litros) => {
  if (litros <= 0 || Number.isNaN(litros)) {
    alert("Digite um valor válido maior que zero");
    litros = 0;
  }

  if (litros > 250) {
    alert("Que carro é esse? kkkkkkkkkk");
    litros = 0;
  }
  let valorTotal = precoCombustivel * litros;

  document.getElementById("resultado").textContent = formatarMoeda(valorTotal);
};

const formatarMoeda = (valor) => {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};

let litros = document.getElementById("litros");
litros.addEventListener("input", atualizarValor);

let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

litros.addEventListener("keydown", (e) => {
  const teclasInvalidas = ["e", "E", "+", "-"];

  if (teclasInvalidas.includes(e.key)) {
    e.preventDefault();
    alert("Digite um valor válido");
  }
});
