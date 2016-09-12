<style lang="sass" src="scss/app.scss"></style>

<template>
  <div id="app">
    <!--根路由-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created () {
    // console.log(this.$router.options.routes);
  }
};
</script>
