<template>
  <div class="layout-container">
    <LayoutHeader></LayoutHeader>
    <Sidebar></Sidebar>
    <LayoutMain></LayoutMain>
  </div>
</template>
<script>
import LayoutHeader from './layoutHeader'
import Sidebar from './sidebar'
import LayoutMain from './layoutMain'
export default {
  name: 'layout',
  components: {
    LayoutHeader,
    Sidebar,
    LayoutMain
  }
}
</script>

