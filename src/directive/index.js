import scrollbar from './scrollbar.js'
import auth from './hasAuth.js'
import loading from './loading.js'

const directives = {
  scrollbar,
  auth,
  loading
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
