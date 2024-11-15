"use strict";

const btn = document.querySelector("button");
const img = document.querySelector("img");

const getDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Error getting the image. (${res.status})`);
      }

      return res.json();
    })
    .then((data) => (img.src = data.message))
    .catch((err) => console.log(`Something wen't wrong (${err.message}).`));
};

btn.addEventListener("click", getDog);
