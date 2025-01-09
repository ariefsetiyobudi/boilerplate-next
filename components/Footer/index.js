import { useEffect } from 'react'
import { titleAnimateIn, revealAnimateIn, scaleAnimateIn, animateOut } from "@/animations"

const Footer = () => {
  useEffect(() => {
    const titleAnimations = document.querySelectorAll('[data-animation="title"]')

    titleAnimations.forEach((element) => {
      const children = element.childNodes
      children.forEach((children) => {
        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0]
          if(entry.isIntersecting) {
            titleAnimateIn(entry.target)
          } else {
            animateOut(entry.target)
          }
        })
        observer.observe(children)
      })
    })
  })

  return (
    <>
    </>
  )
}

export default Footer