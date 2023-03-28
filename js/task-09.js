'use strict';
(() => {
  const refsPage = {
    //page bindings
    bodyPage: document.querySelector('body'),
    spanPage: document.querySelector('.color'),
    btnPage: document.querySelector('.change-color'),
  };

  refsPage.btnPage.addEventListener('click', bodyBackGroundColorChange);
  function bodyBackGroundColorChange() {
    let newBackgroundColor = getRandomHexColor();
    refsPage.spanPage.textContent = newBackgroundColor;
    refsPage.bodyPage.style.backgroundColor = newBackgroundColor;
  }

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
})();

// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline po kliknięciu na button.change-color i wprowadza wartość koloru do span.color.
// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }
