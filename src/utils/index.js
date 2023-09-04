import Scrollbar from 'smooth-scrollbar'
import config from '@/config/index.js'

export const scrollTo = (x = 0, y = 0, el = '.content_wrap') => {
  const scrollDom = document.querySelector(el)

  if (config.useCustomScrollBar) {
    Scrollbar.get(scrollDom)?.scrollTo(x, y)
  } else {
    scrollDom?.scrollTo(x, y)
  }
}
