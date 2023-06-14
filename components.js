export default class Component {

  constructor(name) {
    this.name = name
  }

  appendComponent(id) {
    let parser = new DOMParser()
    let node = parser.parseFromString(this.html, "text/html")
    console.log(node)

    let parrent = document.getElementById(id)
    parrent.innerHTML = node.body.innerHTML
  }
}





