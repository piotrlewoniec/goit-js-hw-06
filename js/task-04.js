'use strict';
(() => {
  const refsBtn = {
    //Buttons bindings
    downBtn: document.querySelector("[data-action='decrement']"),
    upBtn: document.querySelector("[data-action='increment']"),
  };
  const counterObjDocument = {
    counterValueDisplay: document.querySelector('#value'),
  };
  let counterValue = 0; //Value to display after dec and inc

  //Event handler
  refsBtn.downBtn.addEventListener('click', counterDown);
  refsBtn.upBtn.addEventListener('click', counterUp);

  function counterDown() {
    counterValue--;
    counterObjDocument.counterValueDisplay.textContent = counterValue;
  }

  function counterUp() {
    counterValue++;
    counterObjDocument.counterValueDisplay.textContent = counterValue;
  }
})();

// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>
// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.
