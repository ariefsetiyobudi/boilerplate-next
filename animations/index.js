import GSAP from "gsap/dist/gsap"

export const titleAnimateIn = element => {
	GSAP.set(element, {
	  autoAlpha: 1
	})

	GSAP.fromTo(element, {
	  autoAlpha: 0,
	  y: '100%'
	}, {
	  autoAlpha: 1,
	  delay: 0.5,
	  duration: 1.5,
	  ease: 'expo.out',
	  y: '0%'
	})
}
  
export const revealAnimateIn = element => {
	GSAP.set(element, {
	  autoAlpha: 1
	})

	GSAP.fromTo(element, {
	  autoAlpha: 0
	}, {
	  autoAlpha: 1,
	  delay: 0.5,
	  duration: 1.5,
	  ease: 'expo.out'
	})
}

export const scaleAnimateIn = element => {
	GSAP.set(element, {
	  autoAlpha: 1
	})

	GSAP.fromTo(element, {
	  autoAlpha: 0,
	  scale: 1.4
	}, {
	  autoAlpha: 1,
	  delay: 0.5,
	  duration: 1.5,
	  ease: 'expo.out',
	  scale: 1
	})
}

export const animateOut = element => {
	GSAP.set(element, {
	  autoAlpha: 0
	})
}