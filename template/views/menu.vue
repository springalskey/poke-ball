<template>
  <div>
    <el-menu class="second-level-menu" theme="dark" :router="true">
    </el-menu>
    <router-view class="second-level-view"></router-view>
  </div>
</template>

<script>
  export default { name: '{upViews}' };
</script>
