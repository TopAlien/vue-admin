import ProTable from '@/components/ProTable/index.vue'

import { setupCalendar } from 'v-calendar'
import vue3TreeOrg from 'vue3-tree-org'
import 'vue3-tree-org/lib/vue3-tree-org.css'

export default {
  install(app) {
    app.component('ProTable', ProTable)

    app.use(vue3TreeOrg)
    app.use(setupCalendar, {})
  }
}
