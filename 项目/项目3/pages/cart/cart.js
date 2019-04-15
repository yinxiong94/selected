// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    price: 0.00,
    checked: [],
    ind: [],
    a: 0,
    b: 0,
    c: false,
    fid:[]
  },
  nowshop:function(){
    var arr = [];
    for(var i=0;i<this.data.list.length;i++){
      if(this.data.checked[i]===true){       
        arr.push(this.data.list[i].uid)
        this.setData({ fid: arr })
      } 
    }
    console.log(this.data.fid)
    // wx.navigateTo({
    //   url: '/pages/buyclose/buycolse?fid='+this.data.fid,
    // })
  },
  all: function () {
    this.data.b += 1;
    if (this.data.b % 2 != 0) {
      var a = 0;
      for (var i = 0; i < this.data.list.length; i++) {
        this.setData({ ['checked[' + i + ']']: true, ['ind[' + i + ']']: 1 })
        a += this.data.list[i].price * this.data.list[i].count;
      }
      this.setData({ price: a, c: true })
    }
    else {
      for (var i = 0; i < this.data.list.length; i++) {
        this.setData({ ['checked[' + i + ']']: false, ['ind[' + i + ']']: 0 })
      }
      this.setData({ price: 0, c: false, ind: [] })
    }
  },
  change: function (e) {
    var c = e.target.dataset.ind;
    var a = e.target.dataset.price;
    var b = e.target.dataset.count;
    var sum = 0;
    if (!this.data.ind[c]) {
      var e = parseInt(this.data.a) + 1;
    }
    else {
      var e = parseInt(this.data.ind[c]) + 1;
    }
    this.setData({ ['ind[' + c + ']']: e })
    if (this.data.ind[c] % 2 != 0) {
      this.setData({ price: a * b + this.data.price, ['checked[' + c + ']']: true })
    }
    else {
      this.setData({ price: this.data.price - a * b, ['checked[' + c + ']']: false })
    }
    for (var i = 0; i < this.data.list.length; i++) {
      if (this.data.checked[i] === true) {
        sum += 1
      }
    }
    if (sum != this.data.list.length) {
      this.setData({ c: false, b: 0 })
    } else { this.setData({ c: true, b: 1 }) }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://127.0.0.1:3000/cart/1',
      success: (res) => {
        this.setData({ list: res.data });
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