<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="">
            <img src="../assets/logo.png" style="width: 20px;" alt="brand">
          </a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="">首页</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">登陆</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <img src="../assets/user.jpg" style="width: 20px;" alt="">
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="">登出</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="jumbotron">
      <div class="container">
        <h1>我的项目</h1>
        <p>用 Vue.js + vue-router 创建单页应用，是非常简单的。</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">了解更多</a></p>
      </div>
    </div>
    <div class="jumbotron">
      <div class="container">
        <h1>我的文档</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'home',
      data () {
        return {
          msg: 'zrd'
        }
      }
    }
</script>

<style>

</style>
