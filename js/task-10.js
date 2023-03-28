'use strict';
(() => {
  const objCreation = {
    //Buttons bindings
    createBtn: document.querySelector('[data-create]'),
    delBtn: document.querySelector('[data-destroy]'),
    //document bindings
    amount: document.querySelector('#controls'),
    areaForObj: document.querySelector('#boxes'),
    //div settings
    divWidth: 30,
    divHeight: 30,
    //random color in hex generator
    getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
    //button event handlers
    init: function () {
      this.createBtn.addEventListener(
        'click',
        function () {
          console.log('calling creator...');
          this.createBoxes(+document.querySelector('#controls')['children'][0].value);
        }.bind(this)
      );
      this.delBtn.addEventListener(
        'click',
        function () {
          console.log('calling destroyer...');
          this.destroyBoxes();
        }.bind(this)
      );
    },
    createBoxes: function (amount) {
      if (amount === 0) {
        this.destroyBoxes();
      } else if (!this.areaForObj.hasChildNodes()) {
        console.log('creating...' + amount);
        let creationDivs = []; //array of divs with html code
        let width = this.divWidth;
        let heigh = this.divHeight;
        for (let i = 0; i < amount; i++) {
          creationDivs[
            i
          ] = `<div style="width: ${width}px; height: ${heigh}px; background-color: ${this.getRandomHexColor()};">${
            i + 1
          }</div>`;
          width = width + 10;
          heigh = heigh + 10;
        }
        let creationToPush = creationDivs.map(div => div).join(''); //building one string from array
        this.areaForObj.insertAdjacentHTML('beforeend', creationToPush); //adding elements to div box
        this.areaForObj.style.display = 'flex';
        this.areaForObj.style.flexWrap = 'wrap';
        this.areaForObj.style.justifyContent = 'center';
        this.areaForObj.style.gap = '10px';
        this.areaForObj.style.alignItems = 'center';
      } else {
        console.log('Destroy before creat!');
      }
    },
    destroyBoxes: function () {
      console.log('destroing...' + this.areaForObj.childElementCount);
      if (this.areaForObj.hasChildNodes()) {
        this.areaForObj.replaceChildren();
        this.areaForObj.style.removeProperty('alignItems'); //not working
        this.areaForObj.style.removeProperty('gap');
        this.areaForObj.style.removeProperty('justifyContent'); //not working
        this.areaForObj.style.removeProperty('flexWrap'); //not working
        this.areaForObj.style.removeProperty('display');
      } else {
        console.log('There is nothing left...');
      }
    },
  };
  objCreation.init();
})();

// Zadanie 10 (nieobowiązkowe)
// Napisz skrypt tworzenia i usuwania kolekcji elementów. Użytkownik wprowadza liczbę elementów do input i naciska przycisk Utwórz, co rozpoczyna tworzenie się kolekcji. Po naciśnięciu przycisku Usuń, kolekcja elementów zostaje usunięta.
// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Utwórz funkcję createBoxes(amount), która bierze jeden parametr - liczbę. Funkcja tworzy tyle <div>, ile ukazano w amount i dodaje je do div#boxes.

// Wymiary pierwszego <div> - 30px na 30px.
// Każdy następny element powinien być szerszy i wyższy od poprzedniego o 10px.
// Wszystkie elementy powinny mieć losowy kolor tła w formacie NEX. Użyj gotowej funkcji getRandomHexColor aby otrzymać kolor.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Utwórz funkcję destroyBoxes(), która usuwa zawartość div#boxes, tym samym usuwając wszystkie utworzone elementy.
