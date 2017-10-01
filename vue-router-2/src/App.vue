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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/'
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
</style>
