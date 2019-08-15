<template>
  <div class="layout-main" :class="{'sidebar-collapse': isCollapse}">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="item in $route.matched" v-if="item.path !== '/' && item.path !== ''" :key="item.path">
        <span v-text="item.name"></span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse () {
      return this.sidebar.status
    }
  }
}
</script>

<style>
  .layout-main {padding:30px; margin:60px 0 0 200px;transition: all .3s ease-out;}
  .layout-main.sidebar-collapse {margin-left:56px;}
  .breadcrumb {margin-bottom: 30px}
  .breadcrumb-container {display: flex;}
  .breadcrumb-container > .title {flex:1;}
</style>
