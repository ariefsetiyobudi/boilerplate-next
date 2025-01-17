import { useEffect } from 'react'
import { slideUpAnimations } from "@/animations"

const Footer = () => {
  useEffect(() => {
    const titleAnimations = document.querySelectorAll('[data-animation="title"]')
    slideUpAnimations(titleAnimations)
  })

  return (
    <>
    </>
  )
}

export default Footer