// pages/mysignlist/mysignlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    mysign:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var that = this
      wx.cloud.callFunction({
        name:'getData'
      })
      .then(res =>{
        console.log('成功',res)
        this.setData({
          openid : res.result.openid
        })
      })
      .catch(res =>{
        console.log('失败',res)
      })
    
    wx.cloud.database().collection('allsignRecord')
    .where({
      _openid:this.data.openid
    })
    .get()
    .then(res=>
      {
        console.log('我的签到',res.data)
        this.setData(
          {
            mysign:res.data
          }
        )
      })
      .catch(err=>{
        console.log('我的签到失败',err)
      })
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