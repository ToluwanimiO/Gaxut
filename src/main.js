import Vue from 'vue'
import App from './App.vue'
import './assets/main_styles.css';
import './assets/responsive.css';
import './assets/jobs.css';
import './assets/categories.css';
import './assets/login.css';
import './assets/user-dash.css';
import './assets/user-course-content.css';
import './assets/fontawesome/fontawesome-all.css';
import router from './router'
// import './assets/js/custom';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
