'use strict';
(() => {
  const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
  let list = document.querySelector('#ingredients');
  const listElement = [];
  for (let i = 0; i < ingredients.length; i++) {
    listElement[i] = document.createElement('li');
    listElement[i].classList.add('item');
    listElement[i].textContent = ingredients[i];
  }

  for (let i = 0; i < ingredients.length; i++) {
    list.append(listElement[i]);
  }
})();

// W HTML znajduje się pusta lista ul#ingredients.
// <ul id="ingredients"></ul>
// W JavaScript znajduje się tablica ciągów.
// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
//Napisz skrypt, który dla każdego elementu tablicy ingredients:
//- Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
//- Doda nazwę elementu jako jego zawartość tekstową.
//- Doda do elementu klasę item.
//- Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.

//backup tests
// const listElement = document.createElement('li'); //creating li elements
// listElement.classList.add('item'); //adding class
// listElement.textContent = ingredients[0]; //adding li content
// list.append(listElement);
