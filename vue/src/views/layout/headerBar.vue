<style scoped lang="sass">
  .nav {
    display: flex;
    align-items: stretch;
  }
  h3 {
    color: #fff;
    margin-left: 34px;
  }
  .nav-menu {
    margin-left: 40px;
    display: flex;
    align-items: center;
  }
</style>

<template>
  <div class="nav nav-dark">
    <h3>中后台系统</h3>
    <div class="nav-menu">
      <el-menu theme="dark" active-index="1">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-menu-item index="2">我的工作台</el-menu-item>
        <el-menu-item index="3">订单管理</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
