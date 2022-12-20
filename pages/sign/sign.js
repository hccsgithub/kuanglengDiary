// pages/sign/sign.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    signKey: "",
    signName:"",
  },

  beginSign:function(e){
    var that = this;
    that.data.signKey = e.detail.value.signKey
    that.data.signName = e.detail.value.signName
    var signkey = ""
    if (that.data.signKey != "") {
      console.log(that.data.signKey);
      wx.cloud.database().collection('signlist')
      .where({
        signKey:that.data.signKey, 
        signName:that.data.signName
      })
      .get()
      .then(res=>
        {
          console.log('请求数据成功',res.data)
          if(res.data.length==0){
            wx.showToast({
              title: '签到码或签到名称      输入错误',
              icon: 'none'
            })
          }else{
            wx.redirectTo({
              //url:'/pages/sign/sign',
              url:'/pages/signIn/signIn?signName='+that.data.signName,
            })
          }
        })
        .catch(err=>{
          console.log('请求数据失败',err)
        })
    } else {
      wx.showToast({
        title: '口令为不能为空',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})