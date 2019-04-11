// pages/spfl/spfl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      { id: 0, title: "本周商场同步新品"},
      { id: 1, title: "绅士亲子装系列" },
      { id: 2, title: "漫威系列" },
      { id: 3, title: "官网专享款" },
      { id: 4, title:  "男士" },
      { id: 5, title:  "男士上装" },
      { id: 6, title:  "男士裤装" },
      { id: 7, title:  "男士外套" },
      { id: 8, title:  "男士西装" },
      { id: 9, title:  "男士配饰" },
      { id: 10, title: "女士" },
      { id: 11, title: "女士上装" },
      { id: 12, title: "女士裤装" },
      { id: 13, title: "女士裙装" },
      { id: 14, title: "女士外套" },
      { id: 15, title: "女士正装" },
      { id: 16, title: "女士配饰" },
    ],
    uid:"0"
  },
  check:function(e){
    var a = e.target.dataset.id
    this.setData({uid:a})
    console.log(this.data.uid)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})