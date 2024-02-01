import scrollbar from './scrollbar.js'
import auth from './hasAuth.js'
import loading from './loading.js'
import lazyImg from './lazyImg.js'

const directives = {
  scrollbar,
  auth,
  loading,
  lazyImg
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
