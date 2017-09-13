/*
* 以数据为导向，驱动视图，尽可能不操作dom
* */

/*localstorage*/
var store={
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}
var list=store.fetch("zrd-todolist");

var vm= new Vue({
    el: ".main",
    data: {
        list,
        todo:"",
        editTodo:"",
        editTitle:"",
        hashState:"",
        visibleState:""
    },
    watch: {
        // 需要深度watcher
      list: {
          handler: function () {
              store.save("zrd-todolist",list)
          },
          deep:true
      }
    },
    computed: {
      uncheckedLength:function () {
          return this.list.filter((item)=>!item.isChecked).length;
      },
      filterList:function () {
          switch (this.hashState){
              case "all":
                  this.visibleState="all";
                  return list;
                  break;
              case "todo":
                  this.visibleState="todo";
                  return list.filter((item)=>!item.isChecked);
                  break;
              case "done":
                  this.visibleState="done";
                  return list.filter((item)=>item.isChecked);
                  break;
              default:
                  this.visibleState="all";
                  return list;
          }
      }
    },
    methods: {
        addTodo:function () {
            if(!this.todo==""){
                this.list.push({
                    title:this.todo,
                    isChecked:false
                });
                this.todo="";
            }
        },
        deleteTodo:function (index) {
            this.list.splice(index,1);
        },
        editTodoEnd:function (title) {
            if(!title==""){
                this.editTodo=""
            }
        },
        cancelEditTodo:function (item) {
            console.log(this.editTitle)
            item.title=this.editTitle;
            this.editTodo="";
        }
    },
    directives: {
        "focus": {
            update(el,binding){
                el.focus();
            }
        }
    }
});

watchHashChange();
function watchHashChange() {
    var hash=window.location.hash.slice(1);
    vm.hashState=hash;
}
window.onhashchange=watchHashChange;






