//QUANTIDADE CONSUMIDA A CADA 1 HORA
//Adulto = Consome 400g de carne
//Adulto = Consome 5 latas de Cerveja
//Criança = Consome 200g de carne
//Criança = Consome 400ml de Refrigerante


var adulto = document.getElementById('adulto');
var crianca = document.getElementById('crianca');
var duracao = document.getElementById('duracao');

function apertar() {
    let valorAdulto = adulto.value * 400;
    let valorCrianca = crianca.value * 200;
    let valorDuracao = duracao.value;

    let qtdCarne = (valorAdulto + valorCrianca) * valorDuracao;
    let qtdCerveja = (adulto.value * 5) * valorDuracao;
    let qtdBebida = (crianca.value * 400) * valorDuracao;

    if (valorDuracao == 0) {
        alert('Digite uma duração');
    }
    document.getElementById('resultado')
        .innerHTML = "A quantidade de carne que será consumida será de  " + qtdCarne / 1000 + "Kg";
    document.getElementById('resultado2')
        .innerHTML = "A quantidade de cerveja que será consumida será de  " + qtdCerveja + " latas";
    document.getElementById('resultado3')
        .innerHTML = "A quantidade de refrigerante que será consumida será de  " + qtdBebida / 1000 + "L";
    document.getElementById('container-resultado').style.display = 'flex';

}

