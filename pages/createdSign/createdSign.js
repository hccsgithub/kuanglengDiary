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
  getSignList:function(){
    wx.redirectTo({
      url: '',
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
