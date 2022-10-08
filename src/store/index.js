import Vue from "vue";
import Vuex from "vuex";

import permitCreation from "./modules/permitCreation";
import permits from "./modules/permits";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  modules: {
    permitCreation,
    permits
  },
  plugins: debug ? [Vuex.createLogger()] : []
});
