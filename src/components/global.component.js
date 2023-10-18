import ProTable from './ProTable/index.vue'
import ModalFooter from './ModalFooter/index.vue'

import { setupCalendar } from 'v-calendar'
import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'

export default {
  install(app) {
    app.component('ProTable', ProTable)
    app.component('ModalFooter', ModalFooter)

    app.use(vue3TreeOrg)
    app.use(setupCalendar, {})
  }
}
