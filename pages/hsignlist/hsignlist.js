// pages/hsignlist/hsignlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mysignlist: [],
    length: 0,
    openid:"",
    signName:"",
    id:"",
    stop:"停止考勤"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = [];
    for(let i in options){
      arr.push(options[i]);
    }
    this.data.signName = arr[0];

    var that = this
      wx.cloud.callFunction({
        name:'getData'
      })
      .then(res =>{
        console.log('成功',res)
        this.setData({
          openid : res.result.openid,
        })
      })
      .catch(res =>{
        console.log('失败',res)
      })
    
    wx.cloud.database().collection('allsignRecord')
    .where({
      _openid:this.data.openid,
     signName:that.data.signName,
    })
    .get()
    .then(res=>
      {
        console.log('已签到名单',res.data)
        this.setData(
          {
            mysignlist:res.data,
            length:res.data.length
          }
        )
      })
      .catch(err=>{
        console.log('查看签到失败',err)
      })
    
      wx.cloud.database().collection('signlist')
      .where({
         _openid : that.data.openid
      })
      .get()
      .then(res=>
        {
          console.log('请求id成功',res.data)
          console.log('请求id成功2',res.data[0]._id)
          this.setData(
            {
              id:res.data[0]._id
            }
          )
        })
        .catch(err=>{
          console.log('请求id失败',err)
        })

  },
  stopSign:function(e){
    console.log('要更改的签到是',e)
    console.log('要更改的签到id是',e.currentTarget.dataset.id)
    wx.cloud.database().collection('signlist')
    .doc(e.currentTarget.dataset.id)
    .update({
      data:{
        flag:"false"
      }
      
    })
    .then(res => {
      console.log('修改成功',res)
      this.data.stop = "已停止"
    })
    .catch(res => {
      console.error('修改失败',res)
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
