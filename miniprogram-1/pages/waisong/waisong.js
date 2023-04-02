// index.js
// 获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  onLoad:function () {    
    let hh = new Date().getHours()
    let mf = new Date().getMinutes()<10?'0'+new Date().getMinutes():new Date().getMinutes()
    var dateTime = `${hh}:${mf}`;
    this.setData({
        time:dateTime
      });
  },
//   data: {
//     hourMinuteSecond: '',//时分，根据需要选择
//     timeDivision: ''//时分秒，根据需要选择
//   },
//   // 时分的事件方法
//   selectDateMinuteChange(e) {
//     this.setData({
//       hourMinuteSecond: e.detail.value
//     })
//   },
//   changeTap:function (e) {
//     console.log(e.detail.value);
//   },
  ziquClick(){
    this.setData({
      num:1
    }),
    wx.redirectTo({
      url: '/pages/index/index',
    })
  },
  waisongClick(){
    this.setData({
      num:2
    }),
    wx.redirectTo({
      url: '/pages/waisong/waisong',
    })
  },
  goNext:function () {
    wx.navigateTo({
      url: '/pages/pay/pay',
    })
  },

})

