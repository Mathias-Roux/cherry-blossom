import { gsap } from "gsap";

const items = document.querySelectorAll('.gallerie__item--img')
const captions = document.querySelectorAll('.gallerie__item--caption')

items.forEach((item, index) => {
  item.addEventListener('mouseenter', (event) => {
    gsap.timeline({
      defaults: {duration: 2.4, ease: 'expo'}
    })
    .to(item, {scale: 0.90, borderRadius: "5%"}, 0)
    .to(captions[index], {opacity: 1, y: 0})
  })

  item.addEventListener('mouseleave', (event) => {
    gsap.timeline({
      defaults: {duration: 2.4, ease: 'expo'}
    })
    .to(item, {scale: 1, borderRadius: "0"}, 0)
    .to(captions[index], {opacity: 0, y: '-100%'})
  })
})