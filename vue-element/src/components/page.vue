<template>
  <div>
    <el-button type="primary" icon="arrow-left"></el-button>
    <pagination :total="page"></pagination>
    <el-button type="primary" icon="arrow-right"></el-button>
  </div>
</template>

<script>

  export default {
    name: 'page',
    data () {
      return {
        page: [1,2,3,4,5]
      }
    },
    components: {
      props: ['total'],
      'pagination': {
        template: `
          <span>
            <el-button type="primary" v-for="item in total"></el-button>
          </span>
        `
      }
    }
  }
</script>

<style>

</style>
