//----------------------------------Scroll interno do menu------------------------------------------
export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-menu="suave"] a[href^="#"]'
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    //com o objeto abaixo, ele faz a mesma função do scrollTo, porém não é compativel com todos os browsers
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    //forma alternativa - ele pega o topo do obj e cria um metodo com o scrollTo, que já vem com uma "animação"
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // }),
  }
  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
//Função de scroll suave ao clicar em itens do menu
