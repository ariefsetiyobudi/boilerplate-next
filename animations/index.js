import GSAP from "gsap/dist/gsap"

export const slideUpAnimateIn = element => {
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

export const slideUpAnimations = elements => {
	elements.forEach((element) => {
		const children = element.childNodes
		children.forEach((children) => {
			const observer = new IntersectionObserver((entries) => {
				const entry = entries[0]
				if(entry.isIntersecting) {
					slideUpAnimateIn(entry.target)
				} else {
					animateOut(entry.target)
				}
			})
			observer.observe(children)
		})
	})
}

export const revealAnimations = elements => {
	elements.forEach((element) => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			if(entry.isIntersecting) {
				revealAnimateIn(entry.target)
			} else {
				animateOut(entry.target)
			}
		})
		observer.observe(element)
	})
}

export const scaleAnimations = elements => {
	elements.forEach((element) => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]
			if(entry.isIntersecting) {
				scaleAnimateIn(entry.target)
			} else {
				animateOut(entry.target)
			}
		})
		observer.observe(element)
	})
}