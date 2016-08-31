<template>
  <div>
    <h1>Home</h1>
    <div>
      <el-button>Default</el-button>
      <el-button type="primary" icon="search">搜索</el-button>
    </div>
    <br>
    <el-tabs :active-key="activeKey">
      <el-tab-pane v-for="(item, index) in ['零', '一', '二', '三']" :label="'选卡' + item">选项卡{{item}}内容</el-tab-pane>
    </el-tabs>
    <div>{{activeKey}}</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeKey: '1'
      };
    },
  };
</script>
