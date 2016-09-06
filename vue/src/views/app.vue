<style lang="sass" src="./app.scss"></style>

<template>
  <div id="app">
    <!--根路由-->
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  created () {
    // console.log(this.$router.options.routes);
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
  }
};
</script>
