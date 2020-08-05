// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input:'',
    todos:[
      {name:'Learning HTML',completed:false},
      {name:'Learning CSS',completed:true},
      {name:'Learning JavaScript',completed:false}
    ],
    leftCount:2,
    allCompleted:false
  },
  
  inputChangeHandle:function(e){
    //console.log(111);
    //console.log(e.detail);
    this.setData({input:e.detail.value})
  },

  addTodoHandle:function(){
    if(!this.data.input) return
    
    let todos = this.data.todos;
    todos.push({
      name:this.data.input,
      completed:false
    })
    console.log('1')
    this.setData({
      todos:todos,
      input:'',
      leftCount: this.data.leftCount +1
    })
  },

  toggleTodos:function(e){
    //console.log(e.currentTarget);
    let item = this.data.todos[e.currentTarget.dataset.index]
    item.completed = !item.completed
    let leftCount = this.data.leftCount + (item.completed?-1:1)
    this.setData({todos:this.data.todos,leftCount:leftCount})
  },
  
  removeTodoHandle:function(e){
    let todos=this.data.todos
    let item = todos.splice(e.currentTarget.dataset.index,1)[0]
    let leftCount = this.data.leftCount - (item.completed?0:1)
    this.setData({todos:todos,leftCount:leftCount})
  },

  toggleAllHandle:function(){
    this.data.allCompleted = !this.data.allCompleted
    
    var todos = this.data.todos
    var that = this
    todos.forEach(function(item){
      //console.log(item);
      item.completed = that.data.allCompleted
    })
    let leftCount = this.data.allCompleted? 0 :this.data.todos.length
    this.setData({todos:todos,leftCount:leftCount})
  },

  clearHandle:function(){
    // let todos = []
    // this.data.forEach(function(item){
    //   if(!item.completed){
    //     todos.push(item)
    //   }
    // })
    let todos = this.data.todos.filter(function(item){
      return !item.completed
    })
    this.setData({todos:todos})
  }

})