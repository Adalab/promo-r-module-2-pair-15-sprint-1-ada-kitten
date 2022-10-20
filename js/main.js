"use strict";

const newForm = document.querySelector(".js-new-form");
// newForm.classList.remove("collapsed");

//condición para que si en la sección js-new-form existe la clase collapsed, quitarla
//si no, añadirla
if (newForm.classList.contains("collapsed")) {
  newForm.classList.remove("collapsed");
} else {
  newForm.classList.add("collapsed");
}

let newKitten = document.querySelector(".js-list");

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

// const content = kittenOne + kittenTwo + kittenThree;
// newKitten.innerHTML = content;

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

const inputSearchDesc = document.querySelector(".js_in_search_desc");
inputSearchDesc.value = "";

const inputValue = inputSearchDesc.value;

//condición para que solo aparezcan gatos si el input tenga valor.
//si la condición se cumple, analiza cada gato para ver si el valor esta presente.
//si la condición se cumple se pinta la info del gato
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
