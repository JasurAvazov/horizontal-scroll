import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

export function init() {
	gsap.registerPlugin(ScrollTrigger);
	const container = document.querySelector(".main-container");
	const sections = gsap.utils.toArray(".main-container section");
	const texts = gsap.utils.toArray(".anim");
	const mask = document.querySelector(".mask");

	let scrollTween = gsap.to(sections, {
		xPercent: -100 * (sections.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: ".main-container",
			pin: true,
			scrub: 1,
			end: "+=2000",
		},
	});

	console.log(1 / (sections.length - 1));

	gsap.to(mask, {
		width: "100%",
		scrollTrigger: {
			trigger: ".wrapper",
			start: "top left",
			end: "bottom bottom",
			scrub: 1,
		},
	});

	sections.forEach((section) => {
		let text = section.querySelectorAll(".anim");
		if (text.length === 0) return;

		gsap.from(text, {
			y: -130,
			opacity: 0,
			duration: 2,
			ease: "elastic",
			stagger: 0.1,
			scrollTrigger: {
				trigger: section,
				containerAnimation: scrollTween,
				start: "left center",
			},
		});
	});
}