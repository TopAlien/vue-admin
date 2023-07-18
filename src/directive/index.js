import scrollbar from './scrollbar'

const directives = {
  scrollbar
}

const name = "ealien"

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
