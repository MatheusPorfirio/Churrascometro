let inputAdultos = document.getElementById("Adultos")
let inputCriancas = document.getElementById("Criancas")
let inputDuracao = document.getElementById ("Duracao")


let res = document.getElementById ("res")


function calcular() {
    console.log("carregando ...");
    
    let Adultos= inputAdultos.value ;
    let criancas= inputCriancas.value;
    let duracao= inputDuracao.value;

   
    let totalLiquidos = GuarLitro(duracao) * Adultos + (GuarLitro(duracao)/2 * criancas);
    let totalCerveja = cervLitro(duracao) * Adultos;

    let totalCarnes = carnePP(duracao) * Adultos + (carnePP(duracao)/2* criancas);


    res.innerHTML= `<p>${totalCarnes} g de Carnes</p>`;
    res.innerHTML += `<p>${totalLiquidos} l de Guaraná e água</p>`;
    res.innerHTML += `<p>${totalCerveja} l de Cerveja</p>`;
    

}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650 
    } else {
        return 450
    }
}

function GuarLitro(duracao) {
    if (duracao >= 6) {
        return 1
    } else {
        return 1.5
    }
}
function cervLitro(duracao) {
    if (duracao >= 6) {
        return 1.2
    } else {
        return 2
    }
}
