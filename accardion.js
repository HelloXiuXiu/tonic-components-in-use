import Component from '/components.js'

let accordion = new Component("accordion");

accordion.html = `
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
console.log(accordion)


accordion.appendComponent("accordeon_wrap")




