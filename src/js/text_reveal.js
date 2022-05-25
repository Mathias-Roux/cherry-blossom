import { gsap } from "gsap";
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

Splitting()

let DOM = {
  content: {
    banner: {
      section: document.querySelector('.content__paragraph'),
      get chars() {
        return this.section.querySelectorAll('.paragraph .word > .char, .whitespace')
      }
    }
  }
}


const timeline = gsap.timeline({paused: true})
  .addLabel('start')
  .set(DOM.content.banner.chars, {
    y:'-100%',
    opacity: 0
  })
  .staggerTo( DOM.content.banner.chars, 0.5, {
    ease: 'Power3.easeOut',
    y: '0',
    opacity: 1
  }, 0.014, 'start')


window.addEventListener('load', () => {
  timeline.play()
})