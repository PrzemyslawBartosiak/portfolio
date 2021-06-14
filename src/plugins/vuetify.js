import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#7510F7',
        secondary: '#'
      }
    }
  }
})
