<template>
  <div>
    <p>Лови историю</p>
    <table class="table">
      <thead>
      <tr>
        <th>Дата платежа</th>
        <th>Номер счета</th>
        <th>Сумма</th>
      </tr>
    </thead>
      <tbody id="v-for-object">
        <tr v-for="value in object" v-bind:key="value.id">
          <td>{{value.date}}</td> <td>{{value.accountNumber}}</td> <td> {{ value.paymentSum }}</td>
        </tr>
    </tbody>
    </table>
  </div> 
</template>

<script>
import store from '../store/index.js';
export default {
  name: 'History',
  data() {
    return {
      object: []
    }
  },
  mounted: function() {
    let keys = Object.keys(localStorage);
    for(let key of keys) {
      if (key !== "loglevel:webpack-dev-server") {
        this.object.push(JSON.parse(localStorage.getItem(key)));
      }
    }   
  } 
}
</script>

<style lang="scss" scoped>
.table {
  border: 1px solid #000000;
}
</style>