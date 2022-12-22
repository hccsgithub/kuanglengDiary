// pages/create/create.js
Page({
  data: {
    openid :"",
    signKey: "",
    signName:"",
    latitude: "",
    longitude: ""

  },
  createSign:function(e){
    var that = this;
    that.data.signKey = e.detail.value.signKey
    that.data.signName = e.detail.value.signName
    if (that.data.signKey != "") {
      console.log(that.data.signKey);
      wx.cloud.database().collection('signlist')
      .add({
        data:{
            // openid:that.data.openid,
            signKey:that.data.signKey,
            signName:that.data.signName
        },
        success:res => {
          console.log(res);
        },
        fail: res => {
          console.log("创建过了");
          console.log(err);
          wx.showToast({
            title: '该签到已创建',
            icon: 'none'
          })
        }
      }),
      wx.showToast({
        title: '创建签到成功',
        icon: 'success'
      }),
      wx.redirectTo({
        url: '/pages/createdSign/createdSign',
      })
    } else {
      wx.showToast({
        title: '口令为不能为空',
        icon: 'none'
      })
    }
  },
  GPSsubmit: function (e) {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        console.log(res);
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        });
        this.kaoqin();
      },
      fail: function (res) { 
        wx.showModal({
          title: '是否授权位置信息',
          content: '你需要授权位置信息才可以发起签到',
          showCancel: true,//是否显示取消按钮
          cancelText: "否",//默认是“取消”
          cancelColor: 'black',//取消文字的颜色
          confirmText: "是",//默认是“确定”
          confirmColor: 'black',//确定文字的颜色
          success: function (res) {
            if (res.confirm) {
              wx.openSetting({
                success(res) {
                }
              })
            } else if (res.cancel) {
              wx.showToast({
                title: '你取消了授权！',
                icon: 'none'
              });
            }
          }
        });
      }

    }) 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:'getData'
    })
    .then(res =>{
      console.log('成功',res)
      this.setData({
        openid:res.result.openid
      })
    })
    .catch(res =>{
      console.log('失败',res)
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
