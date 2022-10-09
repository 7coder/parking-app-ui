import { savePermit } from "@/api/permit";

const getCurrentDate = () =>
  new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10);

const getInitialStore = () => ({
  plateIssuerCountry: "",
  licensePlateNumber: "",
  startDate: getCurrentDate(),
  endDate: getCurrentDate(),
  ownerName: ""
});

export default {
  namespaced: true,
  state: () => getInitialStore(),
  mutations: {
    SET_FIELD(state, { name, value }) {
      state[name] = value;
    },
    RESET_STATE(state) {
      Object.assign(state, getInitialStore());
    }
  },
  actions: {
    setField({ commit }, field) {
      commit("SET_FIELD", field);
    },
    clearForm({ commit }) {
      commit("RESET_STATE");
    },
    saveForm({ state, commit }) {
      savePermit(state)
        .then(() => {
          commit("RESET_STATE");
          window.alert("Saved");
        })
        .catch((e) => window.alert(e.message));
    }
  },
  getters: {
    getPlateIssuerCountry(state) {
      return state.plateIssuerCountry;
    },
    getLicensePlateNumber(state) {
      return state.licensePlateNumber;
    },
    getStartDate(state) {
      return state.startDate;
    },
    getEndDate(state) {
      return state.endDate;
    },
    getOwnerName(state) {
      return state.ownerName;
    }
  }
};
