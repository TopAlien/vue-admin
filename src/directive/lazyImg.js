import { useIntersectionObserver } from '@vueuse/core'

/**
 v-lazyImg="'https://via.placeholder.com/250'"
 */
export default {
  mounted(el, binding) {
    const { stop } = useIntersectionObserver(
      el,
      ([{ isIntersecting }], observerElement) => {
        if (isIntersecting) {
          stop()

          el.src = binding.value
        }
      },
      { threshold: 0 }
    )
  }
}
