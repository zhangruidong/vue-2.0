<template>
  <div id="app">
    <nav>
      <!--<a href="/home">home</a>
      <a href="/about">about</a>
      <a href="/document">document</a>-->
      <ul>
        <router-link :to="index" exact tag="li" event="mousedown">
          home
          <span>~~</span>
        </router-link>
        <router-link to="/document" tag="li">document</router-link>
        <router-link to="/about" tag="li">about</router-link>
        <router-link to="/user" tag="li">user</router-link>
      </ul>
    </nav>
    <transition :name="name">
      <router-view class="center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
//      console.log(to.meta.index)
//      console.log(from.meta.index)
      if (to.meta.index > from.meta.index) {
        this.name = 'left'
      } else {
        this.name = 'right'
      }
    }
  },
  data () {
    return {
      index: '/',
      name: 'left'
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .center {
    position: absolute;
    width:100%;
    height: 100%;
    left: 0;
    top:100px;
  }
  img {
    width:200px;
  }
  ul {
    margin: 0;
    height: 30px;
    padding-left: 200px;
  }
  li {
    list-style: none;
    float: left;
    border: 1px solid grey;
    margin-right: 12px;
    padding: 4px;
    cursor: pointer;
  }
  .router-link-active {
    background-color: green;
    color: #fff;
  }
  a{
    text-decoration: none;
  }
  .left-enter {
    transform: translateX(-100%);
  }
  .left-enter-active {
    transition: 1s;
  }
  .left-enter-to {
    transform: translateX(0);
  }
  .left-leave {
    transform: translateX(0);
  }
  .left-leave-active {
    transition: 1s;
  }
  .left-leave-to {
    transform: translateX(100%);
  }

  .right-enter {
    transform: translateX(100%);
  }
  .right-enter-active {
    transition: 1s;
  }
  .right-enter-to {
    transform: translateX(0%);
  }
  .right-leave {
    transform: translateX(0%);
  }
  .right-leave-active {
    transition: 1s;
  }
  .right-leave-to {
    transform: translateX(-100%);
  }
</style>
