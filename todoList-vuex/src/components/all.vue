<template>
  <div class="">
    <ul>
      <li v-for="item in taskList">
        <el-checkbox :value="item.done" @change.native="changeHandle(item)">{{item.title}}</el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {
    taskList(){
      return this.$store.state.taskList
    }
  },
  methods: {
    changeHandle(item){
      this.$store.commit('changeList',item)
    }
  }
}
</script>

<style>

</style>
