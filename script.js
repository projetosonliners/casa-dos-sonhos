const botao = document.getElementById("btnMensagem");

const mensagem = document.getElementById("mensagem");

const musica = document.getElementById("musica");

botao.addEventListener("click",()=>{

    mensagem.classList.remove("hidden");

    musica.play();

    botao.innerHTML="Eu te amo ❤️";

    mensagem.scrollIntoView({
        behavior:"smooth"
    });

});
