// clickoutSide
export default function outsideClick(element, arrayEvent, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    arrayEvent.forEach((itemEvent) => {
      setTimeout(() => html.addEventListener(itemEvent, handleOutsideClick));
    });
    element.setAttribute(outside, "");
  }

  function handleOutsideClick(event) {
    // verificando se o item clicado, está na mesma familia do THIS
    if (!element.contains(event.target)) {
      arrayEvent.forEach((itemEvent) => {
        html.removeEventListener(itemEvent, handleOutsideClick);
      });
      element.removeAttribute(outside);
      callback(); // remove a class activeMenu
    }
  }
}
