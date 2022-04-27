import Vue from 'vue'
import VueCompositionAPI, { createApp, h } from '@vue/composition-api'

import App from './App.vue'


import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)



Vue.use(VueCompositionAPI)

const app = createApp({
  render: () => h(App)
})

app.mount('#app')
