var app = getApp()
Page({
  data: {
    userInfo: {},
    motto: 'Hello World',
    // orderItems
    orderItems: [
      {
        typeId: 0,
        name: '发表',
        url: 'bill',
        imageurl: '../../images/1.png',
      },
      {
        typeId: 1,
        name: '获赞',
        url: 'bill',
        imageurl: '../../images/1.png',
      },
      {
        typeId: 2,
        name: '关注',
        url: 'bill',
        imageurl: '../../images/1.png'
      },
      {
        typeId: 3,
        name: '收藏',
        url: 'bill',
        imageurl: '../../images/1.png'
      }
    ],
  },
  //事件处理函数
  toOrder: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})