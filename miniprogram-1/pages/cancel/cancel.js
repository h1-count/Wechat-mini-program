Page({

  /**
   * 页面的初始数据
   */
  data: {
    resultType: "",
    resultContent: "",
    url:""
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var resultType = options.resultType;
    if (resultType == "success") {
      this.setData({
        resultType: "success",
        resultContent: "取消成功",
        url: '../list/list?status=tosend'
      });
    } else {
      this.setData({
        resultType: "warn",
        resultContent: "取消失败",
        url: '../jinxingzhong/jinxingzhong'
      });
    }
  }
})