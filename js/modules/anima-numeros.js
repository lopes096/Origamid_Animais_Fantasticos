export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start >= total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 50 * Math.random());
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}

//Sessão para animação dos numeros de animais
// Dentro da função animaNumeros é feita a seleção dos numeros (span no html pelo data attribute), depois é criado um loop para cada numero coletado, o html é coletado e tranformado em
// Number, armazenado em "total". Criada a variavel de incremento, onde ela recebe o numero da span, divide por 100 e é arrendodado pelo mathFloor
// Na variavel timer, é criado um intervalo para animação do numero, onde o start serve para controle do loop e ele recebe o resultado de incremento para variação da animação e esse valor
// é adicionado ao text da span. O tempo da animação é feito com um numero randomico para dinamização da animação.Criada

// Abaixo é feita uma função para verificação da mutação do atributo, onde é executada a função de animação apenas caso o target da função sofra mudança no atributo, onde é adicionada
// a classe ativo. É criado também um observador atraves de um construtor do objeto MutationObserver e é passada a função de observação como parametro,  para evitar que a função seja
// executada infinitamente . Apos criar o novo observador, é passado o target como parametro e qual objeto ele deve acompanhar
