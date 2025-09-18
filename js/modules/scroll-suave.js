//----------------------------------Scroll interno do menu------------------------------------------
export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    //com o objeto abaixo, ele faz a mesma função do scrollTo, porém não é compativel com todos os browsers
    section.scrollIntoView(this.options);

    //forma alternativa - ele pega o topo do obj e cria um metodo com o scrollTo, que já vem com uma "animação"
    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth',
    // }),
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.scrollToSection);
    });
  }
  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
      return this;
    }
  }
}
//Função de scroll suave ao clicar em itens do menu
