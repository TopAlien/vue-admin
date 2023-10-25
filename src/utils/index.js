import Scrollbar from 'smooth-scrollbar'
import config from '@/config/index.js'
import { isFunction } from 'lodash-es'

export const scrollToByEl = (options) => {
  const { x = 0, y = 0, el } = options

  if (!el) {
    throw new Error('scroll is by el, el is not defined!')
  }
  const scrollDom = document.querySelector(el)

  if (config.useCustomScrollBar) {
    Scrollbar.get(scrollDom)?.scrollTo(x, y)
  } else {
    scrollDom?.scrollTo(x, y)
  }
}

export const isVueComponent = (obj) => {
  return isFunction(obj.render) || isFunction(obj.setup)
}
