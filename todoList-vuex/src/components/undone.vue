<template>
  <div class="">
    <ul>
      <li v-for="item in UndoneTaskList">
        <el-checkbox :value="item.done" @change="changeHandle(item)">{{item.title}}</el-checkbox>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['UndoneTaskList'])
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
