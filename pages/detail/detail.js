// pages/detail/detail.js
let datas  = require('../../datas/list-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj: {}, // 详情页默认数据,
    isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let index = options.index * 1
    // 更新detailObj的状态数据
    this.setData({
      detailObj: datas.list_data[index],
      index
    })
    wx.getStorage({
      key: 'isCollected',
      success: (res)=> {
        this.setData({
          isCollected:res.data[index]
        })
      },
    })
  },
  onHandleClick(){
    let isCollected = !this.data.isCollected
    this.setData({
       isCollected
    })
    let title = isCollected?'收藏成功':'取消收藏'
    wx.showToast({
      title
    })
    let index = this.data.index
    let obj =wx.getStorageSync('isCollected') || {}
    obj[index] = isCollected
    wx.setStorageSync('isCollected', obj)

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