import 'vuetify/dist/vuetify.css';
import Vuetify from 'vuetify';

export function registerVuetify(Vue, opts = {}) {
  Vue.use(Vuetify);
  return new Vuetify(opts);
}
