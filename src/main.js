import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'; // Import the MDI CSS
import "vue3-toastify/dist/index.css";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})



const app = createApp(App)


app.use(vuetify)
app.use(router)

app.mount('#app')

