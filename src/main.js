import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store.js'; 
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
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
 
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
Vue.use(VueQuillEditor, Vuex/* { default global options } */)
// import './assets/js/custom';

Vue.config.productionTip = false
window.axios = axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
