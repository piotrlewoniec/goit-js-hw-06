'use strict';
(() => {
  let categoryCount = document.querySelectorAll('.item');
  let categoryStats = document.querySelectorAll('#categories');
  console.log('Number of categories: ' + categoryCount.length);
  console.log('');
  console.log('Category: ' + categoryStats[0].children[0]['children'][0].textContent);
  console.log('Elements: ' + categoryStats[0].children[0]['children'][1]['children'].length);
  console.log('');
  console.log('Category: ' + categoryStats[0].children[1]['children'][0].textContent);
  console.log('Elements: ' + categoryStats[0].children[1]['children'][1]['children'].length);
  console.log('');
  console.log('Category: ' + categoryStats[0].children[2]['children'][0].textContent);
  console.log('Elements: ' + categoryStats[0].children[2]['children'][1]['children'].length);
})();
// Napisz skrypt, który:

// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).
// W konsekwencji, w wierszu poleceń znajdą się takie komunikaty.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
