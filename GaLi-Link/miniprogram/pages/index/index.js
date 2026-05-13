Page({
  data: {
    connected: false,
    heartRate: '--',
    deviceName: ''
  },
  onLoad(options) {
    if (options.connected === 'true') {
      this.setData({
        connected: true,
        deviceName: options.name || '已连接设备'
      });
      // 开启模拟跳动，确保界面有反馈
      this.timer = setInterval(() => {
        this.setData({ heartRate: Math.floor(Math.random() * 10) + 75 });
      }, 2000);
    }
  },
  onUnload() {
    if (this.timer) clearInterval(this.timer);
  },
  navToConnect() {
    wx.navigateTo({ url: '/pages/device/device' });
  }
});