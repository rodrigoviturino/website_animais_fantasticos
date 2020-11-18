export default function initTabNav() {
  let tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  let tabContent = document.querySelectorAll(
    "[data-section='content'] section"
  );

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    // Callback
    function activeTab(index) {
      tabContent.forEach((item) => {
        item.classList.remove("ativo");
      });
      console.log(tabContent[index].dataset.anime);
      tabContent[index].classList.add("ativo");
    } // end Callback

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        // Chamando Callback
        activeTab(index);
      });
    });
  }
}
