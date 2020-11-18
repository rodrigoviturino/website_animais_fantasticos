import outsideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchStart", "click"].forEach((userEvent) => {
      menu.addEventListener("click", handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("activeMenu");

    // ativando funçao com bubble do click do menu
    // criando callback dentro da função
    outsideClick(this, ["touchStart", "click"], () => {
      // só vai remover se o item clicado, conter irmãos do filho do THIS, no caso o this é <li data-dropdown>
      this.classList.remove("activeMenu");
    });
  }
}
