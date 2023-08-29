import { hiprint, disAutoConnect } from 'vue-plugin-hiprint'
import tem1 from '@/utils/print/template/tem1.js'

disAutoConnect()

const templates = {
  tem1
}

class Print {
  constructor(template, printData) {
    this.hiprintTemplate = new hiprint.PrintTemplate({
      template: templates[template]
    })
  }

  toPdf(printData, name = 'pdf') {
    this.hiprintTemplate.toPdf(printData, name)
  }

  print(printData) {
    this.hiprintTemplate.print(
      printData,
      {},
      {
        callback: () => {
          console.log('浏览器打印窗口已打开')
        }
      }
    )
  }

  previewHtml(printData) {
    return this.hiprintTemplate.getHtml(printData)[0].outerHTML
  }
}

export default Print
