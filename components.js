import Tonic from '@socketsupply/tonic'

addEventListener("load", () => {
  let propButtons = document.querySelectorAll(".component_props li")
  for (let button of propButtons) {
    button.onclick = (e) => {
        for (let button of propButtons) {
          button.classList.remove("active")
       }
       button.classList.add("active")
    }
  }
});



