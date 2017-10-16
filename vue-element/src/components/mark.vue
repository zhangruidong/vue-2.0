<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">默认按钮</el-button>
    <el-button type="text">默认按钮</el-button>
    <hr>
    <el-button :disabled="true">默认按钮</el-button>
    <el-button :plain="true" :disabled="true">默认按钮</el-button>
    <el-button type="primary">默认按钮</el-button>
    <el-button type="text">默认按钮</el-button>
    <hr>
    <el-button type="success">success</el-button>
    <el-button type="warning">warning</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="info">info</el-button>
    <hr>
    <hr>
    <h2>hover</h2>
    <el-button :plain="true" type="success">success</el-button>
    <el-button :plain="true" type="warning">warning</el-button>
    <el-button :plain="true" type="danger">danger</el-button>
    <el-button :plain="true" type="info">info</el-button>
    <hr>
    <h4>图标按钮</h4>
    <el-button type="primary" icon="edit">edit</el-button>
    <el-button type="primary" icon="share">edit</el-button>
    <el-button type="primary" icon="delete">edit</el-button>
    <el-button type="primary" icon="search">edit</el-button>
    <el-button type="primary">upload<i class="el-icon el-icon-upload el-icon--right"></i></el-button>
    <hr>
    <h4>按钮组</h4>
    <el-button-group>
      <el-button type="primary" :loading="true"><i class="el-iocn el-icon-arrow-left el-icon--left"></i>上一页</el-button>
      <el-button type="primary">下一页<i class="el-iocn el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>

    <hr>
    <my-component></my-component>
  </div>
</template>
<!--
  组件：
    props：静态数据，一般用来初始化组件内部数据的，如果我们要修改数据，最好存在data中
    data：动态数据   组件中的data必须是一个函数
      注意： props中的数据名不能和data中数据名不能相同
-->
<script>

  export default {
    name: 'mark',
    data () {
      return {}
    },
    components: {
      'my-component': {
        template: `
          <ul>
            <li>111</li>
            <li>111</li>
            <li>111</li>
          </ul>
        `
      }
    }
  }
</script>

<style>

</style>
