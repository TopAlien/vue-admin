import scrollbar from './scrollbar.js'

const directives = {
  scrollbar
}
export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
