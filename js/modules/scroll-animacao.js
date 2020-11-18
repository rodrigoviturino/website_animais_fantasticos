export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anima='scroll']");

  if (sections.length) {
    function animaScroll() {
      let alturaJanela = window.innerHeight * 0.5;
      sections.forEach((section) => {
        let sectionTop = section.getBoundingClientRect().top - alturaJanela;

        if (sectionTop < 0) {
          section.classList.add("ativo");
        } else if(section.classList.contains('ativo')){
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
