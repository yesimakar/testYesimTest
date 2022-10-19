import VuexpRouter from 'vuexp-router';
import VxpPlugin from 'vuexp/src/core/plugins/index';
import AttributeMixin from 'vuexp/src/mixins/AttributeMixin';
import GestureMixin from 'vuexp/src/core/mixins/GestureMixin';
import Vue from 'vue';
import router from './router';
import registerComponents from './componentRegisterer';
import './assets/styles/main.scss';

document.title = 'NUCAL | UI as a Service';
Vue.use(VxpPlugin);
Vue.use(VuexpRouter);
Vue.mixin(AttributeMixin);
Vue.mixin(GestureMixin);

Vue.config.productionTip = false;
Vue.config.devtools = true;
registerComponents(Vue);

const vue = new Vue({
  router,
  render: h => h('router-view'),
});

vue.$mount('#app');
