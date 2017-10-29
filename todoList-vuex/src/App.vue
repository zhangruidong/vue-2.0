<template>
  <div id="app">
    <el-input v-model="input" placeholder="请输入内容" @keydown.native.enter="addNewTask"></el-input>
    <br>
    <br>
    <router-link to="/">undone</router-link>
    <router-link to="/done">done</router-link>
    <router-link to="/all">all</router-link>
    <br>
    <br>
    <br>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      input: ''
    }
  },
  methods: {
    addNewTask(){
      /*let obj1 = { a: 0 , b: { c: 0}};
      let obj2 = Object.assign({}, obj1);
      let obj3= JSON.parse(JSON.stringify(obj1))
      obj2.b.c=4
      console.log(obj1);
      console.log(obj2);
      console.log(obj3);*/
      /*let arr1= [1,2,[11,22]]
      let arr2= JSON.parse(JSON.stringify(arr1))
      arr1[2][1]=33;
      console.log(arr1);
      console.log(arr2);*/
      if(this.input !== ''){
//        this.$store.commit('addTask',this.input)
//        this.$store.dispatch('addTask',this.input)
        this.$store.dispatch('addTask',this.input).then(res => {
          console.log(res);
        })
        this.input = ""
      }
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
a {
  text-decoration: none;
  border: 1px solid saddlebrown;
  padding: 4px;
}
.router-link-exact-active {
  background-color: green;
  color: white;
  border: green;
}
ul {
  list-style: none;
}
</style>
