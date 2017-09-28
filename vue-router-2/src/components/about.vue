<template>
  <div>
    <h3>{{msg}}</h3>
    <hr>
    <ul>
      <router-link to="/about" exact>
        <a>study</a>
      </router-link>
      <router-link to="/about/work">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby">
        <a>hobby</a>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: 'about',
      data () {
        return {
          msg: '关于我'
        }
      }
    }
</script>

<style scoped>
  body {
    margin: 0;
  }
  div {
    border: 1px solid red;
    padding: 6px;
  }
</style>
