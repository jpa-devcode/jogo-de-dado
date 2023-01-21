var quantidadeDeJogadas = 0;
var acertosDoJogador = 0;

function reiniciarJogo() {
  window.location.reload(true);
}

function estilizarBotaoDesativado(botao) {
  document.getElementById(botao).style.cursor = 'default';
  document.getElementById(botao).style.backgroundColor = '#b4b4b4';
  document.getElementById(botao).style.color = '#000';
  document.getElementById(botao).style.borderColor = '#b4b4b4';
}

document.getElementById('faceDoDado').style.animationPlayState = 'paused';

function jogarDado(event) {
  event.preventDefault();

  if (quantidadeDeJogadas < 6) {
    var jogadaDoDado = Math.floor(Math.random() * 6 + 1);
    var numeroDoJogador = document.getElementById('numero').value;

    if (numeroDoJogador == '') {
      alert('Você não informou o número!');
      return;
    }

    document.getElementById('faceDoDado').style.animationPlayState = 'running';
    document.getElementById('faceDoDado').src = `img/face_0${jogadaDoDado}.png`;

    setTimeout(function () {
      document.getElementById('faceDoDado').style.animationPlayState = 'paused';

      if (jogadaDoDado == numeroDoJogador) {
        acertosDoJogador += 1;
        document.getElementById('score').innerHTML = acertosDoJogador;
      }
    }, 1000);

    quantidadeDeJogadas += 1;

    document.getElementById('quantidadeDeJogadas').innerHTML =
      quantidadeDeJogadas;
  }

  if (quantidadeDeJogadas == 6) {
    estilizarBotaoDesativado('botaoJogarDado');

    document
      .getElementById('botaoReiniciarJogo')
      .addEventListener('click', reiniciarJogo);
    document.getElementById('botaoReiniciarJogo').style.pointerEvents = 'auto';
  }
}
// estilizarBotaoDesativado('botaoReiniciarJogo');

document.getElementById('jogarDado').addEventListener('submit', jogarDado);

document.getElementById('botaoReiniciarJogo').style.pointerEvents = 'none';
