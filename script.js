/*
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 abaixo do peso
entre 18,5 e 24,99 peso normal
entre 25 e 29,99 acima do peso
*/

// peso / (altura * altura);



function calcular(){
    let altura = document.querySelector("#altura")
    let peso = document.querySelector("#peso")
    let total = peso / (altura * altura);
    let resultado = document.querySelector("#resultado")

    switch(total){
        case total < 17:
            resultado.innerHTML = `<strong>Seu IMC deu ${total}. Você está muito abaixo do peso!</strong>`
            break;
        
            case total >= 17 || total <= 18.49:
            resultado.innerHTML = `<strong>Seu IMC deu ${total}. Você está abaixo do peso!</strong>`
        break; 
        
        case total >= 18.5 || total <= 24.99:
            resultado.innerHTML = `<strong>Seu IMC deu ${total}. Você está com o peso normal!</strong>`
        break;
        
        case total >= 25:
            resultado.innerHTML = `<strong>Seu IMC deu ${total}. Você está acima do peso!</strong>`
        break;

        default:
            resultado.innerHTML = `<strong>Você precisa digitar um valor!</strong>`
    }
}


