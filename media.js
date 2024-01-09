function calcularMedia() {
    const notas = Array.from({ length: 4 }, (_, i) =>
      parseFloat(document.getElementById(`nota${i + 1}`).value)
    );
  
    const media = notas.reduce((sum, nota) => sum + nota, 0) / notas.length;
    let mensagem = "";
  
    if (media === 0) {
      mensagem = "Infelizmente você zerou a prova :(";
    } else if (media >= 0.1 && media <= 3) {
      mensagem = `Caramba, deu ruim, você obteve média ${media}! Estude mais e tente novamente!`;
    } else if (media >= 3.1 && media <= 5.9) {
      mensagem = `Você obteve ${media}! Falta pouco para a média.`;
    } else if (media >= 6 && media <= 7) {
      mensagem = `Você está na média com ${media}.`;
    } else if (media >= 7.1 && media <= 9.9) {
      mensagem = `Notão! Sua média é ${media}.`;
    } else if (media === 10) {
      mensagem = "Hoje é seu aniversário? Pq você ta de parabéns! 10 de média.";
    } else {
      mensagem = "Insira um valor válido entre 0 e 10.";
    }
  
    const situacaoAluno = document.createElement("p");
    const divMedias = document.getElementById("contentCalcMedias");
    divMedias.innerHTML = "";
    divMedias.appendChild(situacaoAluno);
    situacaoAluno.innerText = mensagem;
  }
  
  function limparCampos() {
    const notas = Array.from({ length: 4 }, (_, i) =>
      document.getElementById(`nota${i + 1}`).value = ''
    );
  
    document.getElementById("resultado").value = '';
  }
  





