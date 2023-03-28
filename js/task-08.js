'use strict';
(() => {
  const refsForm = {
    //form bindings
    form: document.querySelector('.login-form'),
    submitBtn: document.querySelector('button[type="submit"]'),
  };

  refsForm.form.addEventListener('submit', handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.email.value === '' || event.currentTarget.password.value === '') {
      return alert('Please fill in all the fields!');
    } else {
      const objForm = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
      };
      console.log(objForm);
      for (let key in objForm) {
        console.log(objForm[key]);
      }
      event.currentTarget.reset();
    }
  }
})();

// Napisz skrypt zarządzania formularzem logowania.
// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// Opracowanie przesyłania formularza form.login-form powinno przebiegać zgodnie ze zdarzeniem submit.
// Podczas przesyłania formularza strona nie powinna się restartować.
// Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
// Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
// Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.

//Backup tests
//   refsForm.submitBtn.addEventListener('click', formValidation);
//   function formValidation() {
//     console.log('Submiting...');
//   }
//const {elements: { email, password },} = event.currentTarget;
