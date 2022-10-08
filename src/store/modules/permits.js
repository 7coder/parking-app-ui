import { findPermitsByQuery } from "@/api/permit";

export default {
  namespaced: true,
  state: () => ({
    permits: []
  }),
  mutations: {
    SET_PERMITS(state, { permits }) {
      state.permits = permits;
    }
  },
  actions: {
    searchPermits({ commit }, searchQuery) {
      findPermitsByQuery(searchQuery).then((data) =>
        commit("SET_PERMITS", {
          permits: data
        })
      );
    }
  },
  getters: {
    getPermits(state) {
      return state.permits;
    }
  }
};
