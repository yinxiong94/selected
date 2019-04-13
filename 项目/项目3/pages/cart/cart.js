// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    price:0.00,
    checked:[],
    ind:[],
    a:0
  },
  change:function(e){
    var c=e.target.dataset.index;
    if(this.data.ind[c]==""){
      var e = parseInt(this.data.a)+ 1
    }
    else{
      var e =parseInt(this.data.ind[c])+1
    }
    this.setData({['ind['+c+']']: e })
    console.log(this.data.a)
    console.log(this.data.ind)    
    // var a=e.target.dataset.count;
    // var b=e.target.dataset.price;
    // this.setData({price:a*b})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'http://127.0.0.1:3000/cart/1',
        success:(res)=>{
          this.setData({list:res.data});
        }
      })
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