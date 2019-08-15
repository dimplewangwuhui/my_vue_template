<template>
  <div class="header">
    <div class="logo">
      <span class="logo_text"></span>
    </div>
    <div class="logout">
      <el-dropdown trigger="hover">
        <el-button type="text" class="logout_button"><svg-icon class="icon-user" iconClass="icon-user"></svg-icon><span class="username" v-text="username"></span><i class="el-icon-caret-bottom el-icon--right"></i></el-button>
        <el-dropdown-menu slot="dropdown" class="dropdown-user">
          <el-dropdown-item @click.native="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  import svgIcon from '@/components/svg-icon'
  import { mapGetters } from 'vuex'
  import {MessageBox} from 'element-ui'
  export default {
    components: { svgIcon, MessageBox},
    data () {
      return {
      }
    },
    methods: {
      logout () {
        MessageBox.confirm('确认退出？', '提示').then(_ => {
          this.$store.dispatch('Logout')
        }).catch(_ => {})
      },
      getUserInfo () {
        this.$store.dispatch('GetInfo').catch(_ => {})
      },
    },
    computed: {
      ...mapGetters([
        'user'
      ]),
      username () {
        return this.user && this.user.adAccount
      },
    },
    mounted () {
      this.getUserInfo()
    }
  }
</script>

<style>
  .header {width: 100%; height: 60px; line-height: 60px;background-color: #fff; border-bottom: 1px solid #DDE2EF; position: fixed; z-index: 999; margin-top: -60px}
  .logo {width: 201px; height: 60px; line-height: 60px; background-color: #FC796B; text-align: center; font-size: 20px; color: #fff; float: left}
  .logout {float: right; margin-right: 50px}
  .logout_button {height: 60px; border: 0}
  .logout_button:hover {border-color: #fff !important; background-color: #f0f0f0 !important;}
  .username {white-space:nowrap;max-width:10em;overflow:hidden;text-overflow:ellipsis;line-height:1.5;}
  .dropdown-user {white-space: nowrap; margin-top: -8px !important;}
</style>

