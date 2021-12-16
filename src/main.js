import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
 import vuetify from './plugins/vuetify'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKHj2oly8HrPhU_sMI0Uo-xyMIw3tjZQ0",
  authDomain: "fir-crud-6d2cf.firebaseapp.com",
  projectId: "fir-crud-6d2cf",
  storageBucket: "fir-crud-6d2cf.appspot.com",
  messagingSenderId: "1064209077979",
  appId: "1:1064209077979:web:da2d18b94c6653c3b5defe",
  measurementId: "G-X1DY2TWH2L"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
