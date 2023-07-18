const extractProp = (prop) => (obj) => (typeof obj === 'undefined' ? undefined : obj[prop])
const extractOptions = extractProp('options')
const extractEl = extractProp('el')
export default {
  mounted(el, binding, vnode, prevVnode) {
    console.log(el)
    console.log('mounted')
  },

  updated(el, binding, vnode, prevVnode) {
    console.log('updated')
  },

  unmounted(el, binding, vnode, prevVnode) {
    console.log('unmounted')
  },
}
