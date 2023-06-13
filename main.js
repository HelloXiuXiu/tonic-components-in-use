import './style.css'

import Tonic from '@socketsupply/tonic';
import bundle from '@socketsupply/components';

bundle(Tonic) // attach everything


let propList = document.querySelector(".component_props").children;
let accordion = document.getElementById("my-accordion")

function toggleAttrebute(component, property, value) {
  component.hasAttribute(property) ? component.removeAttribute(property) : component.setAttribute(property, value)
} 

for (let prop of propList) {
  prop.addEventListener("click", () => {
    prop.classList.toggle("active")
    let attribute = prop.innerText
    toggleAttrebute(accordion, attribute, "true")
})
}




