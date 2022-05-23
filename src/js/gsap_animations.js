import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
  scrollTrigger: {
    trigger: ".gallerie__item",
    start: "center center",
    end: "bottom top",
    scrub: true,
    pin: true,
    markers: true
  }
})
  .from(".usa",  { y: innerHeight * 1.5 })
  .from(".temple", { y: innerHeight * 1.5 });