import Vue from 'vue'
import VueRouter from 'vue-router'
import PaymentForm from '../components/PaymentForm.vue'
import History from '../components/History.vue'
import Success from '../components/Success.vue'
import store from '../store/index.js' 

Vue.use(VueRouter);

const ifSuccess = (to, from, next) => {
  const isSuccess = store.getters.isSuccess;
  if (isSuccess === false) {
    next('/payments');
    return;
  }
  next();
};

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/payments'
  },
  {
    path: '/lk',
    name: 'lk'
  },
  {
    path: '/options',
    name: 'options',
  },
  {
    path: '/exit',
    name: 'exit'
  },
  {
    path: '/payments',
    name: 'payments',
    component: PaymentForm
  },
  {
    path: '/history',
    name: 'history',
    component: History
  },
  {
    path: '/success',
    name: 'success',
    component: Success,
    beforeEnter: ifSuccess,
  }
];

const router = new VueRouter({
  base: '/',
  routes
})

export default router;