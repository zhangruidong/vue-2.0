import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: [
      {title:'吃饭',done:false},
      {title:'睡觉',done:true},
      {title:'打豆豆',done:false}
    ]
  },
  getters: {
    doneTaskList(state) {
      return state.taskList.filter( task => task.done )
    },
    UndoneTaskList(state) {
      return state.taskList.filter( task => !task.done )
    }
  },
  mutations: {
    changeList (state,payload) {
      // 变更状态
      state.taskList.forEach( item => {
        if(item = payload){
          item.done= !item.done
        }
      })
    },
    addTask(state,payload){
      state.taskList.push({title:payload,done:false})
    }
    
  },
  actions: {
    addTask(store,data){
      /*axios.post('http://localhost:9090/add',{
        title:data
      }).then(res => {
        store.commit('addTask',data)
      })*/
      return axios.post('http://localhost:9090/add',{
        title: data.title
      }).then( res => {
        store.commit('addTask',data)
        
        /*
        * action 会对返回值做处理
        *   如果返回值是非promise对象，会自动调用 Promise.resolve(res)  res是返回值
        *   如果返回值是promise对象，不做处理
        * */
        return res
        // return  Promise.resolve(res)
        
        /*Promise.resolve = function(data) {
          return new Promise(function(resolve) {
            resolved(data)
          })
        }*/
      })
    }
  }
})
