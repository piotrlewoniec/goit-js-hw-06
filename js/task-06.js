(() => {
  const refsForm = {
    //form bindings
    symbolsInput: document.querySelector('#validation-input'),
  };

  //Event handler
  refsForm.symbolsInput.addEventListener('blur', inputProperData);
  function inputProperData() {
    refsForm.symbolsInput.classList.remove(...refsForm.symbolsInput.classList);
    if (
      refsForm.symbolsInput.value.length === +refsForm.symbolsInput.attributes['data-length'].value
    ) {
      refsForm.symbolsInput.classList.add('valid');
    } else if (refsForm.symbolsInput.value === '') {
      refsForm.symbolsInput.classList.remove(...refsForm.symbolsInput.classList);
    } else {
      refsForm.symbolsInput.classList.add('invalid');
    }
  }
})();

// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />
// Informacja o liczbie symboli, która powinna znajdować się w polu input, pokazuje się w jego atrybucie data-length.
// Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.
// Aby dodać style, używaj klas CSS valid i invalid, które już dodaliśmy do plików źródłowych zadania.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }
