<style lang="sass" src="./app.scss"></style>
<style scoped lang="sass">
  #main {
    display: flex;
  }

  #left-side {
    width: 180px;
    min-height: 600px;
    margin-top: -1px;
  }

  #content {
    flex: auto;
    padding: 20px;
  }
</style>

<template>
  <div id="app">
    <header-bar></header-bar>
    <div id="main">
      <div id="left-side">
        <side-menu></side-menu>
      </div>
      <div id="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBar from './layout/headerBar.vue';
import SideMenu from './layout/sideMenu.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  created () {
    console.log(this.$router.options.routes);
  },
  data () {
    return {
      myform: {},
      model: {
        name: '',
        email: ''
      }
    };
  },
  computed: mapGetters([
    'computedAdd',
    'submitData'
  ]),
  methods: {
    ...mapActions([
      'addToCart'
    ]),
    submit (data) {
      this.$store.dispatch('submit', data);
    }
  },
  components: {
    HeaderBar,
    SideMenu,
  }
};
</script>
