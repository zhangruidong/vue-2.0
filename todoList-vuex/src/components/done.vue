<template>
  <div class="">
    <ul>
      <li v-for="item in doneTaskList">
        <el-checkbox :value="item.done" @change.native="changeHandle(item)">{{item.title}}</el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['doneTaskList'])
  },
  methods: {
    changeHandle(item){
      console.log(item);
      this.$store.commit('changeList',item)
    }
  }
}
</script>

<style>

</style>
