export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-anima="menu"] a[href^="#"'
  );

  function scrollToSection(event) {
    event.preventDefault();
    let href = event.currentTarget.getAttribute("href");
    let section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* Forma Alternativa */
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollToSection);
  });
}
