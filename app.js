// app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:'kuangleng001-2gth779o4b012cd0'
    })
    var OPEN_ID = '';
    wx.login({

    })
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 1500)

  },
   globalData: {
    userInfo: null
  },
})
