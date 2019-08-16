<template>
  <div class="sidebar" style="overflow-x: hidden;" :class="{'sidebar--collapse': isCollapse}">
    <div style="overflow:auto;width:200px;height:100%;">
    <!--<a @click.stop="collapsed()" class="toggle-menu">-->
      <!--<i class="el-icon-s-fold" v-if="this.sidebar.status === false"></i>-->
      <!--<i v-else class="el-icon-s-unfold"></i>-->
    <!--</a>-->
    <el-tabs>
      <el-tab-pane>
        <span slot="label"><i class="glyphicon glyphicon-menu-hamburger"></i></span>
        <el-menu type="expand" :default-active="currentView" :collapse="isCollapse" @open="handleOpen" @close="handleClose" unique-opened router>
          <template v-for="(m,i) in routes" v-if="!m.hidden">
            <el-menu-item :index="m.path+''+i" v-if="!!m.path && !!m.name && !m.children" :key="i">
              <!--<i class="icon-route"><svg-icon :iconClass="m.iconCls"></svg-icon></i>-->
              <span slot="title" class="title" v-text="m.name"></span>
            </el-menu-item>
            <template v-if="m.children && m.children.length > 0">
              <template v-if="!m.name">
                <template v-for="(n,j) in m.children" v-if="!n.hidden">
                  <el-menu-item :index="n.path" v-if="!!n.path && !!n.name && !n.children" :key="j">
                    <!--<i class="icon-route"><svg-icon :iconClass="n.iconCls"></svg-icon></i>-->
                    <span slot="title" class="title" v-text="n.name"></span>
                  </el-menu-item>
                  <template v-if="n.children && n.children.length > 0">
                    <template v-if="!n.name">
                      <template v-for="(o,k) in n.children" v-if="!o.hidden">
                        <el-menu-item :index="o.path" v-if="!!o.path && !!o.name && !o.children" :key="k">
                          <!--<i class="icon-route"><svg-icon :iconClass="o.iconCls"></svg-icon></i>-->
                          <span slot="title" class="title" v-text="o.name"></span>
                        </el-menu-item>
                        <template v-if="!!o.children && o.children.length>0">
                          <template v-if="!o.name">
                            <template v-for="(p,l) in o.children" v-if="!p.hidden">
                              <el-menu-item :index="p.path" v-if="!!p.path && !!p.name && !p.children" :key="l">
                                <!--<i class="icon-route"><svg-icon :iconClass="p.iconCls"></svg-icon></i>-->
                                <span slot="title" class="title" v-text="p.name"></span>
                              </el-menu-item>
                            </template>
                          </template>
                          <el-submenu :index="o.name+''+k" v-if="!!o.name"  :key="k">
                            <!--<i slot="icon" class="icon-route"><svg-icon :iconClass="o.iconCls"></svg-icon></i>-->
                            <span slot="title" class="title" v-text="o.name"></span>
                            <template v-for="(p,l) in o.children" v-if="!p.hidden">
                              <el-menu-item :index="p.path" v-if="!!p.path && !!p.name && !p.children" :key="l">
                                <!--<i class="icon-route"><svg-icon :iconClass="p.iconCls"></svg-icon></i>-->
                                <span slot="title" class="title" v-text="p.name"></span>
                              </el-menu-item>
                            </template>
                          </el-submenu>
                        </template>
                      </template>
                    </template>
                    <el-submenu :index="n.name+''+i" v-if="!!n.name" :key="j">
                      <!--<i slot="icon" class="icon-route"><svg-icon :iconClass="n.iconCls"></svg-icon></i>-->
                      <span slot="title" class="title" v-text="n.name"></span>
                      <template v-for="(o,k) in n.children" v-if="!o.hidden">
                        <el-menu-item :index="o.path" v-if="!!o.path && !!o.name && !o.children"  :key="k">
                          <!--<i class="icon-route"><svg-icon :iconClass="o.iconCls"></svg-icon></i>-->
                          <span slot="title" class="title" v-text="o.name"></span>
                        </el-menu-item>
                        <template v-if="!!o.children && o.children.length>0">
                          <template v-if="!o.name">
                            <template v-for="(p,l) in o.children" v-if="!p.hidden">
                              <el-menu-item :index="p.path" v-if="!!p.path && !!p.name && !p.children"  :key="l">
                                <!--<i class="icon-route"><svg-icon :iconClass="p.iconCls"></svg-icon></i>-->
                                <span slot="title" class="title" v-text="p.name"></span>
                              </el-menu-item>
                            </template>
                          </template>
                          <el-submenu :index="o.name+''+k" v-if="!!o.name"  :key="k">
                            <!--<i slot="icon" class="icon-route"><svg-icon :iconClass="o.iconCls"></svg-icon></i>-->
                            <span slot="title" class="title" v-text="o.name"></span>
                            <template v-for="(p,l) in o.children" v-if="!p.hidden">
                              <el-menu-item :index="p.path" v-if="!!p.path && !!p.name && !p.children"  :key="l">
                                <!--<i class="icon-route"><svg-icon :iconClass="p.iconCls"></svg-icon></i>-->
                                <span slot="title" class="title" v-text="p.name"></span>
                              </el-menu-item>
                            </template>
                          </el-submenu>
                        </template>
                      </template>
                    </el-submenu>
                  </template>
                </template>
              </template>
              <el-submenu :index="m.name+''+i" v-if="!!m.name"  :key="i">
                <!--<i slot="icon" class="icon-route"><svg-icon :iconClass="m.iconCls"></svg-icon></i>-->
                <span slot="title" class="title" v-text="m.name"></span>
                <template v-for="(n,j) in m.children" v-if="!n.hidden">
                  <el-menu-item :index="n.path" v-if="!!n.path && !!n.name && !n.children"  :key="j">
                    <!--<i class="icon-route"><svg-icon :iconClass="n.iconCls"></svg-icon></i>-->
                    <span slot="title" class="title" v-text="n.name"></span>
                  </el-menu-item>
                  <template v-if="!!n.children && n.children.length>0">
                    <template v-if="!n.name">
                      <template v-for="(o,k) in n.children" v-if="!o.hidden">
                        <el-menu-item :index="o.path" v-if="!!o.path && !!o.name && !o.children"  :key="k">
                          <i class="icon-route"><svg-icon :iconClass="o.iconCls"></svg-icon></i>
                          <span slot="title" class="title" v-text="o.name"></span>
                        </el-menu-item>
                      </template>
                    </template>
                    <el-submenu :index="n.name+''+i" v-if="!!n.name"  :key="j">
                      <!--<i slot="icon" class="icon-route"><svg-icon :iconClass="n.iconCls"></svg-icon></i>-->
                      <span slot="title" class="title" v-text="n.name"></span>
                      <template v-for="(o,k) in n.children" v-if="!o.hidden">
                        <el-menu-item :index="o.path" v-if="!!o.path && !!o.name && !o.children"  :key="k">
                          <!--<i class="icon-route"><svg-icon :iconClass="o.iconCls"></svg-icon></i>-->
                          <span slot="title" class="title" v-text="o.name"></span>
                        </el-menu-item>
                      </template>
                    </el-submenu>
                  </template>
                </template>
              </el-submenu>
            </template>
          </template>
        </el-menu>

      </el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ElMenu from '@/components/menu/src/menu'
import ElSubmenu from '@/components/menu/src/submenu'
import ElMenuItem from '@/components/menu/src/menu-item'
import svgIcon from '@/components/svg-icon'
export default {
  components: { ElMenu, ElSubmenu, ElMenuItem, svgIcon },
  data () {
    return {
    }
  },
  created () {

  },
  methods: {
    handleOpen () {
      // asdf
    },
    handleClose () {
      // asdf
    },
    collapsed () {
      this.$store.dispatch('ToggleSideBar')
    },
    findRouteName (list, name) {
      if (!list) return
      if (list.name === name) return list
      for (let i in list) {
        if (list[i].name === name) return list[i]
        let r = this.findRouteName(list[i].children, name)
        if (!!r && r.name === name) return r
      }
    }
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    isCollapse () {
      console.log('导航栏状态:', this.sidebar.status);
      return this.sidebar.status
    },
    routes () {
      console.log('........', this.$router.options.routes)
      return this.$router.options.routes
    },
    currentView () {
      let n = this.$route.matched.length - 1
      let m = null
      let path = null
      for (let i = n; i >= 0; i--) {
        if (!this.$route.matched[i].name) continue
        let t = this.findRouteName(this.routes, this.$route.matched[i].name)
        if (!!t && !!t.name && !!t.path && !t.children && !t.hidden) {
          m = t
          break
        }
      }
      path = !!m && m.meta.path || this.$route.meta.path
      console.log(1111, path, this.$route)
      return path
    }
  }
}
</script>

<style>
.sidebar, .sidebar .el-menu{width:200px;cursor: pointer;}
.sidebar {background:#272930;transition: all .3s ease-out;position:fixed;top:60px;left:0;bottom:0;z-index:1010;overflow:hidden;font-size:14px;border-right: 1px solid #272930}
.sidebar.sidebar--collapse {width:56px;}
.sidebar .toggle-menu {display:block;height:50px;line-height:50px;width:100%;transition: all .3s ease-out;text-align:left;cursor:pointer;border-bottom:1px solid #fff;color:#fff;}
.sidebar .toggle-menu > i {width:52px;text-align:center;}
.sidebar .title {color:#fff;font-size:14px;}
.sidebar .is-active > .title,.sidebar .is-active .el-submenu__title > .title {color:#fff;}
.sidebar .el-tabs {box-shadow:none;}
.sidebar .el-tabs__header {display:none;}
.sidebar .el-tabs__content {padding:0;margin:0;overflow:hidden;}
.sidebar .el-menu-item:hover,.sidebar .el-submenu .el-menu-item:hover {background-color:#17191E;}
.sidebar .el-submenu .el-menu-item:hover, .sidebar .el-submenu__title:hover {background-color:#17191E;}
.sidebar .el-menu-item *,.sidebar .el-submenu__title * {vertical-align:initial;}
.sidebar .el-menu-item, .sidebar .el-submenu__title {height:50px;line-height:50px;padding:0;}
.sidebar .el-menu-item.is-active, .sidebar .el-submenu.is-active .el-submenu__title {color:#fff;background-color:#17191E;}
.sidebar .el-menu {background-color:transparent;border-radius:0;transition: none;border:none;}
.sidebar .el-menu.el-menu--collapse {width:56px;transition: none;}
.sidebar .el-menu li > ul {background-color:#272930;}
.sidebar .el-menu--collapse .el-submenu .el-menu {position:relative;margin:0;top:0;left:0;border-radius:none;}
.sidebar .icon-route {width:52px;height:50px;color:#828899;text-align:center;line-height:50px;margin:0;padding:0;position:absolute;display:flex;align-items:center;justify-content:center;visibility:visible;}
.sidebar .el-menu .el-menu-item.is-active .icon-route, .sidebar .el-submenu.is-active .el-submenu__title .icon-route {color:#FFF;}
.sidebar .el-submenu .el-menu-item.is-active .icon-route {color:#17191E;}
.sidebar .el-menu-item .title, .sidebar .el-submenu__title .title {margin:0 20px;}
.sidebar .el-submenu .el-menu-item {height:42px;min-width:auto;line-height:40px;}
.sidebar .el-submenu .el-menu-item.is-active {background-color:#F0F0F0;color:#17191E;padding:0;transition: all .3s ease-out;border-right: 2px solid #272930;}
.sidebar .el-submenu .el-menu-item .title {font-size:12px;}
.sidebar .el-submenu .el-menu-item .icon-route {height:42px; line-height:42px;}
.sidebar .el-menu-item > .el-tooltip {position:relative;height:100%;width:56px;}
.sidebar .el-submenu .el-menu-item.is-active .title {color:inherit;}
.sidebar .el-submenu .el-menu {border:none;}
.sidebar .el-menu-item .icon-route > span, .sidebar .el-submenu__title .icon-route span {visibility:visible;display:inline-flex;width:auto;height:auto;}
.sidebar ::-webkit-scrollbar{display:none;}
</style>
