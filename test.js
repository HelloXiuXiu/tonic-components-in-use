

// get first component elems
let propList = document.querySelector(".component_props").children;
let accordion = document.getElementById("my-accordion")

// change attrebutes
function toggleAttrebute(component, property, value) {
  component.hasAttribute(property) ? component.removeAttribute(property) : component.setAttribute(property, value)
} 

// make props clickable
for (let prop of propList) {
  prop.addEventListener("click", () => {
    prop.classList.toggle("active")
    let attribute = prop.innerText
    toggleAttrebute(accordion, attribute, "true")
})
}


// fill text area with component code 
let accordionCode = document.querySelector(".component_code > code")
let newElem = accordion.cloneNode(true)


// find and remove DIVs. if they have text content - insert it to parrent
function removeChildren(elem) {
  let children = elem.childNodes

  if (children) {
    for (let child of children) {
      if (child.tagName === "DIV") {
        if (child.innerText && !child.children.length) {
          child.parentElement.innerHTML = child.innerText
        }
        child.remove()

      } else {
        removeChildren(child)
      }
    }
  }
}


function checkBr(elem) {
  
  elem.replace('="',`='<span class="text_marker">"`)
  console.log(elem)
}

removeChildren(newElem)

checkBr(newElem.outerHTML)

// print code
accordionCode.innerText = newElem.outerHTML

// let accordionCode = document.querySelector(".component_code > code")
// accordionCode.innerText.replace('="','=<span class="text_marker">"')







