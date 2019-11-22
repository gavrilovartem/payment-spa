<template>
  <div>
    <div class="bar">
      <p class="bar-text">
        <router-link tag="p" to="/lk">Личный кабинет</router-link>
      </p>
    </div>
    <div class="bar">
      <p class="bar-text">
        <router-link tag="p" to="/payments">Платежи</router-link>
      </p>
    </div>
    <div class="bar">
      <p class="bar-text">
        <router-link tag="p" to="/history">История платежей</router-link>
      </p>
    </div>
    <div class="bar" id="options">
      <p class="bar-text">
        <router-link tag="p" to="/options">Настройки</router-link>
      </p>
    </div>
    <div class="bar" id="exit">
      <p class="bar-text">
        <router-link tag="p" to="/exit">Выйти</router-link>
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: "Sidebar"

}
</script>

<style lang="scss">

.bar {
  width: 100%;
  height: 75px;
  background-color: #1f2229;
  display: table;
  
}
.bar-text {
  color: white;
  display: table-cell;
  vertical-align: middle;
  font-family: Open Sans;
  font-weight: bold;
  font-size: 18px;
  padding-left: 2em;
}
.bar:hover {
  background-color: #2a2d37;
  .bar-text {
    color: #808592;
  }
}
.router-link-active {
  color: #808592;
  .bar-text {
    color: #808592;
  }
}
#options, #exit {
  background-color: #191c24;
}
</style>
