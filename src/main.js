import { uid } from 'uid/secure'
import {formEl} from "./refs";
import {saveData} from "./api"
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";


formEl.addEventListener("submit", onSubmit );

function onSubmit(evt){
    evt.preventDefault()
    const {name, number, email} = evt.target.elements;
    console.log(name, number, email);
    const nameVal = name.value.trim();
    const numberVal = number.value.trim();
    const emailVal = email.value.trim();
    const data = createdObj(nameVal, numberVal, emailVal);
    saveData(data);
    evt.target.reset()


}

function createdObj(name, number, email) {
    return {
        name, number, email, id:uid (), createdAt: Date.now()
    }
}