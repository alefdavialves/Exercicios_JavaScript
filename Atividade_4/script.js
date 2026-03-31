/* <li>Gasolina: R$ 6.68</li>
<li>Etanol: R$ 5.89</li>
<li>Disel: R$ 6.20</li> */

const precoGasolina = 6.68;
const precoEtanol = 5.89;
const precoDisel = 6.20;

let resultado = document.getElementById ('resultado')

function atualizarValor() {

    let tipo = parseFloat(document.getElementById('tipo').value);
    let litros = document.getElementById('litros').value;


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
            console.log ("Esolha uma função")
            break

    }

    calcularAbastecimento(precoPorLitro, litros);

}

let tipo = document.getElementById('tipo');

tipo.addEventListener ('change', atualizarValor);

function calcularAbastecimento (precoCombustivel, litros) {

    let valorTotal = precoCombustivel * litros;

    document.getElementById ("resultado").textContent = valorTotal

}

let litros = document.getElementById('litros');
litros.addEventListener ("input", atualizarValor)



