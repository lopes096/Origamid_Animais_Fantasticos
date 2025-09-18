//----------------------------------Navegação por tabs do Animais------------------------------------------

export default function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');
  tabContent[0].classList.add("ativo");

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add("ativo", direcao);
  }

  if (tabMenu.length && tabContent.length) {
    //Daria para adicionar diretamente pelo css, sem manipular a classe pelo JS,
    //usando o .js-tabcontent section.ativo[data-anime="show-down"] no CSS, removendo a variavel direcao
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

//Função criada para vincular as imagens do scrol ao texto correspondente
