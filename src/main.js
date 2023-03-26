import { refs } from "./refs";
import { saveData, getData } from "./api";
import { createCard } from "./markup";

import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

refs.form.addEventListener("submit", onSubmit);

async function onSubmit(e) {
  e.preventDefault();

  // const { number, name, email } = e.target.elements;
  // const data = {
  //   name: name.value.trim(),
  //   number: number.value.trim(),
  //   email: email.value.trim(),
  // };

  try {
    const data = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    data.createdAt = Date.now();
    await saveData(data);
    const markup = createCard([data]);
    addCard(markup);
  } catch (error) {
    console.log(error.message);
  }
}

async function init() {
  try {
    const response = await getData();
    if (!response.length) {
      return;
    }
    const markup = createCard(response);
    addCard(markup);
  } catch (error) {
    console.log(error.message);
  }
}

function addCard(markup) {
  refs.box.insertAdjacentHTML("beforeend", markup);
}

init();
