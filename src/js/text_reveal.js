import { gsap } from "gsap";
import "splitting/dist/splitting.css"
import "splitting/dist/splitting-cells.css"
import Splitting from "splitting"

Splitting()

let DOM = {
  content: {
    header: {
      title: document.querySelector('.title'),
      get titleChars() {
        return this.title.querySelectorAll('span .word > .char, .whitespace')
      },
      date: document.querySelector('.date'),
      get dateChars() {
        return this.date.querySelectorAll('span .word > .char, .whitespace')
      }
    },
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
  .set(DOM.content.header.titleChars, {
    x:'-100%',
    opacity: 0
  })
  .set(DOM.content.header.dateChars, {
    y:'-100%',
    opacity: 0
  })
  .set(DOM.content.banner.chars, {
    y:'100%',
    opacity: 0
  })
  .staggerTo( DOM.content.header.titleChars, 0.5, {
    ease: 'Power3.ease',
    x: '0',
    opacity: 1
  }, 0.044, 'start')
  .staggerTo( DOM.content.banner.chars, 0.5, {
    ease: 'Power3.ease',
    y: '0',
    opacity: 1
  }, 0.014, 'start')
  .staggerTo( DOM.content.header.dateChars, 0.5, {
    ease: 'Power3.ease',
    y: '0',
    opacity: 1
  }, 0.054, 2)
  


window.addEventListener('load', () => {
  timeline.play()
})