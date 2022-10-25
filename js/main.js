"use strict";

const newForm = document.querySelector(".js-new-form");
// newForm.classList.remove("collapsed");

//condición para que si en la sección js-new-form existe la clase collapsed, quitarla
//si no, añadirla
/*if (newForm.classList.contains("collapsed")) {
  newForm.classList.remove("collapsed");
} else {
  newForm.classList.add("collapsed");
}*/

// - -  U N A  M A N E R A  D E  P I N T A R  L O S  G A T O S - - //
/*const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
    Ruiseño, juguetón, le guta estar tranquilo y que nadie le
    moleste. Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const kittenTwo = ` <li class="card">
<img
  class="card_img"
  src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  alt="gatito"
/>
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const kittenThree = `<li class="card">
<img
  class="card_img"
  src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
  alt="gatito"
/>
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">British Shorthair</h4>
<p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
</p>
</li>`;

const content = kittenOne + kittenTwo + kittenThree;
newKitten.innerHTML = content;*/

//  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// - -  A C T U A L  M A N E R A  D E  P I N T A R  L O S  G A T O S - - //

const newKitten = document.querySelector(".js-list");

const kittenOneImage = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenOneName = "Anastacio";
const kittenOneDesc = "Ruiseño, juguetón, cariñoso, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenOneBreed = "British Shorthair";

const kittenTwoImage = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenTwoName = "Fiona";
const kittenTwoDesc = "Ruiseño, juguetón, cariñoso, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenTwoBreed = "British Shorthair";

const kittenThreeImage =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenThreeName = "cielo".toUpperCase();
const kittenThreeDesc = "Ruiseño, juguetón, le gusta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";
const kittenThreeBreed = "British Shorthair";

const kittenOne = `<li class="card">
<article>
  <img class="card_img" src= ${kittenOneImage} alt="gatito" />
  <h3 class="card_title">${kittenOneName}</h3>
  <h4 class="card_race">${kittenOneBreed}</h4>
  <p class="card_description">
    ${kittenOneDesc}
  </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<article>
  <img class="card_img" src= ${kittenTwoImage} alt="gatito" />
  <h3 class="card_title">${kittenTwoName}</h3>
  <h4 class="card_race">${kittenTwoBreed}</h4>
  <p class="card_description">
    ${kittenTwoDesc}
  </p>
</article>
</li>`;

const kittenThree = `<li class="card">
<article>
  <img class="card_img" src= ${kittenThreeImage} alt="gatito" />
  <h3 class="card_title">${kittenThreeName}</h3>
  <h4 class="card_race">${kittenThreeBreed}</h4>
  <p class="card_description">
    ${kittenThreeDesc}
  </p>
</article>
</li>`;

const content = kittenOne + kittenTwo + kittenThree;
//ESTA COMENTADO PARA QUE LA CONDICION DE ABAJO SOLO PINTE
//LOS GATOS CUANDO TENGAN EL MISMO VALUE QUE EL USUARIO ESCRIBIÓ
// newKitten.innerHTML = content;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ESTO ES PARA LA SECCIÓN DE FILTRAR/BUSCAR:
// SI EL VALOR DEL INPUT ESTA VACIO, NO MOSTRAR NINGÚN GATO
// SI NO, MOSTRAR SOLO AQUELLOS QUE TENGAN MATCH CON
// LAS DESCRIPCIONES QUE EL USUARIO INTRUZCA
const inputSearchDesc = document.querySelector(".js-desc");
inputSearchDesc.value = "";
const inputValue = inputSearchDesc.value;
console.log(inputValue);

if (inputValue != "") {
  if (kittenOneDesc.includes(inputValue)) {
    newKitten.innerHTML = kittenOne;
  }

  if (kittenTwoDesc.includes(inputValue)) {
    newKitten.innerHTML += kittenTwo;
  }

  if (kittenThreeDesc.includes(inputValue)) {
    newKitten.innerHTML += kittenThree;
  }
}

// //clase eventos ej.1

// const addIcon = document.querySelector(".fa-plus-circle");
// addIcon.addEventListener ("click", (event) => {
//   event.preventDefault();
//   if (newForm.classList.contains("collapsed")) {
//     newForm.classList.remove("collapsed");
//   } else {
//     newForm.classList.add("collapsed");
//   }
// });

// //clase eventos ej.2

// const addButton = document.querySelector(".js-btn-add");
// const photoInput = document.querySelector(".js-input-photo");
// const nameInput = document.querySelector(".js-input-name");
// const descInput = document.querySelector(".js-input-desc");
// const labelMessageError = document.querySelector(".js-label-error");

// addButton.addEventListener ("click", (event) => {
//   event.preventDefault();
//   const valueDesc = descInput.value;
//   const valuePhoto = photoInput.value;
//   const valueName = nameInput.value;
//   console.log(valueDesc);
//   if (valueDesc === "" || valuePhoto === "" || valueName === "") {
//     labelMessageError.innerHTML = "Debe rellenar todos los valores";
//   } else if (valueDesc !== "" && valuePhoto !== "" && valueName !== "") {
//     labelMessageError.innerHTML = "";
//   }
// })

// //clase eventos ej.3

// const findBtn = document.querySelector(".js-btn-find");
// const breed = document.querySelector(".js-breed");
// const desc = document.querySelector(".js-desc");
// const findMessageError = document.querySelector(".js-find-error");

// findBtn.addEventListener("click", (event) => {
//   event.preventDefault();
//   const valueDesc = desc.value;
//   const valueBreed = breed.value;

//   if (valueDesc === '' || valueBreed === '') {
//     findMessageError.innerHTML = "Debe rellenar todos los valores";
//   }
//   //condición para que solo aparezcan gatos si el input tenga valor.
//   //si la condición se cumple, analiza cada gato para ver si el valor esta presente.
//   //si la condición se cumple se pinta la info del gato
// if (inputValue === "cariñoso") {
//   if (kittenOneDesc.includes(inputValue)) {
//     newKitten.innerHTML = kittenOne;
//   }

//   if (kittenTwoDesc.includes(inputValue)) {
//     newKitten.innerHTML += kittenTwo;
//   }

//   if (kittenThreeDesc.includes(inputValue)) {
//     newKitten.innerHTML += kittenThree;
//   }
//   else {
//     findMessageError.innerHTML = "";
// }

// }

// //clase eventos ej.4

// const cancelBtn = document.querySelector(".button-cancel");

// cancelBtn.addEventListener("click", () => {
//   newForm.classList.add("collapsed");
//   //crear condición para el botón cancelar
// })
