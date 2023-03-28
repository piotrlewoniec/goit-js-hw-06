'use strict';
(() => {
  const refsForm = {
    //form bindings
    nameInput: document.querySelector('#name-input'),
    nameDisplay: document.querySelector('#name-output'),
  };

  //Event handler
  refsForm.nameInput.addEventListener('input', spanInputDisplay);

  function spanInputDisplay() {
    refsForm.nameDisplay.textContent = refsForm.nameInput.value;
    if (refsForm.nameInput.value === '') {
      refsForm.nameDisplay.textContent = 'Anonymous';
    }
  }
})();

// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".
// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// (zdarzenie input) wstawia jego aktualną wartość do span#name-output. Jeśli pole input jest puste, w spanie powinien wyświetlić się komunikat "Anonymous".
