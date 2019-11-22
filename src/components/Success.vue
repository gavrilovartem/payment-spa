<template>
  <div class="success">
    <p>Ваша операция успешно выполнена, уважаемый {{ cardholderName }}</p>
    <div>
      <p> Вы заплатили {{paymentSum}} рублей.</p>
      
      <p> На счет с номером {{accountNumber}}</p>
      <p> Дата платежа: {{currDate}}</p>
    </div>
  </div> 
</template>

<script>
import store from '../store/index.js';
export default {
  name: 'Success',
  data() {
    return {
      paymentSum: store.state.currPaymentSum,
      currDate: store.state.currDate,
      accountNumber: store.state.currAccountNumber,
      cardholderName: store.state.currCardholderName
    }
  },
  mounted: function() {
    store.commit('resetSuccess');
  }
}
</script>

<style lang="scss" scoped>
p {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.success {
  background-color: #f7f8f8;
  height: 373px;
  border: 1px solid #e4e9ee;
}
</style>