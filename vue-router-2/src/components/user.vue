<template>
  <div>
    <h3>{{msg}}</h3>
    <ul>
      <router-link v-for="(item,index) in items" key="index" :to="{path: '/user/'+item.tip+'/'+item.id,query: {info: 'follow'}}" tag="li">
        {{item.userName}}
      </router-link>
    </ul>
    <content v-if="userInfo.userName">
      <p>姓名：{{userInfo.userName}}</p>
      <p>性别：{{userInfo.sex}}</p>
      <p>爱好：{{userInfo.hobby}}</p>
    </content>
    <ul v-if="userInfo.userName">
      <router-link tag="li" :to="{query: {info: 'follow'}}" exact>他的收藏</router-link>
      <router-link tag="li" to="?info=share" exact>他的分享</router-link>
    </ul>
    <hr>
    <div v-if="userInfo.userName">{{$route.query}}</div>
  </div>
</template>

<script>
    let data = [
      {
        id: 1,
        tip: 'vip',
        userName: 'zrd1',
        sex: '男',
        hobby: '写代码'
      },
      {
        id: 2,
        tip: 'vip',
        userName: 'zrd2',
        sex: '男',
        hobby: '唱歌'
      },
      {
        id: 3,
        tip: 'common',
        userName: 'zrd3',
        sex: '男',
        hobby: '读书'
      }
    ]
    export default {
      name: 'user',
      data () {
        return {
          msg: '这是用户中心',
          items: data,
          userInfo: {}
        }
      },
      methods: {
        getInfo () {
          let id = Number(this.$route.params.id)
          if (id) {
            this.userInfo = this.items.filter((item) => {
              return item.id === id
            })[0]
          } else {
            this.userInfo = {}
          }
        }
      },
      watch: {
        $route () {
          this.getInfo()
        }
      },
      created () {
        this.getInfo()
      }
    }
</script>

<style scoped>
  li {
    display: inline-block;
    float: none;
  }
</style>
