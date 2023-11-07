import scrollbar from './scrollbar.js'
import auth from './hasAuth.js'

const directives = {
  scrollbar,
  auth
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
