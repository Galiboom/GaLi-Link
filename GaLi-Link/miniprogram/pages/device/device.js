Page({
  data: {
    isSearching: false,
    devices: []
  },
  onLoad() {
    this.startSearch();
  },
  startSearch() {
    this.setData({ devices: [], isSearching: true });
    wx.openBluetoothAdapter({
      success: () => {
        wx.startBluetoothDevicesDiscovery({
          success: () => {
            wx.onBluetoothDeviceFound((res) => {
              let newDevs = res.devices.filter(d => d.name || d.localName);
              this.setData({ devices: [...this.data.devices, ...newDevs] });
            });
          }
        });
      },
      fail: () => {
        wx.showToast({ title: '请开启蓝牙', icon: 'none' });
        this.setData({ isSearching: false });
      }
    });
  },
  connectTo(e) {
    const { deviceId, name } = e.currentTarget.dataset;
    wx.showLoading({ title: '连接中...' });
    wx.createBLEConnection({
      deviceId,
      success: () => {
        wx.hideLoading();
        wx.showToast({ title: '连接成功' });
        setTimeout(() => {
          wx.reLaunch({
            url: `/pages/index/index?connected=true&name=${name}`
          });
        }, 1000);
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({ title: '连接失败', icon: 'none' });
      }
    });
  }
});