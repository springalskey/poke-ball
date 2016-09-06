<template>
  <nav>
    <el-menu mode="vertical" theme="dark" active-key="/" :router="true">
      <el-menu-item index="/"><i class="el-icon-message"></i>首页</el-menu-item>
      <el-submenu index="sub_1">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item index="/item/2-1">选项1</el-menu-item>
        <el-menu-item index="/item/2-2">选项2</el-menu-item>
        <el-menu-item index="/item/2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu index="sub_1">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item index="/item/3-1">选项1</el-menu-item>
        <el-menu-item index="/item/3-2">选项2</el-menu-item>
        <el-menu-item index="/item/3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </nav>
</template>

<style scoped lang="sass">
  nav {
  }
</style>
