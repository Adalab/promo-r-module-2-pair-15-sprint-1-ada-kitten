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

// const newKitten = document.querySelector(".js-list");

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

// const kittenOne = `<li class="card">
// <article>
//   <img class="card_img" src= ${kittenOneImage} alt="gatito" />
//   <h3 class="card_title">${kittenOneName}</h3>
//   <h4 class="card_race">${kittenOneBreed}</h4>
//   <p class="card_description">
//     ${kittenOneDesc}
//   </p>
// </article>
// </li>`;

// const kittenTwo = `<li class="card">
// <article>
//   <img class="card_img" src= ${kittenTwoImage} alt="gatito" />
//   <h3 class="card_title">${kittenTwoName}</h3>
//   <h4 class="card_race">${kittenTwoBreed}</h4>
//   <p class="card_description">
//     ${kittenTwoDesc}
//   </p>
// </article>
// </li>`;

// const kittenThree = `<li class="card">
// <article>
//   <img class="card_img" src= ${kittenThreeImage} alt="gatito" />
//   <h3 class="card_title">${kittenThreeName}</h3>
//   <h4 class="card_race">${kittenThreeBreed}</h4>
//   <p class="card_description">
//     ${kittenThreeDesc}
//   </p>
// </article>
// </li>`;

// const content = kittenOne + kittenTwo + kittenThree;
//ESTA COMENTADO PARA QUE LA CONDICION DE ABAJO SOLO PINTE
//LOS GATOS CUANDO TENGAN EL MISMO VALUE QUE EL USUARIO ESCRIBIÓ
// newKitten.innerHTML = content;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// ESTO ES PARA LA SECCIÓN DE FILTRAR/BUSCAR:
// SI EL VALOR DEL INPUT ESTA VACIO, NO MUESTRAR NINGÚN GATO
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

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//clase eventos ej.1
//ESTO ES PARA QUE AL HACER CLICK EN + SE MUESTRE
//O SE QUITE EL FORMULARIO DE "AGREGAMOS UN NUEVO GATITO?"

/*const addIcon = document.querySelector(".fa-plus-circle");
addIcon.addEventListener("click", (event) => {
  event.preventDefault();
  if (newForm.classList.contains("collapsed")) {
    newForm.classList.remove("collapsed");
  } else {
    newForm.classList.add("collapsed");
  }
});*/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// //clase eventos ej.2
//ESTO ES PARA QUE AL HACER CLICK EN "AÑADIR" SE MUESTRE
//UN MENSAJE SI ALGUN INPUT ESTA VACIO Y
//SI TODOS ESTAN RELLENADOS, QUE NO MUESTRE NINGÚN MENSAJE

const addButton = document.querySelector(".js-btn-add");
const photoInput = document.querySelector(".js-input-photo");
const nameInput = document.querySelector(".js-input-name");
const breedInput = document.querySelector(".js-input-breed");
const descInput = document.querySelector(".js-input-desc");
const labelMessageError = document.querySelector(".js-label-error");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const valueDesc = descInput.value;
  const valuePhoto = photoInput.value;
  const valueName = nameInput.value;
  console.log(valueDesc);
  if (valueDesc === "" || valuePhoto === "" || valueName === "") {
    labelMessageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    labelMessageError.innerHTML = "";
  }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// //clase eventos ej.3
//ESTO ES PARA QUE AL HACER CLICK EN "BUSCAR"
//SI UNO DE LOS CAMPOS ESTE VACIO, QUE SALGA EL MENSAJE
//SI LOS DOS ESTAN RELLENOS, NO SALGA NINGUN MENSAJE

const findBtn = document.querySelector(".js-btn-find");
const desc = document.querySelector(".js-desc");
const breed = document.querySelector(".js-breed");
const findMessageError = document.querySelector(".js-find-error");

findBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const valueDesc = desc.value;
  const valueBreed = breed.value;

  if (valueDesc === "" || valueBreed === "") {
    findMessageError.innerHTML = "Debe rellenar todos los valores";
  } else {
    findMessageError.innerHTML = "";
  }
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// //clase eventos ej.4
//ESTO ES PARA QUE AL HACER CLICK EN "CANCELAR"
//TODOS LOS INPUTS DE FORM SE VACIEN Y QUE
//EL FORM DESAPAREZCA

const cancelBtn = document.querySelector(".button-cancel");

cancelBtn.addEventListener("click", (event) => {
  event.preventDefault();
  photoInput.value = "";
  nameInput.value = "";
  breedInput.value = "";
  descInput.value = "";
  newForm.classList.add("collapsed");
});

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//clase funciones 1 ej.1
//ESTO ES PARA QUE AL HACER CLICK EN "+"
//SE MUESTRE O SE QUITE EL FORMULARIO "AÑADIMOS UNA NUEVO GATITO?"
//ESTO HACE LO MISMO QUE - EJERCICIO 1 DE EVENTOS -

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}
function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains("collapsed")) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}
const addIcon = document.querySelector(".fa-plus-circle");
addIcon.addEventListener("click", handleClickNewCatForm);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//clase funciones 1 ej.2
//1- llamar donde vamos a mostrar los gatos

let kittenList = document.querySelector(".js-list");

function renderKitten(url, name, breed, desc) {
  const html = `
  <li class="card">
   <article>
  <img class="card_img" src= ${url} alt="gatito" />
   <h3 class="card_title">${name}</h3>
   <h4 class="card_race">${breed}</h4>
    <p class="card_description">
      ${desc}
    </p>
 </article>
   </li>`;
  return html;
}

kittenList.innerHTML += renderKitten(kittenOneImage, kittenOneName, kittenOneBreed, kittenOneDesc);

kittenList.innerHTML += renderKitten(kittenTwoImage, kittenTwoName, kittenTwoBreed, kittenTwoDesc);

kittenList.innerHTML += renderKitten(kittenThreeImage, kittenThreeName, kittenThreeBreed, kittenThreeDesc);
