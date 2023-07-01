import { uid } from "uid/secure";
import { formEl, containerEl } from "./refs";
import { saveData, getData, saveArrData } from "./api";
import { createCard } from "./markup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

formEl.addEventListener("submit", onSubmit);
window.addEventListener("load", onLoad);
containerEl.addEventListener("click", deleteCard);

function onSubmit(evt) {
  evt.preventDefault();
  const { name, number, email } = evt.target.elements;
  console.log(name, number, email);
  const nameVal = name.value.trim();
  const numberVal = number.value.trim();
  const emailVal = email.value.trim();
  const data = createdObj(nameVal, numberVal, emailVal);
  saveData(data);
  evt.target.reset();
  const markup = createCard([data]);
  addMarkup(markup);
}

function createdObj(name, number, email) {
  return {
    name,
    number,
    email,
    id: uid(),
    createdAt: Date.now(),
  };
}

function addMarkup(markup) {
  containerEl.insertAdjacentHTML("afterbegin", markup);
}

function onLoad() {
  const data = getData();
  if (!data.length) {
    return;
  }
  const markup = createCard(data);
  addMarkup(markup);
}

function deleteCard(evt) {
  if (!evt.target.classList.contains("btn-close")) {
    return;
  }
  const card = evt.target.closest(".js-wrap-card");
  const currentId = card.dataset.cardid;
  card.remove();
  const data = getData().filter((item) => item.id !== currentId);
  saveArrData(data);
}
