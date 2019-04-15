// pages/buyclose/buyclose.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uid:"",
      title:"",
      pid:"",
      color:"",
      size:"",
      price:"",
      price1:"",
      img_url:"",
      price2:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ uid: this.options.uid, title: this.options.title, pid: this.options.pid, color: this.options.color, size: this.options.size, price: this.options.price, price1: this.options.price1, img_url: this.options.img_url,price2:this.options.price1-this.options.price})
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