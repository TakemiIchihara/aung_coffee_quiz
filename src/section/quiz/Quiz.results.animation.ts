import { gsap } from 'gsap'

export const createResultAnimation = (component: HTMLDivElement) => {
  if (!component) return

  console.log(component)
  const q = gsap.utils.selector(component)

  const container = q('[data-container]')
  const tl = gsap.timeline({})

  console.log(container)
  tl.to(component, {
    autoAlpha: 0,
    duration: 2,
  })
}
