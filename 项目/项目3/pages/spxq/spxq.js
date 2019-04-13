// pages/spxq/spxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isshow:false,
      isshow1:false,
      isshow2:false,
      list:[],
      uid:"",
      sz: [],
      arr: [],
      title: "",
      price: "",
      price1: "",
      pid: "",
      color: [],
      store: "",
      count: 1,
      ind:"",
      inde:"",
      size:"请选择尺码",
      size1:"",
      a:0
  },
  addcart:function(){
    if(this.data.size=="" || this.data.size1==""){
      wx.showToast({
        title: '请选择颜色或尺码',
      })
    }
    else{
    wx.request({
      url: 'http://127.0.0.1:3000/spxq/addcart3',
      method:"GET",
      data: { pid: this.data.pid[this.data.a], count: this.data.count, uid: this.data.uid, img_url: this.data.arr[this.data.a],title:this.data.title,color:this.data.size,price:this.data.price,store:this.data.store,size:this.data.size1,price1:this.data.price1},
      success:(res)=>{
        console.log(res)
      }
    })
    }
  },
  color:function(e){
      this.setData({ind:e.target.dataset.ind,size:e.target.dataset.text,a:e.target.dataset.ind})
  },
  color1:function(e){
      this.setData({inde:e.target.dataset.inde,size1:e.target.dataset.size})
  },
 show:function(){
   if(this.data.isshow==false){
     this.setData({isshow:true})
   }
 },
 hide:function(){
   this.setData({isshow:false,isshow1:false,isshow2:false})
 },
  cart: function () { 
    if (this.data.isshow1 == false) {
      this.setData({ isshow1: true })
    }
  },
  cart1: function () { 
    if (this.data.isshow2 == false) {
      this.setData({ isshow2: true })
    }
  },
  jian:function(e){
    var a=this.data.count-1;
    if(a<1){a=1}
    this.setData({count:a})  
  },
  jia:function(){
    var a=this.data.count+1;
    this.setData({count:a})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({uid:this.options.uid})
    wx.request({
      url: 'http://127.0.0.1:3000/spxq?uid='+this.options.uid,
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
        this.setData({list:a,color:b,title:c,price:d,price1:e,pid:f,sz:g,arr:h,store:i})
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