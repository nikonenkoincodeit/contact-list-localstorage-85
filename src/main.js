import { refs } from "./refs";
import { saveData } from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";

refs.form.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault()

  // const { number, name, email } = e.target.elements;
  // const data = {
  //   name: name.value.trim(),
  //   number: number.value.trim(),
  //   email: email.value.trim(),
  // };

  try {
    const data = Object.fromEntries(new FormData(e.target));
    e.target.reset();
    data.createdAt = Date.now()
    await saveData(data);
  } catch (error) {
    console.log(error.message)
  }
};