import outsideClick from "./outsideClick.js";
export default function initDropDownMenu() {
  const dropDownMenus = document.querySelectorAll("[data-dropdown]");

  dropDownMenus.forEach((menu) => {
    /*
        menu.addEventListener('click', handleClick);
        menu.addEventListener('touchstart', handleClick);
        touchstart é um evento de click para mobiles, porém não tem o atraso de 300ms que o 'click' possui
        */
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
      /*para listar multiplos eventos com o mesmo comportamento, é criado um array para armazená-los, para evitar de colocar uma linha para cada evento */
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["touchstart", "click"], () => {
      this.classList.remove("active");
    });
  }
}
