<template>
  <div>
    <el-menu class="second-level-menu" theme="dark" :router="true">
      <el-submenu index="{leafViews}">
        <template slot="title"><i class="el-icon-menu"></i>{leafViews}</template>
        <el-menu-item index="/{views}/{subViews}/{leafViews}" v-kk-permission="'{views}.{subViews}.{leafViews}'">{leafViews}</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view class="second-level-view"></router-view>
  </div>
</template>

<script>
  export default { name: '{upViews}' };
</script>
