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
    <div class="handle">
      <button type="button" @click="handleForward">前进</button>
      <button type="button" @click="handleBack">后退</button>
      <button type="button" @click="handleGo">Go前进几步</button>
      <button type="button" @click="handleRe">刷新</button>
      <button type="button" @click="handlePush">跳转到user</button>
    </div>
    <transition :name="name">
      <router-view class="center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    $route (to, from) {
//      console.log(to.meta.index)
//      console.log(from.meta.index)
      if (to.meta.index > from.meta.index) {
        this.name = 'left'
      } else {
        this.name = 'right'
      }
    }
  },
  methods: {
    handleForward () {
      console.log(this.$router)
      this.$router.forward()
    },
    handleBack () {
      this.$router.back()
    },
    handleGo () {
//      可以接受负值，负值表示后退，正值表示前进
      this.$router.go(2)
    },
    handleRe () {
      this.$router.go(0)
    },
    handlePush () {
      this.$router.push('/user')
    }
  },
  data () {
    return {
      index: '/',
      name: 'left'
    }
  }
}
</script>

