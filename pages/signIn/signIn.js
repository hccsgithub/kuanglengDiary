// pages/signIn/signIn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: "",
    name: "",
    gender: "",
    age: "",
    signName:""
  },
  formSubmit:function(e){
    var that = this;
    that.data.number = e.detail.value.number
    that.data.name = e.detail.value.name
    that.data.gender = e.detail.value.gender
    that.data.age = e.detail.value.age
    if (that.data.number != "" && that.data.name != "") {
      console.log(that.data.number);
      wx.cloud.database().collection('allsignRecord')
      .add({
        data:{
            number:that.data.number,
            name:that.data.name,
            gender:that.data.gender,
            age:that.data.age,
            signName:that.data.signName
        }
      }),
      wx.showToast({
        title: '签到成功',
        icon: 'success'
      }),
      wx.redirectTo({
        url: '/pages/mysignlist/mysignlist',
      })
    } else {
      wx.showToast({
        title: '学号、姓名不能为空',
        icon: 'none'
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var arr = [];
    for(let i in options){
      arr.push(options[i]);
    }
    this.data.signName = arr[0];
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

