// ================================
// CARTA COM EFEITO DE DIGITAÇÃO
// ================================

const texto = `

Meu amor...

Desde que você entrou na minha vida,
tudo ganhou mais cor.

Você é meu sorriso nos dias difíceis,
meu abraço favorito,
minha paz,
meu melhor amigo
e o amor da minha vida.

Obrigado por existir.

Eu escolheria você mil vezes.

❤️

`;

const carta = document.getElementById("textoCarta");

let i = 0;

function escreverCarta(){

    if(i < texto.length){

        carta.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escreverCarta,45);

    }

}

window.onload = escreverCarta;
// ================================
// CONTADOR
// ================================

const dataNamoro = new Date("2024-01-01 00:00:00");

function atualizarContador(){

const agora = new Date();

const diferenca = agora - dataNamoro;

const dias = Math.floor(diferenca / (1000*60*60*24));

const horas = Math.floor((diferenca/(1000*60*60))%24);

const minutos = Math.floor((diferenca/(1000*60))%60);

const segundos = Math.floor((diferenca/1000)%60);

document.getElementById("dias").textContent=dias;

document.getElementById("horas").textContent=horas;

document.getElementById("minutos").textContent=minutos;

document.getElementById("segundos").textContent=segundos;

}

setInterval(atualizarContador,1000);

atualizarContador();
// ================================
// BOTÃO FINAL
// ================================

const btn = document.getElementById("btnFinal");

btn.addEventListener("click",()=>{

alert("❤️ Eu te amo infinitamente, Jhonatas ❤️");

});
// ======================================
// CHUVA DE CORAÇÕES
// ======================================

const hearts = document.getElementById("hearts");

function criarCoracao(){

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.classList.add("heart");

    coracao.style.left = Math.random()*100+"vw";

    coracao.style.fontSize = (15+Math.random()*25)+"px";

    coracao.style.animationDuration = (5+Math.random()*5)+"s";

    hearts.appendChild(coracao);

    setTimeout(()=>{

        coracao.remove();

    },10000);

}

setInterval(criarCoracao,350);
// ======================================
// ESTRELAS
// ======================================

const stars = document.getElementById("stars");

for(let i=0;i<120;i++){

    const estrela=document.createElement("span");

    estrela.classList.add("star");

    estrela.style.left=Math.random()*100+"vw";

    estrela.style.top=Math.random()*100+"vh";

    estrela.style.animationDelay=Math.random()*4+"s";

    stars.appendChild(estrela);

}
