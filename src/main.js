import Vue from 'vue';
import uView from 'uview-ui';
import App from './App';
import Mock from './mock';

Vue.config.productionTip = false;

App.mpType = 'app';

Vue.use(uView);

const app = new Vue({
  ...App,
});
app.$mount();
