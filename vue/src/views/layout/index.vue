<style scoped src="./layout.scss"></style>

<template>
  <div id="layout">
    <header-bar></header-bar>
    <div id="main">
      <side-menu id="left-side" class="nav-dark"></side-menu>
      <router-view id="content"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderBar from './headerBar.vue';
import SideMenu from './sideMenu.vue';
export default {
  created () {
  },
  data () {
    return {
    };
  },
  methods: {
    submit (data) {
    }
  },
  components: {
    HeaderBar,
    SideMenu
  }
};
</script>
