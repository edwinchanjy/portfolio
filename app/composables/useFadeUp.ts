/**
 * useFadeUp — IntersectionObserver composable for scroll-triggered fade-up animations.
 * Adds 'is-visible' class to elements with the 'fade-up' or 'fade-up-stagger' class.
 */
export function useFadeUp() {
  let observer: IntersectionObserver | null = null

  function observe(root?: HTMLElement) {
    if (!import.meta.client) return

    const targets = (root ?? document).querySelectorAll<HTMLElement>('.fade-up, .fade-up-stagger')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    targets.forEach((el) => observer?.observe(el))
  }

  function disconnect() {
    observer?.disconnect()
    observer = null
  }

  return { observe, disconnect }
}
