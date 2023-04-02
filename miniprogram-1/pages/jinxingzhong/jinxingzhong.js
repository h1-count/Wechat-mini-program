// pages/tijiaodingdan/tijiaodingdan.js
Page({
    cancel_the_order:function () {
        wx.showModal({
          title: '确认取消订单',
          content: '订单取消成功后，金额将于2小时之内返回您的账户，请注意查收',
          success:function (res) {
              if (res.confirm) {
                  wx.showToast({
                    title: '取消成功',
                    icon: 'success',
                    duration: 2000//持续的时间
                })
                console.log('用户确认取消订单')
              }else{
                  console.log('用户不取消订单')
              }
          }
        })
        // wx.showToast({
        //     title: '取消成功',
        //     icon: 'success',
        //     duration: 2000//持续的时间
        // })  
  },
})
