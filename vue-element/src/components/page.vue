<template>
  <div>
    <
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>

    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown type="success" @command="handleCommond" trigger="click" menuAlign="start" splitButton>
      下拉菜单
      <!--<span class="el-dropdown-link">
        下拉菜单<i class="el-icon-caret-bottom el-icon&#45;&#45;right"></i>
      </span>-->
      <!--<el-button>
        moreMenu
        <i class="el-icon&#45;&#45;right el-icon-caret-bottom"></i>
      </el-button>-->
      <!--<el-button>zzz</el-button>-->

      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="item,index in list" :command="index" :key="index">{{item}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        currentPage4:1,
        list: ['aaa','bbb','ccc','ddd']
      }
    },
    methods: {
      handleSizeChange(a){
        console.log("size:"+a);
      },
      handleCurrentChange(a){
        console.log("current:"+a);
      },
      handleCommond(a){
        console.log(a);
      }
    }
  }
</script>

<style>

</style>
