//const { BasicDataMapping } = require("WechatXrFrame/core/Element")
// pages/createdSign/createdSign.js
Page({
  data: {
    createdSign: [],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.cloud.database().collection('signlist').get()
      .then(res=>
        {
          console.log('请求数据成功',res.data)
          this.setData(
            {
              createdSign:res.data
            }
          )
          
        })
        .catch(err=>{
          console.log('请求数据失败',err)
        })
  },
  getSignList:function(e){  
    console.log('获得当前签到',e)
    console.log('获得当前签到名称',e.currentTarget.dataset.id)
    wx.redirectTo({
      url: '../hsignlist/hsignlist?signName='+e.currentTarget.dataset.id,
    })
  },
  Bremove:function(e){
    console.log('要删除的签到是',e)
    wx.cloud.database().collection('signlist')
    .doc(e.currentTarget.dataset.id)
    .remove()
    .then(res => {
      console.log('删除成功',res)
    })
    .catch(res => {
      console.error('删除失败',res)
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
