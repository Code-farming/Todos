// pages/todos/todos.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 文本框的数锯模型
    search: '',
    todos: [{
        name: 'Learning HTML',
        completed: false
      },
      {
        name: 'Learning CSS',
        completed: true
      },
      {
        name: 'Learning JS',
        completed: false
      }
    ],
    leftCount: 0,
    allCompleted: false
  },

  /**
   * 获取输入框的文本值
   */
  inputChangeHandle: function(e) {
    this.setData({
      search: e.detail.value
    })
  },
  /**
   * 添加 Todo事件 函数
   */
  addTodoHandle: function() {
    if (!this.data.search) return
    var todos = this.data.todos
    todos.push({
      name: this.data.search,
      completed: false
    });
    // 必须显示的进行数锯的更新
    this.setData({
      todos: todos,
      search: '',
      leftCount: this.data.leftCount + 1
    })
  },

  /**
   * 切换当前任务的完成状态
   */
  toggleTodoHandle: function(e) {
    // 
    var item = this.data.todos[e.currentTarget.dataset.index];
    item.completed = !item.completed;
    var leftCount = this.data.leftCount + (item.completed ? -1 : 1);
    this.setData({
      todos: this.data.todos,
      leftCount: leftCount
    })
  },

  /**
   * 移除当前任务
   */
  removeTodosHandle: function(e) {
    var todos = this.data.todos;
    var item = this.data.todos[e.currentTarget.dataset.index];
    var leftCount = this.data.leftCount + (item.completed ? 0 : -1)
    todos.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      todos: todos,
      leftCount: leftCount
    })
  },

  /**
   * 全选事件
   */
  toggleAllHandle: function() {
    this.data.allCompleted = !this.data.allCompleted;
    var todos = this.data.todos;
    var that = this;
    todos.forEach(function(item) {
      item.completed = that.data.allCompleted;
    })
    var leftCount = this.data.leftCount;
    if (this.data.allCompleted) {
      leftCount = 0;
    } else {
      leftCount = todos.length;
    }
    this.setData({
      todos: todos,
      leftCount: leftCount
    })
  },

  /**
   * 清空todos
   */
  clearAllHandle: function() {
    /** 传统方式 */
    // var todos = [];
    // this.data.todos.forEach(function(item) {
    //   if (!item.completed) {
    //     todos.push(item);
    //   }
    // });
    // this.setData({
    //   todos: todos
    // })

    /** 过滤器方式 */
    var todos = this.data.todos.filter(function(item) {
      return !item.completed
    });
    this.setData({
      todos: todos
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var todos = this.data.todos;
    var leftCount = this.data.leftCount;
    for (var i = 0; i < todos.length; i++) {
      if (!todos[i].completed) {
        leftCount++;
      }
    }
    this.setData({
      leftCount: leftCount
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})