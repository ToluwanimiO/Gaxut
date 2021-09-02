import Vue from 'vue'
import App from './App.vue'
import './assets/main_styles.css';
import './assets/responsive.css';
import './assets/fontawesome/fontawesome-all.css';
// import './assets/js/custom';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
