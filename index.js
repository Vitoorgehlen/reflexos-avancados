const timerOne = document.getElementById("time-one");
const timerTwo = document.getElementById("time-two");
const timerThree = document.getElementById("time-three");

const buttonMoreLeftUp = document.getElementById("left-more-up");
const buttonLeftUp = document.getElementById("left-up");
const buttonCenterUp = document.getElementById("center-up");
const buttonRightUp = document.getElementById("right-up");
const buttonMoreRightUp = document.getElementById("right-more-up");

const buttonLeftCenter = document.getElementById("left-center");
const buttonGo = document.getElementById("go");
const buttonRightCenter = document.getElementById("right-center");

const buttonMoreLeftDown = document.getElementById("left-more-down");
const buttonLeftDown = document.getElementById("left-down");
const buttonCenterDown = document.getElementById("center-down");
const buttonRightDown = document.getElementById("right-down");
const buttonMoreRightDown = document.getElementById("right-more-down");

const score = document.getElementById("score");
const scoreSalvo = document.getElementById("score-salvo");

// Só pra dar um espaçamento

let isGameOver = true;
let botaoLigado = 0;

let duration = 10000;
let size = 0;

let pontuacao = 0;
let melhorPontuacao = 0;

function mudarTempo(tempo) {
  duration = tempo;
  if (tempo === 10000) {
    timerOne.classList.add("ativado");
    timerTwo.classList.remove("ativado");
    timerThree.classList.remove("ativado");
  }
  if (tempo === 20000) {
    timerOne.classList.remove("ativado");
    timerTwo.classList.add("ativado");
    timerThree.classList.remove("ativado");
  }
  if (tempo === 30000) {
    timerOne.classList.remove("ativado");
    timerTwo.classList.remove("ativado");
    timerThree.classList.add("ativado");
  }
}

function iniciarJogo() {
  if (isGameOver) {
    buttonGo.innerText = "";
    isGameOver = false;
    mudaCor();
    setTimeout(() => {
      encerrarJogo();
    }, duration);
  }
}

function tentativaDoClick(valorDoBotao) {
  if (valorDoBotao === botaoLigado) {
    if (duration === 10000) {
      pontuacao = pontuacao + 1.3;
      score.innerText = pontuacao.toFixed(1); // Isso faz com que apareça só u número que tu quer depois da vírgula
    }

    if (duration === 20000) {
      pontuacao = pontuacao + 1.2;
      score.innerText = pontuacao.toFixed(1);
    }

    if (duration === 30000) {
      pontuacao = pontuacao + 1;
      score.innerText = pontuacao.toFixed(1);
    }

    if (pontuacao > melhorPontuacao) {
      melhorPontuacao = pontuacao;
      scoreSalvo.innerText = melhorPontuacao.toFixed(1);
    }
    mudaCor();
  }
}

function mudaCor() {
  let novoNumero = botaoLigado;
  while (novoNumero === botaoLigado) {
    novoNumero = Math.round(Math.random() * (12 - 1) + 1);
  }
  botaoLigado = novoNumero;

  if (botaoLigado === 1) {
    buttonMoreLeftUp.classList.add("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 2) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.add("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 3) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.add("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 4) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.add("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 5) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.add("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 6) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.add("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 7) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.add("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 8) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.add("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 9) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.add("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 10) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.add("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 11) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.add("ativo");
    buttonMoreRightDown.classList.remove("ativo");
  }
  if (botaoLigado === 12) {
    buttonMoreLeftUp.classList.remove("ativo");
    buttonLeftUp.classList.remove("ativo");
    buttonCenterUp.classList.remove("ativo");
    buttonRightUp.classList.remove("ativo");
    buttonMoreRightUp.classList.remove("ativo");

    buttonLeftCenter.classList.remove("ativo");
    buttonRightCenter.classList.remove("ativo");

    buttonMoreLeftDown.classList.remove("ativo");
    buttonLeftDown.classList.remove("ativo");
    buttonCenterDown.classList.remove("ativo");
    buttonRightDown.classList.remove("ativo");
    buttonMoreRightDown.classList.add("ativo");
  }
}

function encerrarJogo() {
  isGameOver = true;
  botaoLigado = 0;
  pontuacao = 0;
  buttonMoreLeftUp.removeAttribute("class");
  buttonLeftUp.removeAttribute("class");
  buttonCenterUp.removeAttribute("class");
  buttonRightUp.removeAttribute("class");
  buttonMoreRightUp.removeAttribute("class");

  buttonLeftCenter.removeAttribute("class");
  buttonRightCenter.removeAttribute("class");

  buttonMoreLeftDown.removeAttribute("class");
  buttonLeftDown.removeAttribute("class");
  buttonCenterDown.removeAttribute("class");
  buttonRightDown.removeAttribute("class");
  buttonMoreRightDown.removeAttribute("class");

  buttonGo.innerText = "Restart!";
  buttonGo.removeAttribute("class");
}

buttonGo.addEventListener("click", () => {
  iniciarJogo();
  buttonGo.classList.add("ativo");
});

buttonMoreLeftUp.addEventListener("click", () => {
  tentativaDoClick(1);
});
buttonLeftUp.addEventListener("click", () => {
  tentativaDoClick(2);
});
buttonCenterUp.addEventListener("click", () => {
  tentativaDoClick(3);
});
buttonRightUp.addEventListener("click", () => {
  tentativaDoClick(4);
});
buttonMoreRightUp.addEventListener("click", () => {
  tentativaDoClick(5);
});
buttonLeftCenter.addEventListener("click", () => {
  tentativaDoClick(6);
});
buttonRightCenter.addEventListener("click", () => {
  tentativaDoClick(7);
});
buttonMoreLeftDown.addEventListener("click", () => {
  tentativaDoClick(8);
});
buttonLeftDown.addEventListener("click", () => {
  tentativaDoClick(9);
});
buttonCenterDown.addEventListener("click", () => {
  tentativaDoClick(10);
});
buttonRightDown.addEventListener("click", () => {
  tentativaDoClick(11);
});
buttonMoreRightDown.addEventListener("click", () => {
  tentativaDoClick(12);
});

timerOne.addEventListener("click", () => {
  mudarTempo(10000);
});
timerTwo.addEventListener("click", () => {
  mudarTempo(20000);
});
timerThree.addEventListener("click", () => {
  mudarTempo(30000);
});
