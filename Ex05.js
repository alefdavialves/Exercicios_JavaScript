let numero1 = "";
let expressao = ""
let numeroDigitado = prompt("Digite um numero");
let soma = 0;

for (let i = 1; i <= numeroDigitado; i++) {

    numero1 += "1";
    soma += Number(numero1);

    if (i == 1){

        expressao += numero1;
    }

    else {

        expressao += " + " + numero1;

    }

}

alert(`${expressao}\nA soma é: ${soma}`);
