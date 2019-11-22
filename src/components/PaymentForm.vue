<template>
  <div>
    <form @submit.prevent="submitForm()">
    <p class='info-text' id="big-margin">Информация по оплате:</p>
    <div class='text-line'>  
      <p class='info-text'>Номер счета:</p>
      <input class='req-text' v-model="accountNumber" @blur="$v.accountNumber.$touch()"/>
        <div class="error" v-if="$v.accountNumber.$error">
          <template v-if="!$v.accountNumber.numeric">
            Поле должно содержать только цифры
          </template>
          <template v-else>
            Обязательно для заполнения
          </template>
        </div>
      </div>
    <div class='text-line'>  
      <p class='info-text'>Сумма платежа:</p>
      <input class='req-text' v-model="paymentSum" @blur="$v.paymentSum.$touch()"/>
        <div class="error" v-if="$v.paymentSum.$error">
          <template v-if="!$v.paymentSum.numeric">
            Поле должно содержать только цифры
          </template>
          <template v-else>
            Обязательно для заполнения
          </template>
        </div>
      </div>

    <div class="main-part">
      <p id="main-header">Данные банковской карты</p>
      <div class="card" id="main-side">
        <p class="info-text" id="card-number-text">Номер карты</p>
        <input v-model="cardNumber1" class="card-number" id="first-numbers" maxlength="4" placeholder="0000" @blur="$v.cardNumber1.$touch()"/>
        <input v-model="cardNumber2" class="card-number" placeholder="0000" maxlength="4" @blur="$v.cardNumber2.$touch()"/>
        <input v-model="cardNumber3" class="card-number" placeholder="0000" maxlength="4" @blur="$v.cardNumber3.$touch()"/>
        <input v-model="cardNumber4" class="card-number" placeholder="0000" maxlength="4" @blur="$v.cardNumber4.$touch()"/>
        <div class="error" v-if="$v.cardNumber1.$error">
            <template v-if="!$v.cardNumber1.minLength">
              Длина должна быть {{ $v.cardNumber1.$params.minLength.min }} символа
            </template>
            <template v-else-if="!$v.cardNumber1.numeric">
              Поле 1 должно содержать только цифры
            </template>
            <template v-else>
              Обязательно для заполнения
            </template>
        </div>
        <div class="error" v-if="$v.cardNumber2.$error">
            <template v-if="!$v.cardNumber2.minLength">
              Длина должна быть {{ $v.cardNumber2.$params.minLength.min }} символа
            </template>
            <template v-else-if="!$v.cardNumber2.numeric">
              Поле 2 должно содержать только цифры
            </template>
            <template v-else>
              Обязательно для заполнения
            </template>
        </div>
        <div class="error" v-if="$v.cardNumber3.$error">
            <template v-if="!$v.cardNumber3.minLength">
              Длина должна быть {{ $v.cardNumber3.$params.minLength.min }} символа
            </template>
            <template v-else-if="!$v.cardNumber3.numeric">
              Поле 3 должно содержать только цифры
            </template>
            <template v-else>
              Обязательно для заполнения
            </template>
        </div>
        <div class="error" v-if="$v.cardNumber4.$error">
            <template v-if="!$v.cardNumber4.minLength">
              Длина должна быть {{ $v.cardNumber4.$params.minLength.min }} символа
            </template>
            <template v-else-if="!$v.cardNumber4.numeric">
              Поле 4 должно содержать только цифры
            </template>
            <template v-else>
              Обязательно для заполнения
            </template>
        </div>
        <p class="info-text" id="select-text">Cрок действия</p>
        <select v-model="month" id="month-select" @blur="$v.month.$touch()">
          <option>01</option>
          <option>02</option>
          <option>03</option>
          <option>04</option>
          <option>05</option>
          <option>06</option>
          <option>07</option>
          <option>08</option>
          <option>09</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </select>
        <select v-model="year" id="year-select" @blur="$v.year.$touch()">
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
        </select>
        <div class="error" v-if="$v.month.$error">
          Поле обязательно
        </div>
        <div class="error" v-if="$v.year.$error">
          Поле обязательно
        </div>
        <input v-model="cardholderName" class="cardholder" placeholder="Держатель карты" @blur="$v.cardholderName.$touch()"/>
        <div class="error" v-if="$v.cardholderName.$error">
          <template v-if="!$v.cardholderName.minLength">
            Длина имени должна быть не меньше {{ $v.cardholderName.$params.minLength.min }} символов
          </template>
          <template v-else-if="!$v.cardholderName.alpha">
            Имя должно содержать только латинские буквы
          </template>
          <template v-else>
            Имя обязательно для заполнения
          </template>
        </div>
      </div>
      <div class="card" id="reverse-side">
        <div class="magnet-line">
        </div>
        <p id="cvv-text">Код CVV2 / CVC2</p>
        <input v-model="cvv" class="cvv" placeholder="000" maxlength="3" type="password" @blur="$v.cvv.$touch()"/>
        <div class="error" id="cvv-error" v-if="$v.cvv.$error">
            <template v-if="!$v.cvv.minLength">
              Длина должна быть {{ $v.cvv.$params.minLength.min }} символа
            </template>
            <template v-else-if="!$v.cvv.numeric">
              Поле должно содержать только цифры
            </template>
        </div>
      </div>
      <button id="button" type="submit" value="Оплатить" :disabled="$v.$invalid"/>
    </div>
    </form>
    <div class="footer">
      <p class="footer-text" id="footer-text-first">
        Исходя из астатической системы координат Булгакова, соединение стабильно. Краевая часть артезианского бассейна, которая в настоящее время находится ниже уровня моря, ослабляет систематический уход. Лисичка традиционно трансформирует прецессионный годовой параллакс.
     </p>
     <p class="footer-text">
       Выклинивание абсолютно аккумулирует твердый pадиотелескоп Максвелла
     </p>
     <p class="footer-text">
     Алмаз слагает горст. Делювий длительно колеблет лазерный подвижный объект.
     </p>
    <p class="footer-text">
      Устойчивость, например, параллельна. Аргумент перигелия определяет боксит. Проекция вертикально дает уходящий диабаз. Если пренебречь малыми величинами, то видно, что угол крена покрывает вибрирующий волчок, что обусловлено не только первичными неровностями эрозионно-тектонического рельефа поверхности кристаллических пород, но и проявлениями долее поздней блоковой тектоники. Засветка неба заставляет иначе взглянуть на то, что такое волчок.
    </p>
    </div>
  </div> 
</template>

<script>
import { helpers, required, minLength, maxLength, numeric } from 'vuelidate/lib/validators';
import store from '../store/index.js';
import router from '../router/index.js';
const alpha = helpers.regex('alpha', /^[a-zA-Z\s]{4,}$/);
export default {
  name: 'PaymentForm',
  data() {
    return {
    accountNumber: '',
    paymentSum: null,
    cardNumber1: null,
    cardNumber2: null,
    cardNumber3: null,
    cardNumber4: null,
      cardholderName: null,
      month: null,
      year: null,
      cvv: null
    }
  },
  methods: {
    submitForm: function (event) {
      store.commit('successPayment', {
        accountNumber: this.accountNumber,
        paymentSum: this.paymentSum,
        cardholderName: this.cardholderName
      });
      router.push({ name: 'success'});
    }
  },
  validations: {
    accountNumber: {
      required
    },
    paymentSum: {
      numeric,
      required
    },
    cardNumber1: {
      numeric,
      required,
      minLength: minLength(4),
      maxLength: maxLength(4),
    },
    cardNumber2: {
      numeric,
      required,
      minLength: minLength(4),
      maxLength: maxLength(4),
    },
    cardNumber3: {
      numeric,
      required,
      minLength: minLength(4),
      maxLength: maxLength(4),
    },
    cardNumber4: {
      numeric,
      required,
      minLength: minLength(4),
      maxLength: maxLength(4),
    },

    cardholderName: {
      required,
      minLength: minLength(4),
      alpha
    },
    month: {
      required
    },
    year: {
      required
    },
    cvv: {
      numeric,
      required,
      minLength: minLength(3),
      maxLength: maxLength(3),
    },
    accountNumber: {
      required,
      numeric
    },
    paymentSum: {
      required,
      numeric
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../assets/main.scss';
div {
  background-color: #f7f8f8;
}
input:required {
  content: "Поле обязательно для заполнения"
}
.cardholder {
  margin-top: 12px;
  margin-left: 15px;
}
.cvv {
  width: 138px;
  height: 42px;
  margin-left: 217px;
  border: 1px solid #e4e9ee;
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
}
.error {
  color: red;
  font-size: 12px;
}
.info-text {
  font-family: Arial;
  font-size: 16px;
  color: #8494ab;
  margin-left: 29px;
  display: inline-block;
  margin-bottom: 5px;
  margin-top: 4px;
}
.req-text {
  height: 22px;
  font-size: 13px;
  font-family: Arial;
  color: #373c43;
}
.card {
  width: 350px;
  height: 236px;
  border: 1px solid #e4e9ee;
  background-color: #f7f8f8;
  border-radius: 7px;
}
.card-number {
  width: 65px;
  height: 42px;
  border: 1px solid #e4e9ee;
  font-size: 20px;
}
.cardholder {
  width: 300px;
  height: 42px;
  border: 1px solid #e4e9ee;
}
.main-part {
  margin-left: 29px;
  z-index: -1;
}
.magnet-line {
  width: 289px;
  height: 42px;
  background-color: #e4e9ee;
  margin-top: 26px;
  margin-left: 83px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    width: 350px;
  }
}
#big-margin {
  margin-bottom: 2em;
  margin-top: 2.5em;
}
#button {
  position: relative;
  top: -200px;
  width: 133px;
  height: 40px;
  border-radius: 20px;
  background-color: #005abf;
  background-image: linear-gradient(to top, rgba(37, 36, 35, 0.18) 0%, rgba(37, 36, 35, 0) 100%);
  color: #ffffff;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  @media screen and (max-width: 768px) {
    top: 0px;
  }
}

#card-number-text {
  margin-left: 1em;
  margin-top: 25px;
  display: block;
}
#cvv-error {
  margin-left:200px;
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
}
#cvv-text {
  margin-left: 200px;
  font-family: Arial;
  color: #8494ab;
  @media screen and (max-width: 768px) {
    margin-left: 150px;
  }
}
#first-numbers {
  margin-left: 15px;
}
#main-header {
  font-size: 22px;
  font-family: Open Sans;
  color: #383d43;
  font-weight: 700;
}
#main-side {
  z-index: 1;
  position: relative;
}
#month-select {
  margin-left: 15px;
  border: 1px solid #e4e9ee;
  background-color: #ffffff;
  height: 42px;
  width: 70px;
}
#reverse-side {
  position: relative;
  width: 370px;
  top: -216px;
  left: 214px;
  z-index: 0;
  @media screen and (max-width: 1000px) and (min-width: 768px) {
    left: 164px;
  }
  @media screen and (max-width: 768px) {
    left: 0px;
    top: 0px;
    width: 350px;
  }
}
#select-text {
  margin-left: 15px;
  margin-top: 17px;
  margin-bottom: 5px;
  display: block;
}
#year-select {
  border: 1px solid #e4e9ee;
  background-color: #ffffff;
  height: 42px;
  width: 86px;
}
.footer {
  width: 100%;
  background-color: #373c43;
  height: 400px;
  position: relative;
  top: -200px;
  @media screen and (max-width: 768px) {
    top: 0px;
  }
  .footer-text {
    color: #89909d;
    font-size: 12px;
    font-family: Arial;
    line-height: 18px;
    margin-left: 2.5em;
    margin-right: 3em;
    
  }
  #footer-text-first {
    padding-top: 2em;
  }
}
</style>