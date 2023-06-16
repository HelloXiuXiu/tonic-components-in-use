import Tonic from '@socketsupply/tonic'

class MyAccordion extends Tonic {
  render () {
    return this.html`
<tonic-accordion id="my-accordion">
  <tonic-accordion-section
    name="bucket-test-1"
    id="bucket-test-1"
    data="preview"
    label="Accordion Test 1">
    Whatever
  </tonic-accordion-section>
  <tonic-accordion-section
    name="bucket-test-2"
    id="bucket-test-2"
    label="Accordion Test 2">
    Some Content
  </tonic-accordion-section>
  <tonic-accordion-section
    name="bucket-test-3"
    id="bucket-test-3"
    label="Accordion Test 3">
    The visual design includes features intended to help users understand that the accordion provides enhanced keyboard navigation functions. When an accordion header button has keyboard focus, the styling of the accordion container and all its header buttons is changed.
  </tonic-accordion-section>
</tonic-accordion>
    `
  }
}
let props = [];

props[0] = {
  name: "data-allow-multiple",
  value: [true, false],
  tag: "tonic-accordion",
  descr: "Allow multiple sections to be expanded at one time.",
}

props[1] = {
  name: "theme",
  value: ["light", "dark"],
  tag: "tonic-accordion",
  descr: "Adds a theme color (light, dark or whatever is defined in your base CSS).",
}


// class MyAccordionDescr extends Tonic {
//   render () {
//     return this.html`
//       <ul class="component_props">
//         <li>
//           <span class="prop_name">${props[0].name}</span>
//           <div class="component_info">
//           <span>attribute for <</span>${props[0].tag}>
//           <p>${props[0].descr}</p>
//           </div> 
//         </li>
//         <li>
//           <span class="prop_name">${props[1].name}</span>
//           <div class="component_info">
//           <span>attribute for <</span>${props[1].tag}>
//           <p>${props[1].descr}</p>
//           </div> 
//         </li>
//       </ul>
//     `
//   }
// }

// Tonic.add(MyAccordion)
Tonic.add(MyAccordionDescr)



