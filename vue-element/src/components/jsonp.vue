<template>
  <div>
    <h2 @click="clickFn">hello jsonp</h2>
    <ul>
      <li v-for="item,index in list" :key="index">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  export default {
    name: 'search',
    data () {
      return {
        list: []
      }
    },
    methods: {
      clickFn(){
        let that = this
        jsonp('https://3g.163.com/touch/jsonp/sy/recommend/0-9.html?hasad=1&loc=&miss=12&refresh=A&offset=0&size=10',null,function(err, data) {
          if(err){
            console.log(err);
          }else {
            that.list=data.list;
          }
        })
      }
    }
  }
</script>

<style>

</style>
