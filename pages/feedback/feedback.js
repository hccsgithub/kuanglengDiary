// pages/feedback/feedback.js
Page({
  data: {
    current: 0,
    suggestText:""
  },
 
  // 文本框字数限制
  limit: function (e) {
    var content = e.detail.value;
    var length = content.length;
    console.log(content);
    console.log(length);
    this.setData({
      current: length,
      suggestText:content
    });
  },
  feedSend:function(){
    var that = this;
    if(that.data.suggestText!=''){
      wx.cloud.database().collection('feedback')
      .add({
        data : {
          fd : that.data.suggestText
        }
      })
      .then(res => {
        wx.showToast({
            title: '感谢你的反馈！',
            icon: 'success'
        })
      })
      .catch(res=>{
        wx.showToast({
            title: '提交失败，请检查网络设置！',
            icon: 'none'
        })
      })  
    }else{
      wx.showToast({
        title: '输入不能为空！',
        icon: 'none'
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
