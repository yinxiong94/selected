Page({

  /**
   * 页面的初始数据
   */
  data: {
      index:0
  },
  tocart:function(){
    wx.navigateTo({
      url: '/pages/cart/cart',
    })
  },
  tospfl:function(){
    wx.navigateTo({
      url: '/pages/spfl/spfl',
    })
  },
  tospfl1:function(){
    wx.navigateTo({
      url: '/pages/spfl1/spfl1',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'http://127.0.0.1:3000/sp',
        success:(res)=>{
          console.log(res)
        }
      }),
      wx.request({
        url: 'http://127.0.0.1:3000/cart/1',
        success:(res)=>{
          this.setData({ index: res.data.length })
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