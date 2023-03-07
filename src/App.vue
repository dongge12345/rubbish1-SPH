<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.footer"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header"
import Footer from "./components/Footer"
import TypeNav from "./components/TypeNav"
export default {
  name: 'App',
  components: {
      Header,
      Footer,
      TypeNav,
  },
  beforeMount(){
    this.$store.dispatch('changeCategoryList')
  },
  methods:{
    add(){
      this.$store.dispatch('countAdd1')
    }
  },
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
