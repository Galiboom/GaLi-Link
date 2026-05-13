// app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        env: 'wx30a08a24fcc0096c', // 这里填你的云开发环境 ID，暂时留空也可以
        traceUser: true,
      });
    }
    this.globalData = {
      heartRate: 0,
      connectedDeviceId: ""
    };
  }
});