<template>
  <div id="app">
    <view-box>
      <group>
        <cell title="title" value="value"></cell>
      </group>
    </view-box>

  </div>
</template>

<script>
 /* document.ontouchstart= function() {
    return false
  }*/
import {ViewBox, Group, Cell } from 'vux'

export default {
  name: 'app',
  components: {
    ViewBox,
    Group,
    Cell
  }
}
</script>

<style lang="less">
  /*@import '~vux/src/styles/reset.less';*/
  /*html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    !*overflow: hidden;*!
  }*/
  /*body {
    margin:0;
  }
  html,body {
    width: 100%;
    height: 100%;
  }
  .weui-cells {
    margin-top: 0 !important;
  }*/
  /*#app {
    width: 100%;
    height: 100%;
    border: 1px solid red;
    box-sizing: border-box;
  }*/
</style>
