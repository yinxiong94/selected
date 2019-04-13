// pages/spfl1/spfl1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      uid:"",
      isshow:false,
      list1: [],
      uid1: "",
      sz: [],
      arr: [],
      title: "",
      price: "",
      price1: "",
      pid: "",
      color: [],
      store: "",
      count: 1,
      ind: "",
      inde: "",
      a:0,
      size:"",
      size1:""
  },
  hide:function(){
    this.setData({isshow:false})
  },
  jian: function (e) {
    var a = this.data.count - 1;
    if (a < 1) { a = 1 }
    this.setData({ count: a })
  },
  jia: function () {
    var a = this.data.count + 1;
    this.setData({ count: a })
  },
  color: function (e) {
    this.setData({ ind: e.target.dataset.ind, a: e.target.dataset.ind,size: e.target.dataset.text })
  },
  color1: function (e) {
    this.setData({ inde: e.target.dataset.inde, size1: e.target.dataset.size})
  },
  cart:function(e){
    this.setData({uid1:e.target.dataset.id}) 
    if(this.data.isshow==false){
      this.setData({isshow:true})
    }
    wx.request({
      url: 'http://127.0.0.1:3000/spxq?uid='+this.data.uid1,
      success:(res)=>{
        var a = res.data[0];
        var b = a.color.split("/");
        var c = a.title;
        var d = a.price;
        var e = a.price1;
        var f = a.pid.split("&&")
        var img = a.img_url1;
        var size = a.SIZE;
        var g = size.split(",");
        var h = img.split(",");
        h = h[0].split("&&");
        var i = a.Store;
        this.setData({ list1: a, color: b, title: c, price: d, price1: e, pid: f, sz: g, arr: h, store: i })
        console.log(this.data)
      }
    })
  },
  tospxq:function(e){
    this.setData({uid:e.target.dataset.id})
     wx.navigateTo({
       url: '/pages/spxq/spxq?uid='+this.data.uid,
     })
  },
  addcart:function(){
    if (this.data.size == "" || this.data.size1 == "") {
      wx.showToast({
        title: '请选择颜色或尺码',
      })
    }
    else {
      wx.request({
        url: 'http://127.0.0.1:3000/spxq/addcart3',
        method: "GET",
        data: { pid: this.data.pid[this.data.a], count: this.data.count, uid: this.data.uid1, img_url: this.data.arr[this.data.a], title: this.data.title, color: this.data.size, price: this.data.price, store: this.data.store, size: this.data.size1, price1: this.data.price1 },
        success: (res) => {
          console.log(res)
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'http://127.0.0.1:3000/sp',
        success:(res)=>{
          this.setData({list:res.data})
          console.log(this.data.list)
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