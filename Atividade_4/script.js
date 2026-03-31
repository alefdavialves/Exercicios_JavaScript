/* <li>Gasolina: R$ 6.68</li>
<li>Etanol: R$ 5.89</li>
<li>Disel: R$ 6.20</li> */

const precoGasolina = 6.68;
const precoEtanol = 5.89;
const precoDisel = 6.20;

const atualizarValor = () => {

    let tipo = document.getElementById('tipo').value;
    let litros = parseFloat(document.getElementById('litros').value);
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
            alert ("Esolha uma função");
            return;

    }

    calcularAbastecimento(precoPorLitro, litros);

}

let tipo = document.getElementById('tipo');

tipo.addEventListener ('change', atualizarValor);

 const calcularAbastecimento = (precoCombustivel, litros)  => {

    let valorTotal = precoCombustivel * litros;

    document.getElementById ("resultado").textContent = valorTotal.toFixed(2)

}

let litros = document.getElementById('litros');
litros.addEventListener ("input", atualizarValor);



