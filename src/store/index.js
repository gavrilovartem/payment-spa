import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currDate: null,
    currPaymentSum: null,
    currCardholderName: null,
    currAccountNumber: null,
    isSuccess: false
  },
  mutations: {
    successPayment (state, payload) {
      const now = new Date();
      const rightMonth = Number(now.getMonth()) + 1;
      const nowString = now.getFullYear() + '-' +  rightMonth + '-' +  now.getDate();
      state.currDate = nowString;
      state.currPaymentSum = payload.paymentSum;
      state.currCardholderName = payload.cardholderName;
      state.currAccountNumber = payload.accountNumber;
      state.isSuccess = true;
      const newLSKey = localStorage.length + 1;
      const localStorageObject = JSON.stringify({
        date: nowString,
        cardholderName: payload.cardholderName,
        accountNumber: payload.accountNumber,
        paymentSum: payload.paymentSum
      });
      localStorage.setItem(newLSKey, localStorageObject);
    },
    resetSuccess (state) {
      state.isSuccess = false;
    }
  },
  getters: {
    isSuccess: state => {
      return state.isSuccess;
    },
  }
});
export default store;