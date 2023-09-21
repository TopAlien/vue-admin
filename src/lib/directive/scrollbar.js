import Scrollbar from 'smooth-scrollbar'
import config from '@/config/index.js'

const extractProp = (prop) => (obj) => (typeof obj === 'undefined' ? undefined : obj[prop])
const extractOptions = extractProp('options')
const extractEl = extractProp('el')

const bestMatch = (extractor) => (possibilities) =>
  extractor(possibilities.find((p) => typeof extractor(p) !== 'undefined'))
const bestEl = bestMatch(extractEl)
const bestOptions = bestMatch(extractOptions)

export default {
  mounted(el, binding) {
    if (config.useCustomScrollBar) {
      const possibilities = [binding.value]
      const targetEl = bestEl(possibilities)
      const config = bestOptions(possibilities)

      const scrollY = binding.modifiers.y
      const scrollX = binding.modifiers.x
      Scrollbar.init(targetEl ? document.querySelector(targetEl) : el)
    }
  },

  updated(el, binding, vnode, prevVnode) {},

  unmounted(el, binding) {
    if (config.useCustomScrollBar) {
      const possibilities = [binding.value]
      const targetEl = bestEl(possibilities)
      Scrollbar.destroy(targetEl ? document.querySelector(targetEl) : el, {})
    }
  }
}
