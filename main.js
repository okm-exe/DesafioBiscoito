const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnBiscoito = document.querySelector('#btnRetry')
const imgBiscoito = document.querySelector('#imgBiscoito')

btnBiscoito.addEventListener('click', toggleBotao)
imgBiscoito.addEventListener('click', toggleBiscoito)

function toggleBiscoito(event){
    screen1.classList.add("hidden");
    screen2.classList.remove("hidden");
    let randomNum = Math.round(Math.random()*10)
    if (randomNum<=2) {
        document.querySelector(".screen2 p").innerText = `Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.`
    } else if (randomNum<=4) {
        document.querySelector(".screen2 p").innerText = `Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida.`
    } else if (randomNum<=6) {
        document.querySelector(".screen2 p").innerText = `Quem quer colher rosas tem de estar preparado para suportar os espinhos.`
    } else if (randomNum<=8) {
        document.querySelector(".screen2 p").innerText = `Quem quer colher rosas tem de estar preparado para suportar os espinhos.`
    } else if (randomNum<=10) {
        document.querySelector(".screen2 p").innerText = `Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.`
    }
}
function toggleBotao(event){
    screen1.classList.remove("hidden");
    screen2.classList.add("hidden");
}