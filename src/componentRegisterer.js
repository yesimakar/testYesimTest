import VxpCoreRegister from 'nucal-widget-lib/src/plugins/VxpCoreRegister';
import VxpFontIcon from 'vuexp-fonticon';
import widgetComponents from 'nucal-widget-lib/src/components';

export default function registerComponents(Vue) {
  /**
   * Globally register of each component on nucal-widget-lib
   */
  for (const prop in widgetComponents) {
    const component = widgetComponents[prop];
    Vue.component(prop, component);
  }

  const FontIcons = {
    paths: {
      fa: './assets/styles/icomoon.css',
    },
  };

  Vue.use(VxpFontIcon, FontIcons);
  Vue.use(VxpCoreRegister);
}
