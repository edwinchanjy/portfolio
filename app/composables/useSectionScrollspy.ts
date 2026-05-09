/**
 * useScrollspy — tracks which section is currently in view
 * and returns a reactive ref of the active section ID.
 */
export function useSectionScrollspy(sectionIds: string[]) {
  const activeSection = ref<string>(sectionIds[0] ?? '')
  let observer: IntersectionObserver | null = null

  function init() {
    if (!import.meta.client) return

    const options: IntersectionObserverInit = {
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0,
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    }, options)

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer?.observe(el)
    })
  }

  function destroy() {
    observer?.disconnect()
    observer = null
  }

  return { activeSection, init, destroy }
}
