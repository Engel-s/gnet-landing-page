import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduceMotion) {
  gsap.from("[data-reveal]", {
    opacity: 0,
    y: 28,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.08,
  });

  gsap.utils.toArray<HTMLElement>("[data-scroll-card]").forEach((card) => {
    gsap.from(card, {
      opacity: 0,
      y: 34,
      duration: 0.75,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
      },
    });
  });
}