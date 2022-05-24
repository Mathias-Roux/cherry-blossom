import { gsap } from "gsap";

const items = document.querySelectorAll('.gallerie__item--img')


items.forEach(item => {
  item.addEventListener('mouseenter', (event) => {
    gsap.timeline({
      defaults: {duration: 2.4, ease: 'expo'}
    })
    .to(item, {scale: 0.95, borderRadius: "10%"}, 0)
  })

  item.addEventListener('mouseleave', (event) => {
    gsap.timeline({
      defaults: {duration: 2.4, ease: 'expo'}
    })
    .to(item, {scale: 1, borderRadius: "0"}, 0)
  })
})