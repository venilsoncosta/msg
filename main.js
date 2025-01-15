document.getElementById('meuBotao').addEventListener('click', function() {
    var mensagem = document.getElementById('mensagem');
    var texto = 'Bom Dia! Essa mensagem é para reforçar que sim, você é capaz de realizar tudo o que deseja. Acredite em você!';
    mensagem.innerHTML = '';
    mensagem.style.opacity = 1;
    mensagem.style.transform = 'translateY(0)';

    var i = 0;
    var intervalo = setInterval(function() {
        if (i < texto.length) {
            mensagem.innerHTML += texto.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 100); // Intervalo de 200ms entre cada letra
});
