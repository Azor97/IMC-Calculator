/*
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 abaixo do peso
entre 18,5 e 24,99 peso normal
entre 25 e 29,99 acima do peso
*/

// peso / (altura * altura);



function calcular(event) {
    event.preventDefault();
    let altura = document.querySelector("#altura").value
    let peso = document.querySelector("#peso").value
    let total = peso / (altura * altura);
    let resultado = document.querySelector("#resultado")

    if(total < 17) {
        resultado.innerHTML = `Seu IMC é ${total.toFixed(2)}. Você está muito abaixo do peso!`
    } else if (total >= 17 && total <= 18.49){
        resultado.innerHTML = `Seu IMC é ${total.toFixed(2)}. Você está abaixo do peso!`
    } else if (total >= 18.5 && total <= 24.99) {
        resultado.innerHTML = `Seu IMC é ${total.toFixed(2)}. Você está com o peso normal!`
    } else if (total >= 25 && total <= 29.99){
        resultado.innerHTML = `Seu IMC é ${total.toFixed(2)}. Você está acima do peso!`
    } else if(total >= 30 && total <= 34.99){
        resultado.innerHTML = `Seu IMC é ${total.toFixed(2)}. Você está obeso!`
    } else if(total >= 35) {
        resultado.innerHTML = `Seu IMC é ${total.toFixed(2)}. Você está extremamente obeso!`
    } else {
        resultado.innerHTML = `Digite um valor valido!`
    }
}


