<template>
  <li class="el-menu-item"
    :style="paddingStyle"
    @click="handleClick"
    :class="{
      'is-active': active,
      'is-disabled': disabled
    }">
    <el-tooltip
      v-if="rootMenu.collapse"
      effect="dark"
      placement="right">
      <div slot="content"><slot name="title"></slot></div>
      <div>
        <slot></slot>
      </div>
    </el-tooltip>
    <template v-else>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>
<script>
/* eslint-disable*/
  import Menu from './menu-mixin';
  import Emitter from 'element-ui/src/mixins/emitter';

  export default {
    name: 'ElMenuItem',

    componentName: 'ElMenuItem',

    mixins: [Menu, Emitter],

    props: {
      index: {
        type: String,
        required: true
      },
      route: {
        type: Object,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    },
    computed: {
      active() {
        return this.index === this.rootMenu.activeIndex;
      }
    },
    methods: {
      handleClick() {
        this.dispatch('ElMenu', 'item-click', this);
        this.$emit('click', this);
      }
    },
    created() {
      this.parentMenu.addItem(this);
      this.rootMenu.addItem(this);
    },
    beforeDestroy() {
      this.parentMenu.removeItem(this);
      this.rootMenu.removeItem(this);
    }
  };
</script>
