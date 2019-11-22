<template>
  <div id="app">
    <div class="container">
      <Sidebar> </Sidebar>
      <Main> </Main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Main from './components/Main.vue';
export default {
  name: "App",
  components: {
    Sidebar,
    Main
  }

}
</script>
<style lang="scss" scoped>
#app {
  width: 1000px;
}
.container {
  display: grid;
  height: 100%;
  @media screen and (min-width: 1000px) {
    grid-template-columns: 33% 67%;
  }
  @media screen and (max-width: 1000px) and (min-width: 768px) {
    grid-template-columns: 25% 75%;
    width: 768px;
  }
}

</style>