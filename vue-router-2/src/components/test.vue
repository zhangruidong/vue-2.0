<template>
  <div class="hello">
    <h1 >{{msg}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'test',
    data () {
      return {
        msg: '这是首页~~~~~'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
    font-size: 40px;
  }
</style>
