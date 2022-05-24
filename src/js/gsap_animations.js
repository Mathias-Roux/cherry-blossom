import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


gsap.to(".gallerie", {
  xPercent: -100, 
  ease: "none",
  scrollTrigger: {
    trigger: ".gallerie",
    start: "top top",
    end: () => innerWidth * 2,
    scrub: true,
    pin: true,
    markers: true,
    invalidateOnRefresh: true,
    anticipatePin: 1
  }
});